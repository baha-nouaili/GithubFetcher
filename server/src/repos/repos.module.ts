import { Module } from '@nestjs/common';
import { RepoController } from './repos.controller';
import { RepoService } from './repos.service'; 
import { HttpModule , HttpService } from '@nestjs/axios';


@Module({
  controllers: [RepoController],
  providers : [RepoService],
  imports : [HttpModule]
})
export class ReposModule {}
