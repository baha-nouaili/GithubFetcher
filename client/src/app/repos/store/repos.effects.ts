import { Injectable } from "@angular/core";
import { createEffect , ofType , Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { mergeMap , map , catchError , tap, concatMap, exhaustMap } from "rxjs/operators";
import { ServicesService } from "../services/services.service"; 
import { Repo } from "../models/Repo.model";
import * as ReposActions from "./repos.actions"; 

@Injectable()
export class ReposEffects {
  constructor(private actions$ : Actions , private service : ServicesService ) {}

  public fetchReposUser$ = createEffect(()=> 
  this.actions$.pipe(
    ofType(ReposActions.FetchUserRepos),
    mergeMap((action)=>
    this.service.getAllRepos(action.payload).pipe(
      map((payload:Repo[])=> {
      return ReposActions.FetchUserReposSuccess({payload}) 
      }),
      catchError((err)=>of(ReposActions.FetchUserReposFailure(err)))
     )
    )
   )
 ) 
}
