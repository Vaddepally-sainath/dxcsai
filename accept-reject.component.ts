import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-accept-reject',
  templateUrl: './accept-reject.component.html',
  styleUrls: ['./accept-reject.component.css']
})
export class AcceptRejectOrderComponent implements OnInit {

  oid : number;
  vid : number;
  status : string;
  result : any;
  acceptReject() {
    this._customerService.acceptRejectOrder(this.oid,this.vid,this.status).subscribe(x => {
      this.result=x;
    })
  }
  constructor(private _customerService : CustomerService) { }

  ngOnInit(): void {
  }

}