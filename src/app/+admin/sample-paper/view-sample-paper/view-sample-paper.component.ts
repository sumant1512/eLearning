import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sample-paper',
  templateUrl: './view-sample-paper.component.html',
  styleUrls: ['./view-sample-paper.component.css']
})
export class ViewSamplePaperComponent implements OnInit {
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


    this.selectedSubjects = this.subjectWithSamplePaper.filter(
      (topic) => topic.classid === selectedClass
    );     // to filter out class with same id


    const groups = this.selectedSubjects.reduce((acc, cur) => {
      (acc[cur.subjectName] = acc[cur.subjectName] || []).push(cur.samplePaper);
      return acc;
    }, {}); // to group the array according to subject


    this.selectedSubjects = Object.keys(groups).map((key) => ({
      SubjectName: key,
      papers: groups[key],
    }));

  }
  viewFile(){
    const url = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
    window.open(url);
  }
 


  classes = [
    { classid: 1, classname: "class 1" },
    { classid: 2, classname: "class 2" },
    { classid: 3, classname: "class 3" },
    { classid: 4, classname: "class 4" },
    { classid: 5, classname: "class 5" },
    { classid: 6, classname: "class 6" },
    { classid: 7, classname: "class 7" },
    { classid: 8, classname: "class 8" },
    { classid: 9, classname: "class 9" },
    { classid: 10, classname: "class 10" },
    { classid: 11, classname: "class 11" },
    { classid: 12, classname: "class 12" },
 
  ];

  subjectWithSamplePaper = [
    {
      classid: 1,
      subjectName: "maths",
      samplePaper: "Sample Paper 2019",
    },
    {
      classid: 1,
      subjectName: "maths",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 1,
      subjectName: "English",
      samplePaper: "Sample Paper 2019",
    },
    {
      classid: 1,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 1,
      subjectName: "English",
      samplePaper: "Sample Paper 2021",
    },
    {
      classid: 1,
      subjectName: "Science",
      samplePaper: "Sample Paper 2019",
    },
    {
      classid: 1,
      subjectName: "Science",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 1,
      subjectName: "Science",
      samplePaper: "Sample Paper 2021",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      samplePaper: "Sample Paper 2019",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      samplePaper: "Sample Paper 2021",
    },
    {
      classid: 1,
      subjectName: "Hindi",
      samplePaper: "Sample Paper 2019",
    },
    {
      classid: 1,
      subjectName: "Social Science",
      samplePaper: "Sample Paper 2019",
    },
    {
      classid: 2,
      subjectName: "HINDI",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 2,
      subjectName: "HINDI",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 2,
      subjectName: "HINDI",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 2,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 2,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 2,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 3,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 3,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 3,
      subjectName: "Maths",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 3,
      subjectName: "Hindi",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 4,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 5,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 6,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 7,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 8,
      subjectName: "English",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 9,
      subjectName: "physics",
      samplePaper: "Sample Paper 2020",
    },
    {
      classid: 10,
      subjectName: "Chemistry",
      samplePaper: "Sample Paper 2020",
    },
  ];

}
