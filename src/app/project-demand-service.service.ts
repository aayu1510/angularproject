import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProjectDemandServiceService {

  constructor(private http:Http) { }

  datavalues: any=[];
  demandstatusvalue:any=[];
  demandStatus: string[] = [
    "Active",
    "Abandoned",
    "Hold"];
skillType: string[] = [
  "Niche",
  "Commodity"];
  Groupnames: any=[];

  getdemands() {
    return this.datavalues = this.http.get('http://localhost:4200/employee/demands')
    .map((res: Response) => res.json());
 }




 getGroupNames() {
  return this.Groupnames = this.http.get('http://localhost:4200/employee/groupnames')
  .map((res: Response) => res.json());
}

 insertDemand(model: any[]){
  // console.log("Model Values-----insert service ") 
          
  return this.http.post("http://localhost:4200/employee/demand",{
		demandId : model[0].demandId,
        groupName : model[0].groupName,
        jdRole : model[0].jdRole,
        contractRoles : model[0].contractRoles,
        skillType : model[0].skillType,
        roleTechnologyMapping :model[0].roleTechnologyMapping,
        technologyGroup :model[0].technologyGroup,
        relevantExperience :model[0].relevantExperience,
        psoOwner : model[0].psoOwner,
        raisedOn : model[0].raisedOn,
        needBy : model[0].needBy,
        status : model[0].status})
       .map((response:Response) => response.json());       
        
   }

   updateDemand(model:any[])
  {
  //console.log("Model Values----->" + model[0].txtName)
   return this.http.put("http://localhost:4200/employee/demand", {
    demandId : model[0].demandId,
    groupName : model[0].groupName,
    jdRole : model[0].jdRole,
    contractRoles : model[0].contractRoles,
    skillType : model[0].skillType,
    roleTechnologyMapping :model[0].roleTechnologyMapping,
    technologyGroup :model[0].technologyGroup,
    relevantExperience :model[0].relevantExperience,
    psoOwner : model[0].psoOwner,
    raisedOn : model[0].raisedOn,
    needBy : model[0].needBy,
    status : model[0].status})
      .map((response:Response) => response.json()); 
  }

  deleteDemand(selectedDemand:any)
 {
 console.log("demandid----->"+selectedDemand);
     return this.http.delete("http://localhost:4200/employee/demand/"+selectedDemand).subscribe(
        data => {
            console.log("PATCH Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    ); 

}

  getDemandStatus(): string[] {
    return this.demandStatus;
  }
  
  
  
  getSkillType(): string[] {
    return this.skillType;
  }

 

}
