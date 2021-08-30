import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearch : EventEmitter<string> = new EventEmitter(); 

  user : string = '';; 
  constructor() { }

  ngOnInit(): void {
  }

  getRepos(){
    if(!this.user){
      alert('Please add a user')
    }
    else {
      this.onSearch.emit(this.user)
    }
  }

}
