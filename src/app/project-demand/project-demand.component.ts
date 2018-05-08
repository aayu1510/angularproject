
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { DxDataGridModule } from 'devextreme-angular';
import { Http, Jsonp } from '@angular/http';
import { DxDataGridComponent } from "devextreme-angular";
import { ProjectDemandServiceService } from '../project-demand-service.service';

@Component({
  selector: 'app-project-demand',
  templateUrl: './project-demand.component.html',
  styleUrls: ['./project-demand.component.css']
})
export class ProjectDemandComponent implements OnInit {

  constructor(private http:Http, private  demandservice:ProjectDemandServiceService) { }
  demands:any=[];
  demandstatus:any=[];
  skillType:any=[];
  demandDetails:any=[];
  data:any=[];
  groupNames:any=[];

  ngOnInit() {
    this.demandservice.getdemands().subscribe(data => {
      this.demands = data;
          //console.log('Data From api '  + data);
      //console.log('Data From api '  + this.demands);

      this.demandservice.getGroupNames().subscribe(data => {
        this.groupNames = data[0].groupName;
      });
    });

    this.demandstatus=this.demandservice.getDemandStatus();
    this.skillType=this.demandservice.getSkillType();
  }

  saveDemandDetails(form1:any){
    try{
  console.log("in insert");
  this.demandDetails = [{
  "demandId": form1.data.demandId,
  "groupName": form1.data.groupName,
  "jdRole": form1.data.jdRole,
  "contractRoles": form1.data.contractRoles ,
  "skillType":form1.data.skillType,
  "roleTechnologyMapping": form1.data.roleTechnologyMapping ,
  "technologyGroup": form1.data.technologyGroup,
  "relevantExperience": form1.data.relevantExperience,
  "psoOwner": form1.data.psoOwner,
  "raisedOn": form1.data.raisedOn,
  "needBy": form1.data.needBy,
  "status": form1.data.status
    }];
    this.demandservice.insertDemand
      (this.demandDetails).subscribe(data => {
        
     
          alert("Successfully Registered"); 
          this.data = form1;
        
         
  });
  }catch(e){alert(e);}

}







updateDemandDetails(form2 :any){
  this.demandDetails = [{
    "demandId": form2.key.demandId,
    "groupName": form2.key.groupName,
    "jdRole": form2.key.jdRole,
    "contractRoles": form2.key.contractRoles ,
    "skillType":form2.key.skillType,
    "roleTechnologyMapping": form2.key.roleTechnologyMapping ,
    "technologyGroup": form2.key.technologyGroup,
    "relevantExperience": form2.key.relevantExperience,
    "psoOwner": form2.key.psoOwner,
    "raisedOn": form2.key.raisedOn,
    "needBy": form2.key.needBy,
    "status": form2.key.status
   }];
 

  this.demandservice.updateDemand
     (this.demandDetails).subscribe(data => {
               this.data = form2;
        
 });
    
 }

 deleteDemandInfo(form2 :any)
 {
   this.demandservice.deleteDemand(form2.key.demandId);
 }
}
