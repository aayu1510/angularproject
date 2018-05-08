import { Candidatepojo } from './candidate-details/candidatepojo';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



export class Employee {
  VAC_Offboarding_Date: string;
  Onboarding_Status: string;
  Infosy_Emp_Id: string;
  Candidate_ID: string;
  Name: string;
  Project_Code: string;
  NCS_ID: string;
  NCS_Email: string;

}






@Injectable()
export class CandidateserviceService {
     datavalues: any=[];
     contractrole: any=[];
    infosysid:any;
  //insertCandidate:any=[];
    constructor(public http: Http) { 

  }

getemployees() {
    return this.datavalues = this.http.get('http://localhost:4200/employee/model/newCandidates')
    .map((res: Response) => res.json());
  }
  
  
  
  
  
  getContractRole() {
    return this.contractrole = this.http.get('http://localhost:4200/employee/contractroles')
    .map((res: Response) => res.json());
  }
  
  getcountInformation()
   {
   return this.contractrole = this.http.get('http://localhost:4200/employee/countInformation')
    .map((res: Response) => res.json());
  } 
  
  
  putCandidate(model:any[])
  {
  //console.log("Model Values----->" + model[0].txtName)
   return this.http.put("http://localhost:4200/employee/updateCandidate", {
        txtEmployeeNo :model[0].txtEmployeeNo,
        txtName : model[0].txtName,
         txtNCSID : model[0].txtNCSID,
         txtNCSEmailid : model[0].txtNCSEmailid,
         txtContractRole : model[0].txtContractRole,
         txtOnboardingStatus :model[0].txtOnboardingStatus,
         txtVACOnboardingDate :model[0].txtVACOnboardingDate,
         txtVACOffboardingDate :model[0].txtVACOffboardingDate
        })
      .map((response:Response) => response.json())
    .catch(this._errorHandler); 
  }
  
    insertCandidate(model: any[]){
 // console.log("Model Values-----insert service ") 
         
       return this.http.post("http://localhost:4200/employee/candidate", {
        txtEmployeeNo : model[0].txtEmployeeNo,
         txtName : model[0].txtName,
         txtNCSID : model[0].txtNCSID,
         txtNCSEmailid : model[0].txtNCSEmailid,
         txtContractRole : model[0].txtContractRole,
         txtOnboardingStatus :model[0].txtOnboardingStatus,
           txtVACOnboardingDate :model[0].txtVACOnboardingDate,
             txtVACOffboardingDate :model[0].txtVACOffboardingDate })
         
      .map((response:Response) => response.json())
    .catch(this._errorHandler); 
       
       
  }
  
   private _errorHandler(err: Response) {
        console.log(err);
        return Observable.throw(err || "Some error occurred");
   }
  
  
  deleteCandidate(selectedRecord:number)
 {
 console.log("infosysempid----->"+selectedRecord);
     return this.http.delete("http://localhost:4200/employee/deleteCandidate/"+selectedRecord).subscribe(
        data => {
            console.log("PATCH Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );  
  
  
  
  

}
}
