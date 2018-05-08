import { CandidateserviceService } from '../candidateservice.service';
import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
 
 data: any;
  contarctRole:any;
candidateDetails:any;
  
  formuser = {
  txtVACOffboardingDate: " ",
  txtOnboardingStatus: " ",
  txtVACOnboardingDate:" ",
  txtName: " ",
  txtContractRole: " ",
  txtNCSID: " ",
  txtNCSEmailid: " ",
  txtEmployeeNo:" "
  
  
  }
  constructor(private http:Http,
  private candidateService: CandidateserviceService ) { }

 //candidateDetails=JSON.stringify(this.formuser);



  ngOnInit() {
    
      this.candidateService.getContractRole().subscribe(data => {
        this.contarctRole = data[0].contractRole;
            console.log('Data From api '  + data);
        console.log('Data From api '  + this.contarctRole[0].contractRole);
      });
    
  }
  
  
  
  
  
  
  
  

  saveCandidateDetails(form1){
  
  this.candidateDetails = [{
  "txtVACOffboardingDate":form1.txtVACOffboardingDate,
  "txtOnboardingStatus": form1.txtOnboardingStatus,
  "txtVACOnboardingDate":form1. txtVACOnboardingDate,
  "txtName": form1.txtName,
  "txtContractRole":form1.  txtContractRole,
  "txtNCSID": form1.txtNCSID,
  "txtNCSEmailid":form1. txtNCSEmailid,
  "txtEmployeeNo":form1.txtempno
    }];
   // console.log(form1.txtVACOffboardingDate);
    //console.log("in inside service");
    this.candidateService.insertCandidate
      (this.candidateDetails).subscribe(data => {
                this.data = data;
          this.candidateService.getemployees();
          console.log("Local Variable Value ---> " + this.data + "--------" + data);
  });
    
  }
  
  






}
