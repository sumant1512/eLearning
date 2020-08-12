import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent {

  isAddClassMobile = false;

 
  ngOnInit() {
  
    if (window.innerWidth < 1024) {
    this.isAddClassMobile=true;
     }
     window.onresize = () => this.isAddClassMobile = window.innerWidth < 1024;
  
    
  }

  myFunction() {
    var element = document.getElementById("slider");
    element.classList.toggle("show");
 }
            
     }
    

