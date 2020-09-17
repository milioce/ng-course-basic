import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: string, name: string};
  subscription: Subscription;
  allowEdit = false;
  fragment = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name']
      }
    });

    const queryParams = this.route.snapshot.queryParams;
    console.log('queryParams shapshot', queryParams);

    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1';
    });

    this.route.fragment.subscribe(value => {
      this.fragment = value;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
