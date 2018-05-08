import { Component, OnInit, Directive } from '@angular/core'; 
import { CandidateserviceService } from '../candidateservice.service';
import { DxDataGridModule } from 'devextreme-angular';
import { Http, Jsonp } from '@angular/http';
import { DxDataGridComponent } from "devextreme-angular";
import {NgForm} from '@angular/forms';
import { DemandmappingServiceService } from '../demandmapping-service.service';

declare var $:any;
@Component({
  selector: 'app-demandmapping',
  templateUrl: './demandmapping.component.html',
  styleUrls: ['./demandmapping.component.css']
})
export class DemandmappingComponent implements OnInit {

  constructor(private http:Http,private demandmappingservice:DemandmappingServiceService,public candiadteservice: CandidateserviceService) { }

rowValue : any;
demandId : any;
 groupName :any;
 contractRole:any;
infosysEmpNo :any;
name :any;
customeRoleMapping:any;
 profileSharedDate:any;
interviewDate :any;
clientInformationDate :any;
psoStatus :any;
onboardingStatus :any;
comments:any;
  
  
  
  
demandMapping : any =[];
groupNames : any =[];
contarctRoles : any =[];
mappingdetails : any =[];
data :any =[];
  
ngOnInit(): void{







 this.candiadteservice.getContractRole().subscribe(data => {
        this.contarctRoles = data[0].contractRole;
       //     console.log('Data From api '  + data);
       // console.log('Data From api '  + this.contarctRole[0].contractRole);
      });




 this.demandmappingservice.getAllDemandsMapping().subscribe(data => {
      this.demandMapping = data;
    
      

    });

 this.demandmappingservice.getGroupNames().subscribe(data => {
        this.groupNames = data[0].groupName;
      });


  }




 saveMappingDetails(form1:any){
    try{
 // alert(form1.demandId+""+form1.groupName+""+form1.contractRole+""+form1.customeRoleMapping);
 //debugger;
   this.mappingdetails = [{
  
     
	 "demandId": form1.demandId,
	 "groupName": form1.groupName,
 	"contractRole": form1.contractRole,
 	"infosysEmpNo": form1.infosysEmpNo,
	"name":  form1.name,
	"customeRoleMapping":form1.customeRoleMapping,
	" profileSharedDate": form1.profileSharedDate,
	 "interviewDate":  form1.interviewDate,
	"clientInformationDate": form1.clientInformationDate,
 	"psoStatus": form1.psoStatus,
 	"onboardingStatus": form1.onboardingStatus,
 	"comments": form1.comments
 	
 	}];

  // alert("mapping data"+this.mappingdetails.length);
   this.demandmappingservice.insertMappingDetails
      (this.mappingdetails).subscribe(data => {
        
         alert("Successfully Registered"); 
    
         this.data = form1;
       $('#mappingModel').modal('hide')  ;
       form1.resetForm();
         this.demandmappingservice.getAllDemandsMapping().subscribe(data => {
      this.demandMapping = data;
    

    });
       
  });
    
    
    
    
    
    }
    
    catch(e)
    {alert(e);}
    
  }
  
  
  
 getDemandStatus(x:any) {


  this.demandId =x.demandId;
   
  this.groupName =x.groupName,
  this.contractRole =x.contractRole,
  this.infosysEmpNo = x.infosysEmpNo,
  this.name = x.name,
  this.customeRoleMapping= x.customeRoleMapping,
  this.profileSharedDate = x.profileSharedDate,
  this.interviewDate = x.interviewDate,
  this.clientInformationDate = x.clientInformationDate,
  this.psoStatus = x.psoStatus,
  this.onboardingStatus = x.onboardingStatus,
  this.comments=x.comments
   
   alert(this.rowValue.demandId);
  }
  
  
  
  
  updateDemandmappingDetails(form1:any){
    //alert(this.profileSharedDate);
   this.mappingdetails = [{
  
//  "demandId": form1.key.demandId,
//	 "groupName": form1.key.groupName,
// 	"contractRole": form1.key.contractRole,
// 	"infosysEmpNo": form1.key.infosysEmpNo,
//	"name":  form1.key.name,
//	"customeRoleMapping":form1.key.customeRoleMapping,
//	"  profileSharedDate": form1.key.profileSharedDate,
//	 "interviewDate":  form1.key.interviewDate,
//	"clientInformationDate": form1.key.clientInformationDate,
// 	"psoStatus": form1.key.psoStatus,
// 	"onboardingStatus": form1.key.onboardingStatus,
// 	"comments": form1.key.comments
    
    
    
   "demandId": this.demandId,
   "groupName": this.groupName,
  "contractRole": this.contractRole,
  "infosysEmpNo": this.infosysEmpNo,
  "name":  this.name,
  "customeRoleMapping":this.customeRoleMapping,
  "profileSharedDate": this.profileSharedDate,
   "interviewDate":  this.interviewDate,
  "clientInformationDate": this.clientInformationDate,
  "psoStatus": this.psoStatus,
  "onboardingStatus": this.onboardingStatus,
  "comments": this.comments
//    
    
    
    
    }];
  

   this.demandmappingservice.updatemappingDetails
      (this.mappingdetails).subscribe(data => {
                this.data = name;
      $('#editmappingModel').modal('hide')  ;
       form1.resetForm();
       
       this.demandmappingservice.getAllDemandsMapping().subscribe(data => {
      this.demandMapping = data;
    

    });
       
       
       
       
       
       
      //    console.log("Local Variable Value ---> " + this.data);
  });
     
  }
  
  









}
