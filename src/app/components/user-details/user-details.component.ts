import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {

    //   this.activatedRoute.params.subscribe(params => {
    //    let id = +params['id'];
    //
    //    userService.getUser(id).subscribe(value => this.user = value);
    //   });


    this.activatedRoute.data.subscribe(value => this.user = value['data']);

  }

  ngOnInit(): void {
  }

}
