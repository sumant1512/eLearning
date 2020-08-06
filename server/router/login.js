const express = require("express");
const Router = new express.Router();
const connection = require("../db/connection");
const jwt = require("jsonwebtoken");
const { Test } = require("tslint");
// const auth = require("../authentication");

Router.post("/login", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(req.body);
  await connection.query(
    "SELECT user_id FROM credentials WHERE email = ?",
    [email],
    async (err, results, fields) => {
      if (err) {
        res.status(206).send({
          status: false,
          message: "Technical Issue",
        });
      } else {
        if (results.length) {
          await connection.query(
            "SELECT user_id FROM credentials WHERE email = ? and pass_word = ?",
            [email, password],
            async (err, results, fields) => {
              if (err) {
                res.status(206).send({
                  status: false,
                  message: "Technical Issue",
                });
              } else {
                if (results.length) {
                  await connection.query(
                    "SELECT user_id,user_type FROM credentials WHERE email = ? and pass_word = ? and is_verified = ?",
                    [email, password, 1],
                    async (err, results, fields) => {
                      if (err) {
                        res.status(206).send({
                          status: false,
                          message: "Technical Issue",
                        });
                      } else {
                        if (results.length) {
                          let user_id = results[0].user_id;
                          console.log(process.env);
                          const authToken = await jwt.sign(
                            { user_id: user_id },
                            process.env.JWT_KEY,
                            { expiresIn: "3d" }
                          );
                          res.status(200).set({ authToken: authToken }).send({
                            status: true,
                            message: "login sucessfull",
                            user_type: results[0].user_type,
                            authToken: authToken,
                          });
                        } else {
                          res.status(206).send({
                            status: false,
                            message: "User not verified",
                          });
                        }
                      }
                    }
                  );
                } else {
                  res.status(206).send({
                    status: false,
                    message: "Incorrect Password",
                  });
                }
              }
            }
          );
        } else {
          res.status(206).send({
            status: false,
            message: "User not Registered",
          });
        }
      }
    }
  );
});

// Router.post("/logout", auth, async (req, res) => {
//   res.send({
//     code: 400,
//     message: "logout",
//   });
// });

module.exports = Router;
