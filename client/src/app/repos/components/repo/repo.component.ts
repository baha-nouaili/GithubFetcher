import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { getRepoById } from '../../store/repos.selector';
import { Repo } from '../../models/Repo.model';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.sass']
})
export class RepoComponent implements OnInit {

  constructor(private route : ActivatedRoute , private store : Store ) { }

 
  selectedId!: string | null;
  repo$!: Observable<Repo> | string | null  
  

  ngOnInit(): void {
   this.selectedId =  this.route.snapshot.paramMap.get('id'); 
   this.repo$ = this.store.select(getRepoById(this.selectedId))
  }

}
