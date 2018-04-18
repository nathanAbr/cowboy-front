import { Injectable } from '@angular/core';
import {Cow} from './cow';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class CowService {

  constructor(private http: HttpClient) { }

  public getCows(): Observable<any> {
    return this.http.get(environment.backend_url + '/cows');
  }
  public delete(cow: Cow) {
    this.http.delete(environment.backend_url + '/cow/' + cow.number);
  }
  public create(cow: Cow): Observable<any> {
    return this.http.post(environment.backend_url + '/cow', cow);
  }
}
