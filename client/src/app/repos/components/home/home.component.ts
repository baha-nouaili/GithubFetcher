import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchUserRepos } from '../../store/repos.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private store : Store ) { }

  ngOnInit(): void {
  }

  getRepos(payload:string){
  this.store.dispatch(FetchUserRepos({payload}))
  }

}
