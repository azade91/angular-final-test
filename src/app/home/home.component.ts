import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalItems:number=0;
  showMenu:boolean=true;
  cityName:string=""
  cities:object
  mycity:object

  @Output() navToggle = new EventEmitter<boolean>();
  toggleMenu() {
    this.navToggle.emit(true);
  }
  search()
  {
    if(this.cityName.length>2){
this.data.getCities(this.cityName).subscribe(data=>{
  this.cities=data;
  this.totalItems=Object.keys(this.cities).length;
  console.log(data)
});
    }
  }
  showWeather(id){
this.data.getCityWeather(id).subscribe(data=>{
  this.mycity=data;
  console.log(data)
});
  }

  constructor(private data: DataServiceService) 
  {

  }

  ngOnInit() {
  }
  // toggleMenu(){
  //   this.showMenu=!this.showMenu;
  // }

}
