import { createFeatureSelector , createSelector } from "@ngrx/store";
import { reposAdapter , ReposState } from "./repos.state";

export const reposSelector = reposAdapter.getSelectors(); 


const getUserRepos = createFeatureSelector<ReposState>('repos')

export const getRepos = createSelector(getUserRepos,reposSelector.selectAll); 
export const getRepoById = (id:string)=> createSelector(getRepos,(items)=>{
    if(items){
        return items.find((item)=>{
            return item.id === parseInt(id) ; 
        }); 
    }
    else {
        return null 
    }
})