import { Component, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member: Member = {
    id: 1,
    email: 'gildong.hong@example.com',
    password: '1234',
    name: '홍길동'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
