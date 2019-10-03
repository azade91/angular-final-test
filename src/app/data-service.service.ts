import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  getCities(name:string)
  {
    return this.http.get('https://www.metaweather.com/api/location/search/?query=' + name)
  }

  getCityWeather(id:string)
  {
    return this.http.get('https://www.metaweather.com/api/location/' + id)
  }
}
