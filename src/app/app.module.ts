import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http'
import { RouterModule, Routes } from '@angular/router';;

import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    /*
   empty path:  localhost:4200
   will load "home"
    */

    path:'', 
    component:HomeComponent
  },

  {
    //   localhost:4200/users
    path:'users', 
    component:UsersComponent
  },

  {
    //   localhost:4200/servers
    path:'servers', 
    component:ServersComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,

    //adding the routing function 
    RouterModule.forRoot(appRoutes)
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
