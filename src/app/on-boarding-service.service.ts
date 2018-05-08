
import { Injectable } from '@angular/core';

export class Employee {
  VAC_Offboarding_Date: string;
   
  Onboarding_Status: string;
 
  Infosy_Emp_Id: string;
  Candidate_ID:string;
  Name: string;
  Project_Code:string;
  NCS_ID: string;
  NCS_Email:string;
}













let employees: Employee[] =  [
  {
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781799",
    "Candidate_ID": "",
    "Name": "Sinchan Doshi",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncsamol",
    "NCS_Email": "amol@ncs.com.sg",
   
  },{
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781599",
    "Candidate_ID": "",
    "Name": "Dinesh",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncsdinesh",
    "NCS_Email": "dinesh@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781499",
    "Candidate_ID": "",
    "Name": "sumedha",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssumedha",
    "NCS_Email": "sumedha@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "29-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781269",
    "Candidate_ID": "",
    "Name": "Pooja Sharma",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssinpoojas",
    "NCS_Email": "pooja@ncs.com.sg",
   
  }
  ,{
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781599",
    "Candidate_ID": "",
    "Name": "Dinesh",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncsdinesh",
    "NCS_Email": "dinesh@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781499",
    "Candidate_ID": "",
    "Name": "sumedha",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssumedha",
    "NCS_Email": "sumedha@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "29-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781269",
    "Candidate_ID": "",
    "Name": "Pooja Sharma",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssinpoojas",
    "NCS_Email": "pooja@ncs.com.sg",
   
  },,{
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781599",
    "Candidate_ID": "",
    "Name": "Dinesh",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncsdinesh",
    "NCS_Email": "dinesh@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781499",
    "Candidate_ID": "",
    "Name": "sumedha",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssumedha",
    "NCS_Email": "sumedha@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "29-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781269",
    "Candidate_ID": "",
    "Name": "Pooja Sharma",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssinpoojas",
    "NCS_Email": "pooja@ncs.com.sg",
   
  },{
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781599",
    "Candidate_ID": "",
    "Name": "Dinesh",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncsdinesh",
    "NCS_Email": "dinesh@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781499",
    "Candidate_ID": "",
    "Name": "sumedha",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssumedha",
    "NCS_Email": "sumedha@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "29-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781269",
    "Candidate_ID": "",
    "Name": "Pooja Sharma",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssinpoojas",
    "NCS_Email": "pooja@ncs.com.sg",
   
  },{
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781599",
    "Candidate_ID": "",
    "Name": "Dinesh",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncsdinesh",
    "NCS_Email": "dinesh@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "31-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781499",
    "Candidate_ID": "",
    "Name": "sumedha",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssumedha",
    "NCS_Email": "sumedha@ncs.com.sg",
   
  },
  {
 
    "VAC_Offboarding_Date": "29-Dec-18",
   
    "Onboarding_Status": "Onboarded",
   
    "Infosy_Emp_Id": "781269",
    "Candidate_ID": "",
    "Name": "Pooja Sharma",
  
    "Project_Code": "NCO101PD",
    "NCS_ID": "ncssinpoojas",
    "NCS_Email": "pooja@ncs.com.sg",
   
  }
  ];

@Injectable()
export class Service {
    getEmployees() {
        return employees;
    }
}