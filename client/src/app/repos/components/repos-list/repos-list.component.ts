import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Repo } from '../../models/Repo.model';
import { ReposState  } from '../../store/repos.state';
import { getRepos } from '../../store/repos.selector';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {

  constructor(private store : Store<{ repos : ReposState  }>) { }


  repos$!: Observable<Repo[]> 

  ngOnInit(): void {
    this.repos$ = this.store.select(getRepos)
  }

}
