import { AddClient, IAddClient } from './add-client/add-client.model';
import { AddEmployee, IAddEmployee } from './add-employee/add-employee.model';
import { AddAsset, IAddAsset } from './add-asset/add-asset.model';
import { AssignAsset, IAssignAsset } from './assign-asset/assign-asset.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from 'app/shared/util/request-util';

@Injectable({
  providedIn: 'root'
})
export class AssetInventoryService {
  public resourceUrl = process.env.SERVER_API_URL;
  constructor(private http: HttpClient) {}

  createAssignAsset(assign: AssignAsset): Observable<HttpResponse<AssignAsset>> {
    return this.http.post<AssignAsset>(this.resourceUrl + '/asset/save', assign, { observe: 'response' });
  }

  update(assign: AssignAsset): Observable<HttpResponse<AssignAsset>> {
    return this.http.put<AssignAsset>(this.resourceUrl + '/asset/update', assign, { observe: 'response' });
  }

  findAllAssignAsset(): Observable<HttpResponse<IAssignAsset[]>> {
    return this.http.get<IAssignAsset[]>(this.resourceUrl + '/asset/all', { observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${'/asset/delete'}/${id}`, { observe: 'response' });
  }

  createAddAsset(asset: AddAsset): Observable<HttpResponse<AddAsset>> {
    return this.http.post<AddAsset>(this.resourceUrl + '/addAssest/save', asset, { observe: 'response' });
  }

  findAllAddAsset(): Observable<HttpResponse<IAddAsset[]>> {
    return this.http.get<IAddAsset[]>(this.resourceUrl + '/addAssest/getAll', { observe: 'response' });
  }

  createEmployee(employee: AddEmployee): Observable<HttpResponse<AddEmployee>> {
    return this.http.post<AddEmployee>(this.resourceUrl + '/save', employee, { observe: 'response' });
  }

  findAllEmployee(): Observable<HttpResponse<IAddEmployee[]>> {
    return this.http.get<IAddEmployee[]>(this.resourceUrl + '/getEmp', { observe: 'response' });
  }

  createClient(client: AddClient): Observable<HttpResponse<AddClient>> {
    return this.http.post<AddClient>(this.resourceUrl + '/saveClient', client, { observe: 'response' });
  }

  findAllClient(): Observable<HttpResponse<IAddClient[]>> {
    return this.http.get<IAddClient[]>(this.resourceUrl + '/getAll', { observe: 'response' });
  }
}
