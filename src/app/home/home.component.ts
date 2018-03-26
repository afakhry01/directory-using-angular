import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts = [
    {category: "friend", name: "Andrew Wilston"},
    {category: "family", name: "My Dad"},
    {category: "work", name: "Boss"},
  ];

  onAdd(event) {
    event.stopPropagation();
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
