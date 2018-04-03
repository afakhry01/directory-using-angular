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

  name:any;
  category:any;

  onAdd(event) {
    event.stopPropagation();
    this.contacts.push({category: this.category , name: this.name});
  }

  onDelete(aContact) {
    event.stopPropagation();
    let index = this.contacts.indexOf(aContact);
    this.contacts.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
