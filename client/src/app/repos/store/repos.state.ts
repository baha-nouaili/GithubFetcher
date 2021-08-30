import { EntityState , createEntityAdapter } from "@ngrx/entity"
import { Repo } from "../models/Repo.model"

export interface ReposState extends EntityState<Repo> {
   
} 

export const reposAdapter = createEntityAdapter<Repo>(); 

export const initialState:ReposState =  reposAdapter.getInitialState()

export const reposSelector = reposAdapter.getSelectors(); 