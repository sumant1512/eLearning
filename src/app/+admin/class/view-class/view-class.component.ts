import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {
  
  addClassForm: FormGroup;
  loader: boolean;

  classes = [
    {
      "class": "class 1",
      "dates": "1/2/2019"
    },
    {
      "class": "class 2",
      "dates": "1/12/2019"
    },
    {
      "class": "class 3",
      "dates": "11/10/2019"
    },
    {
      "class": "class 4",
      "dates": "11/10/2019"
    },
    {
      "class": "class 5",
      "dates": "11/10/2019"
    },
    {
      "class": "class 6",
      "dates": "11/10/2019"
    },
    {
      "class": "class 7",
      "dates": "11/10/2012"
    },
 ]

  constructor() { }
  

  ngOnInit(): void {}

}