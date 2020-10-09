import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  _url='http://52.172.157.13:8443/careSupervisor/management/careSupervisor/list/get?pageNo=0&pageSize=100&sortDirec=asc&sortfield=careSupervisorName';

  constructor(public http: HttpClient) { }
  getlist(){
    return this.http.get(this._url)
  }
}
