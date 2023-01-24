import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private URL_API: string = 'http://192.168.100.94/api_repicar/';

  constructor(private router: Router,
              private http: HttpClient) { }

  irA (url:string)
  {
    this.router.navigateByUrl(url);
  }
}
