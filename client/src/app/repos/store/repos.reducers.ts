import { Action , createFeatureSelector, createReducer , createSelector, on } from "@ngrx/store";
import { Repo } from "../models/Repo.model";
import * as ReposAction from "./repos.actions"; 
import { initialState , reposAdapter , ReposState } from "./repos.state";


const reposReducer = createReducer(
    initialState , 
    on(ReposAction.FetchUserRepos , (state)=>({...state , loading : true  }) ),
    on(ReposAction.FetchUserReposSuccess , (state,action)=>{
        return reposAdapter.addMany(action.payload,{
            ...state , 
            loading : false 
        }); 
    }), 
    on(ReposAction.FetchUserReposFailure ,(state)=>({...state,}))
)

export function reducerRepo(state : ReposState | undefined, action: Action){
    return reposReducer(state,action)
}

 