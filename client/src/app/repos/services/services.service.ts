import { Injectable } from '@angular/core';
import { ReposModule } from '../repos.module';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Repo } from '../models/Repo.model';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private http : HttpClient) { }

  getAllRepos(user:string):Observable<Repo[]>{
    return this.http.get<Repo[]>(`http://localhost:3000/repo/${user}`)
  }


  getOneRepo(id:string):Observable<Repo>{
    return this.http.get<Repo>(`http://localhost:3000/repo/one/${id}`)
  }



}
