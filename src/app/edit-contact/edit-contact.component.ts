import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  groups:MyGroup[]=[]//To hold all the groups
  contact:MyContact={}//To hold contact details
  contactid:string=''//To hold the id of the contact
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data); //contactid:"1"
      console.log(data.contactid); //1  
      this.contactid=data.contactid;
      //call api for getting particular contact details
      this.api.viewContactDetails(this.contactid).subscribe((result:any)=>{
        console.log(result);//contact details as object
        this.contact=result 
        //call api for getting group information
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);
          this.groups=data  
        })
      })
    })
  }
  updateContact(){
    this.api.updateContact(this.contactid,this.contact).subscribe((result:any)=>{
      console.log(result);
      this.route.navigateByUrl('/')
      
    })
  }
}
