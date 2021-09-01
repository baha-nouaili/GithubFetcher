import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';

@Injectable()
export class RepoService {

  constructor(private httpService : HttpService){}
  async getUserRepos(user): Promise<any> {
  const response = await this.httpService.get(`https://api.github.com/users/${user}/repos`).toPromise()
  return response.data   
  }
}
