class CandidateDetails { 
  
  txtVACOffboardingDate: string
  txtOnboardingStatus: string
  txtVACOnboardingDate: string
  txtName: string
  txtContractRole: string
  txtNCSID: string
  txtNCSEmailid: string
  txtEmployeeNo: string
  
  constructor(txtVACOffboardingDate: string,
  txtOnboardingStatus: string,
  txtVACOnboardingDate: string,
  txtName: string,
  txtContractRole: string,
  txtNCSID: string,
  txtNCSEmailid: string,
  txtEmployeeNo: string){
    this.txtOnboardingStatus = txtOnboardingStatus;
    this.txtVACOffboardingDate = txtVACOffboardingDate;
    this.txtName = txtName;
    this.txtContractRole = txtContractRole;
    this.txtNCSID = txtNCSID;
    this.txtNCSEmailid = txtNCSEmailid;
    this.txtEmployeeNo = txtEmployeeNo;
    
  }
}