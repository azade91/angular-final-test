import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

@Input() count:number;
@Input() show:true;
today: number = Date.now();
// @Input() showMe:() =>
// {
  
// }
  

sidenavWidth = 2;
ngStyle: string;
constructor() {}
ngOnInit() {}
increase() {
  this.sidenavWidth = 15;
}
decrease() {
  this.sidenavWidth = 2;
}

}
