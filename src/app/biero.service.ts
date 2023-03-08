import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListeBiere } from './iliste-biere';
import { IBiere } from './ibiere';

@Injectable({
  providedIn: 'root'
})
export class BieroService {
  private url_biero:string = "http://127.0.0.1:8000/webservice/php/biere/";

  constructor(private http:HttpClient) { }

  getBieres():Observable<IListeBiere>{
    return this.http.get<IListeBiere>(this.url_biero);
  }

  getUneBiere(id:number):Observable<IBiere>{
    return this.http.get<IBiere>(this.url_biero+id);
  }

  ajouterBiere(data:IBiere):Observable<any>{

    let httpOptions = {headers : new HttpHeaders({
      "Content-type" : "application/json",
      "Authorization" : "Basic " + btoa("biero:biero")
    })};

    return this.http.put<IBiere>(this.url_biero, data, httpOptions);
  }

  effacerBiere(id_biere:number){

    let httpOptions = {headers : new HttpHeaders({
      "Content-type" : "application/json",
      "Authorization" : "Basic " + btoa("biero:biero")
    })};

    return this.http.delete<IBiere>(this.url_biero + id_biere, httpOptions);
  }

  modifierBiere(id_biere:number, data:IBiere):Observable<any>{

    let httpOptions = {headers : new HttpHeaders({
      "Content-type" : "application/json",
      "Authorization" : "Basic " + btoa("biero:biero")
    })};

    return this.http.post<IBiere>(this.url_biero + id_biere, data, httpOptions);

  }

}
