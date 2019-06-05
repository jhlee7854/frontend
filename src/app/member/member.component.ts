import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: Member[];
  
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }
  
  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

}
