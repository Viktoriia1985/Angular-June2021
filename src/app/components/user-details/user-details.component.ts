import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  // user: User;                                  // var 1
  //
  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(value => {
  //     console.log(history.state)
  //
  //   })


  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(value => {

      this.user = this.router.getCurrentNavigation()?.extras.state as User;

      console.log(this.router.getCurrentNavigation()?.extras.state)
    })

  }

  ngOnInit(): void {
  }

}
