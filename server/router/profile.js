const express = require("express");
const router = new express.Router();
const connection = require("../db/connection");
// const {
//   sendWelcomeEmail,
//   sendSessionNotification,
// } = require("../emails/account");
var base64ToImage = require("base64-to-image");
const authToken = require("../authentication");
const fs = require("fs");

router.get("/getProfile", authToken, async (req, res) => {
  try {
    await connection.query(
      "select user_type,email from credentials where user_id =?",
      [req.user_id],
      async (err, results, fields) => {
        if (err) {
          res.status(200).send({ status: false, message: err.sqlMessage });
        } else {
          if (results.length) {
            if (results[0].user_type === "Admin") {
              req.email = results[0].email;
              await connection.query(
                "select * from user_profile where user_id =?",
                [req.user_id],
                async (err, results, fields) => {
                  if (err) {
                    res
                      .status(200)
                      .send({ status: false, message: err.sqlMessage });
                  } else {
                    await connection.query(
                      "SELECT COUNT(student_id) as cs FROM student_with_school WHERE user_id =?",
                      req.user_id,
                      async (err, results1, fields) => {
                        if (err) {
                          res
                            .status(200)
                            .send({ status: false, message: err.sqlMessage });
                        } else {
                          var data = Object.values(
                            JSON.parse(JSON.stringify(results1))
                          );
                          res.status(200).send({
                            status: true,
                            profile: results[0],
                            email: req.email,
                            students: data[0].cs,
                          });
                        }
                      }
                    );
                  }
                }
              );
            } else if (results[0].user_type === "Student") {
              await connection.query(
                "select * from student_profile where student_id =?",
                [req.body.user_id],
                async (err, results, fields) => {
                  if (err) {
                    res
                      .status(200)
                      .send({ status: false, message: err.sqlMessage });
                  } else {
                    res.status(200).send({ status: true, profile: results[0] });
                  }
                }
              );
            } else {
              res
                .status(200)
                .send({ status: false, message: "User not found" });
            }
          } else {
            res.status(200).send({ status: false, message: "User not found" });
          }
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/studentRegistration", authToken, async (req, res) => {
  try {
    var password = Math.floor(100000 + Math.random() * 900000);
    let credentialData = {
      email: req.body.email,
      pass_word: password,
      is_verified: 1,
      user_type: "Student",
      otp: 000,
    };
    await connection.query(
      "insert into credentials set ?",
      credentialData,
      (err, result) => {
        if (err) {
          res.status(200).send({ status: false, message: err.sqlMessage });
        } else {
          let insertedId = result.insertId;
          var studentDetails = {
            student_id: insertedId,
            email: req.body.email,
            pass_word: password,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            father_name: req.body.fatherName,
            class: req.body.class,
            state: req.body.state,
            city: req.body.city,
            pin_code: req.body.postalCode,
            gender: req.body.gender,
            mobile_number: req.body.mobile,
            registered_on: new Date(),
          };
          connection.query(
            "insert into student_profile set ?",
            studentDetails,
            async (err, results, fields) => {
              if (err) {
                res
                  .status(200)
                  .send({ status: false, message: err.sqlMessage });
              } else {
                let studentSchoolConnection = {
                  user_id: req.user_id,
                  student_id: insertedId,
                  assinged_on: new Date(),
                };
                connection.query(
                  "insert into student_with_school set ?",
                  studentSchoolConnection,
                  async (err, results, fields) => {
                    if (err) {
                      studentRegistrationError = err.sqlMessage;
                      connection.query(
                        "DELETE FROM student_profile WHERE user_id = ?",
                        insertedId,
                        (err) => {
                          if (err) {
                            res.status(200).send({
                              status: false,
                              message: err.sqlMessage,
                            });
                          } else {
                            connection.query(
                              "DELETE FROM credentials WHERE  user_id = ?",
                              insertedId,
                              (err) => {
                                if (err) {
                                  res.status(200).send({
                                    status: false,
                                    message: err.sqlMessage,
                                  });
                                } else {
                                  res.status(200).send({
                                    status: false,
                                    message: studentRegistrationError,
                                  });
                                }
                              }
                            );
                          }
                        }
                      );
                    } else {
                      var full_name =
                        req.body.firstName + " " + req.body.lastName;
                      sendWelcomeEmail(
                        full_name,
                        req.body.email,
                        password,
                        res
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/studentFromSchool", authToken, async (req, res) => {
  await connection.query(
    "SELECT student_id From student_with_school WHERE user_id = ?",
    req.user_id,
    async (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        if (results.length) {
          let studentsdata = [];
          results.forEach((element) => studentsdata.push(element.student_id));
          connection.query(
            "SELECT * FROM student_profile WHERE student_id in (?)",
            [studentsdata],
            (err, results, fields) => {
              if (err) {
                console.log(err);
              } else {
                res.status(200).send(results);
              }
            }
          );
        } else {
          res.status(200).send({ message: "no student" });
        }
      }
    }
  );
});

router.post("/updateSchoolDetails", authToken, async (req, res) => {
  var data = {
    school_name: req.body.schoolName,
    admin_name: req.body.adminName,
    aadhar_number: req.body.adminAdhar,
    school_registration_no: req.body.schoolRegistrationNo,
    admin_contact_no: req.body.adminContactNo,
    school_contact_no: req.body.schoolContactNo,
    last_updated_on: new Date(),
    address: req.body.address,
  };
  try {
    await connection.query(
      "update user_profile set ? where user_id = ?",
      [data, req.user_id],
      (err, results) => {
        if (err) {
          res.status(200).send({ status: false });
          console.log(err);
        } else {
          res.status(200).send({ status: true });
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/startSession", authToken, async (req, res) => {
  try {
    await connection.query(
      "SELECT sp.*, NULL AS pass_word FROM student_with_school AS SWS INNER JOIN student_profile AS sp ON sws.user_id= ?",
      req.user_id,
      (err, results, fields) => {
        if (err) {
          throw err;
        } else {
          var length = results.length;
          for (var i = 0; i < length; i++) {
            sendSessionNotification(
              results[i].student_first_name,
              results[i].email,
              res
            );
          }
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/uploadImages", authToken, async (req, res) => {
  const DIR = "../../../src/assets/";

  let folderName = req.body.admin_name + "_" + req.body.school_registration_no;
  console.log(req.body.admin_name);
  console.log(req.body.school_registration_no);

  let dir = DIR + folderName;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(DIR + folderName);
  }
  // fs.mkdir("./src/assets/veera ", { recursive: true }, function(err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log("New directory successfully created.")
  //   }
  // });

  let admin_profile_picture = req.body.adminImage;
  let school_cover_image = req.body.coverImage;
  let path = DIR + folderName + "/";
  // let path = "./src/assets/veera";
  let adminImageObj = {
    fileName: " admin_profile_picture" + req.body.school_registration_no,
    type: "png",
  };
  let coverImageObj = {
    fileName: "school_cover_image" + req.body.school_registration_no,
    type: "png",
  };
  let adminImageInfo = base64ToImage(
    admin_profile_picture,
    path,
    adminImageObj
  );
  let coverImageInfo = base64ToImage(school_cover_image, path, coverImageObj);
  let adminImagePath = path + adminImageInfo.fileName;
  console.log(adminImagePath);
  let coverImagePath = path + coverImageInfo.fileName;
  console.log(coverImagePath);
  var data = {
    admin_profile_picture: adminImagePath,
    school_cover_image: coverImagePath,
  };
  connection.query(
    "Insert into user_profile set ? where user_id =?",
    data,
    req.user_id
  );
});
module.exports = router;
