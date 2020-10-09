import { Component,OnInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cat_list;
  provide_list;
  constructor(private dataservice:DataserviceService){}
  ngOnInit(){
    this.dataservice.getlist().subscribe(data=>
      {
        this.cat_list=data;
        console.log(this.cat_list);
      })
  }
  todayDate=new Date();
  result;
  getFormattedDate() {
     this.result = moment(this.todayDate).format('dddd MM yyyy');
     console.log(this.todayDate);
  }
  localstorage 
}
