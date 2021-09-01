import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";

import { RepoComponent } from "./repos/components/repo/repo.component";
import { HomeComponent } from "./repos/components/home/home.component";

const routes : Routes = [
    {
        path : '',
        component : HomeComponent, 
    },
    {
        path : ':id',
        component : RepoComponent
    }
]


@NgModule({
    imports : [
    RouterModule.forRoot(routes)    
    ],
    exports : [
        RouterModule
    ]
})






export class AppRoutingModule {}