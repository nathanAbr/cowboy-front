import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Herd} from './herd';

@Injectable()
export class HerdService {

  constructor(private http: HttpClient) { }

  public getHerds(): Observable<any> {
    return this.http.get(environment.backend_url + '/herds');
  }
  public delete(herd: Herd) {
    this.http.delete(environment.backend_url + '/herd/' + herd.name);
  }
  public create(herd: Herd) {
    return this.http.post(environment.backend_url + '/herd', herd);
  }
  public addCow(herd: Herd) {
    return this.http.put(environment.backend_url + '/herd', herd);
  }
}
