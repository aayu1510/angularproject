import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { ProjectDemandComponent } from './project-demand/project-demand.component';
import { HomepageDashboardComponent } from './homepage-dashboard/homepage-dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
 import {Service} from './on-boarding-service.service';
import { Http,Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateserviceService } from './candidateservice.service';
// import { TalentComponent } from './talent/talent.component'; 
// import { TalentService } from './talent.service';
// import { TalentFilterPipe } from './shared/talent-filter.pipe';
import { DxDataGridModule, DxTextBoxModule, DxFileUploaderModule, DxButtonModule } from 'devextreme-angular'
import { ProjectDemandServiceService } from './project-demand-service.service';
import { DemandmappingComponent } from './demandmapping/demandmapping.component';
import { DemandmappingServiceService } from './demandmapping-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    ProjectDemandComponent,
    HomepageDashboardComponent,
    CandidateDetailsComponent,
    DemandmappingComponent,
     //TalentFilterPipe

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpModule,
    Ng2OrderModule,
    HttpClientModule,DxDataGridModule, DxTextBoxModule, DxFileUploaderModule, DxButtonModule ,
    RouterModule.forRoot([
    { path: '',   redirectTo: '/homepageDashboard', pathMatch: 'full' },
      {
        path:'homepageDashboard',
        component: HomepageDashboardComponent
        
      },
      {
      path:'projectDemand',
      component: ProjectDemandComponent
    }, 
    {
      path:'demandmapping',
      component: DemandmappingComponent
    }
    
    
    
    ])
  ],
  providers: [CandidateserviceService,ProjectDemandServiceService,DemandmappingServiceService], //OnBoardingServiceService,TalentService
  bootstrap: [AppComponent]
})
export class AppModule { }
