import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DemandmappingServiceService {

  constructor(private http:Http) { }
datavalues : any = [];
Groupnames : any =[];

 getAllDemandsMapping() {
    return this.datavalues = this.http.get('http://localhost:4200/employee/demandMapping')
    .map((res: Response) => res.json());
 }




getGroupNames() {
  return this.Groupnames = this.http.get('http://localhost:4200/employee/groupnames')
  .map((res: Response) => res.json());
}






insertMappingDetails(model: any[]){
 console.log("Model Values-----insert service "+model) 
         
         try{
        
  return this.http.post("http://localhost:4200/employee/demandMapping", {
      
      
 demandId:model[0].demandId,
 groupName:model[0].groupName,
 contractRole:model[0].contractRole,
 infosysEmpNo:model[0].infosysEmpNo,
	name:model[0].name,
	customeRoleMapping:model[0].customeRoleMapping,
 profileSharedDate:model[0].profileSharedDate,
 interviewDate:model[0].interviewDate,
clientInformationDate:model[0].clientInformationDate,
 psoStatus:model[0].psoStatus,
 onboardingStatus:model[0].onboardingStatus,
 comments:model[0].comments
      
       })
         
      .map((response:Response) => response.json())
   
       
       
  }




catch(e)
{alert(e);}


}






updatemappingDetails(model:any[])
  {
  
  
   return this.http.put("http://localhost:4200/employee/demandMapping", {
  demandId:model[0].demandId,
 groupName:model[0].groupName,
 contractRole:model[0].contractRole,
 infosysEmpNo:model[0].infosysEmpNo,
	name:model[0].name,
	customeRoleMapping:model[0].customeRoleMapping,
 profileSharedDate:model[0].profileSharedDate,
 interviewDate:model[0].interviewDate,
clientInformationDate:model[0].clientInformationDate,
 psoStatus:model[0].psoStatus,
 onboardingStatus:model[0].onboardingStatus,
 comments:model[0].comments
        })
      .map((response:Response) => response.json())
   
  }
  





}
