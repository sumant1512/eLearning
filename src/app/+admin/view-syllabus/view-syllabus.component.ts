import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-syllabus',
  templateUrl: './view-syllabus.component.html',
  styleUrls: ['./view-syllabus.component.css']
})
export class ViewSyllabusComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
    this.selectClass(1);
  }
  selectedSubjects;
  classnamewithid;
  selectClass(selectedClass) {
    this.classnamewithid = this.classes.filter(
      (topic) => topic.classid === selectedClass
    );     // to get the class name and class ID of selected class


    this.selectedSubjects = this.subjectWithTopics.filter(
      (topic) => topic.classid === selectedClass
    );     // to filter out class with same id


    const groups = this.selectedSubjects.reduce((acc, cur) => {
      (acc[cur.subjectName] = acc[cur.subjectName] || []).push(cur.topicName);
      return acc;
    }, {}); // to group the array according to subject


    this.selectedSubjects = Object.keys(groups).map((key) => ({
      SubjectName: key,
      topics: groups[key],
    }));

  }
  classes = [
    { classid: 1, classname: "class 1" },
    { classid: 2, classname: "class 2" },
    { classid: 3, classname: "class 3" },
    { classid: 4, classname: "class 4" },
    { classid: 5, classname: "class 5" },
    { classid: 6, classname: "class 6" },
    // { classid: 7, classname: "class 7" },
    // { classid: 8, classname: "class 8" },
    { classid: 9, classname: "JEE" },
    { classid: 10, classname: "NEET" },
  ];

  subjectWithTopics = [
    {
      classid: 1,
      subjectName: "maths",
      topicName: "topic1 of maths class id 1",
    },
    {
      classid: 1,
      subjectName: "maths",
      topicName: "topic2 of maths class id 1",
    },
    {
      classid: 1,
      subjectName: "English",
      topicName: "topic1 of English class id 1",
    },
    {
      classid: 1,
      subjectName: "English",
      topicName: "topic2 of English class id 1",
    },
    {
      classid: 1,
      subjectName: "English",
      topicName: "topic3 of English class id 1",
    },
    {
      classid: 1,
      subjectName: "Science",
      topicName: "topic1 of Science class id 1",
    },
    {
      classid: 1,
      subjectName: "Science",
      topicName: "topic1 of Science class id 1",
    },
    {
      classid: 1,
      subjectName: "Science",
      topicName: "topic1 of Science class id 1",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      topicName: "topic1 of Hindi class id 1",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      topicName: "topic1 of Hindi class id 1",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      topicName: "topic1 of Hindi class id 1",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      topicName: "topic1 of Hindi class id 1",
    },
    {
      classid: 1,
      subjectName: "Social Science",
      topicName: "topic1 of Social Science class id 1",
    },
    {
      classid: 2,
      subjectName: "HINDI",
      topicName: "topic1 of hINDI class id 20",
    },
    {
      classid: 2,
      subjectName: "HINDI",
      topicName: "topic2 of hINDI class id 20",
    },
    {
      classid: 2,
      subjectName: "HINDI",
      topicName: "topic3 of HINDI class id 20",
    },
    {
      classid: 2,
      subjectName: "English",
      topicName: "topic1 of English class id 20",
    },
    {
      classid: 2,
      subjectName: "English",
      topicName: "topic2 of English class id 20",
    },
    {
      classid: 2,
      subjectName: "English",
      topicName: "topic3 of English class id 20",
    },
    {
      classid: 3,
      subjectName: "English",
      topicName: "topic1 of English class id 3",
    },
    {
      classid: 3,
      subjectName: "English",
      topicName: "topic2 of English class id 3",
    },
    {
      classid: 3,
      subjectName: "Maths",
      topicName: "topic1 of Maths class id 3",
    },
    {
      classid: 3,
      subjectName: "Hindi",
      topicName: "topic1 of hindi class id 3",
    },
    {
      classid: 4,
      subjectName: "English",
      topicName: "topic1 of English class id 4",
    },
    {
      classid: 5,
      subjectName: "English",
      topicName: "topic1 of English class id 5",
    },
    {
      classid: 6,
      subjectName: "English",
      topicName: "topic1 of English class id 6",
    },
    {
      classid: 7,
      subjectName: "English",
      topicName: "topic1 of English class id 7",
    },
    {
      classid: 8,
      subjectName: "English",
      topicName: "topic1 of English class id 8",
    },
    {
      classid: 9,
      subjectName: "physics",
      topicName: "topic1 of physics class id 9",
    },
    {
      classid: 10,
      subjectName: "Chemistry",
      topicName: "topic1 of Chemistry class id 10",
    },
  ];

}
