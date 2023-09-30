import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactId:string='' //To hold the id of the contact
  contact:any=[]//To hold contact  information
  groupId:string=''//To hold the group id of the contact
  groupName:string=''//To hold the group name of the contact

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
    ngOnInit(): void {
      //get id from the url
      this.activatedRoute.params.subscribe((data:any)=>{
        console.log(data);// id:"1" - object
        console.log(data.id);//1 
        this.contactId=data.id; 
        //get details of particular contact
        this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
          console.log(result);//contact details - object
          this.contact=result
          this.groupId=result.GroupId
          console.log(this.groupId);

          this.api.getGroupName(this.groupId).subscribe((data:any)=>{
            console.log(data);//{id: '1', name: 'Company'}
            this.groupName=data.name
            console.log(this.groupName);//Company
            
          })
        })
      })
  }
}
