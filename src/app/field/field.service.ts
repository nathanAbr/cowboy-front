import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Field} from './field';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FieldService {

  constructor(private http: HttpClient) { }
  public getFields(): Observable<any> {
    return this.http.get(environment.backend_url + '/fields');
  }
  public delete(field: Field) {
    this.http.delete(environment.backend_url + '/field/' + field.name);
  }
  public create(field: Field): Observable<any> {
    return this.http.post(environment.backend_url + '/field', field);
  }
  public add(field: Field): Observable<any> {
    return this.http.put(environment.backend_url + '/field', field);
  }
}
