import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicioMain: ServiceService) { }

  ngOnInit(): void {
  }

   login() {
    this.servicioMain.irA("/main");
  }

}
