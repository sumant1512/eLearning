import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  @ViewChild("header", { static: false }) header: ElementRef;
  schoolList = [
    {id: 1, schoolName: "testing1" ,name: "test0", isApproved: 1},
    {id: 2, schoolName: "testing2" ,name: "test1", isApproved: 0},
    {id: 3, schoolName: "testing3" ,name: "test2", isApproved: 1},
    {id: 4, schoolName: "testing4" ,name: "test3", isApproved: 0},
    {id: 5, schoolName: "testing5" ,name: "test4", isApproved: 0},
    {id: 6, schoolName: "testing6" ,name: "test5", isApproved: 0},
  ];
  constructor(private router: Router) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 100) {
      this.header.nativeElement.classList.add("cus-nav");
    } else {
      this.header.nativeElement.classList.remove("cus-nav");
    }
  }

  ngOnInit(){}

  logout(){
    this.router.navigateByUrl('/home');
  }

}
