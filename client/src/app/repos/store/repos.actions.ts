import { Repo } from "../models/Repo.model";
import { createAction , props } from "@ngrx/store";
import { ReposActionEnum } from "./repos.enum";
import { HttpErrorResponse } from "@angular/common/http";


export const FetchUserRepos = createAction(ReposActionEnum.FetchReposAction , props<{payload : string}>()); 
export const FetchUserReposSuccess = createAction(ReposActionEnum.FetchReposActionSuccess,props<{payload : Repo[]}>()); 
export const FetchUserReposFailure = createAction(ReposActionEnum.FetchReposActionFailure,props<{error : HttpErrorResponse}>());  
