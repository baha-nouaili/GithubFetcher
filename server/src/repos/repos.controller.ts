import { Controller , Get , Param} from '@nestjs/common';
import { RepoService } from './repos.service';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

@Controller('repo')
export class RepoController {
    constructor(private readonly repoService: RepoService) {}

    @Get(':user')
     getUserRepos(@Param() params){
        return this.repoService.getUserRepos(params.user)
    }
}
