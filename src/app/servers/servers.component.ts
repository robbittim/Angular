import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor(
    private router:Router,
    
    /*
    inject the currently active routes
    this will be the route which loaded this component 
    */
    private activeRoute:ActivatedRoute
  ) { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onReload(){
    
    /*
    relative path with relative activeRoute 
    (current route: localhost:4200/servers)

    navigate to: localhost:4200/servers/{relativePath}
 
    */
    this.router.navigate(['servers'],{relativeTo:this.activeRoute});
  }

}
