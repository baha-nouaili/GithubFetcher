import { ActionReducerMap } from "@ngrx/store";
import { reducerRepo } from "../repos/store/repos.reducers"; 


export const reducers : ActionReducerMap<any> = {
    repos : reducerRepo 
}