import { Client, IClient } from './add-client/add-client.model';
import { AddEmployee, IAddEmployee } from './add-employee/add-employee.model';
import { AddAsset, IAddAsset } from './add-asset/add-asset.model';
import { AssignAsset, IAssignAsset } from './assign-asset/assign-asset.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from 'app/shared/util/request-util';
import { IAssetList } from './asset-type.model';
import { IManufacturer } from './manufacturer.model';
import { IViewAllAsset } from './view-asset.model';

@Injectable({
  providedIn: 'root'
})
export class AssetInventoryService {
  public resourceUrl = process.env.SERVER_API_URL;
  constructor(private http: HttpClient) {}

  createAssignAsset(assign: AssignAsset): Observable<HttpResponse<AssignAsset>> {
    return this.http.post<AssignAsset>(this.resourceUrl + '/assignAsset/save', assign, { observe: 'response' });
  }

  updateAssignAsset(assign: IAssignAsset): Observable<HttpResponse<IAssignAsset>> {
    return this.http.put<IAssignAsset>(this.resourceUrl + '/assignAsset/update', assign, { observe: 'response' });
  }

  findAllAssignAsset(): Observable<HttpResponse<IAssignAsset[]>> {
    return this.http.get<IAssignAsset[]>(this.resourceUrl + '/assignAsset/getAll', { observe: 'response' });
  }

  findByAssignStatus(status: String): Observable<HttpResponse<IAssignAsset[]>> {
    return this.http.get<IAssignAsset[]>(this.resourceUrl + `${'/assignAsset/getallbystatus'}/${status}`, { observe: 'response' });
  }

  deleteAssignAsset(id: any): Observable<HttpResponse<IAssignAsset>> {
    return this.http.delete(this.resourceUrl + `${'/assignAsset/delete'}/${id}`, { observe: 'response' });
  }

  createAddAsset(asset: AddAsset): Observable<HttpResponse<AddAsset>> {
    return this.http.post<AddAsset>(this.resourceUrl + '/addAsset/save', asset, { observe: 'response' });
  }

  findAllAddAsset(): Observable<HttpResponse<IAddAsset[]>> {
    return this.http.get<IAddAsset[]>(this.resourceUrl + '/addAsset/getAll', { observe: 'response' });
  }

  createEmployee(employee: AddEmployee): Observable<HttpResponse<AddEmployee>> {
    return this.http.post<AddEmployee>(this.resourceUrl + '/employee/save', employee, { observe: 'response' });
  }

  findAllEmployee(): Observable<HttpResponse<IAddEmployee[]>> {
    return this.http.get<IAddEmployee[]>(this.resourceUrl + '/employee/getAll', { observe: 'response' });
  }

  createClient(client: IClient): Observable<HttpResponse<IClient>> {
    return this.http.post<IClient>(this.resourceUrl + '/client/save', client, { observe: 'response' });
  }

  findAllClient(): Observable<HttpResponse<IClient[]>> {
    return this.http.get<IClient[]>(this.resourceUrl + 'client/getAll', { observe: 'response' });
  }

  updateClient(client: IClient): Observable<HttpResponse<IClient>> {
    return this.http.put<IClient>(this.resourceUrl + '/client/update', client, { observe: 'response' });
  }

  deleteClient(id: any): Observable<HttpResponse<IClient>> {
    return this.http.delete(this.resourceUrl + `/client/${id}`, { observe: 'response' });
  }

  findClientById(id: any): Observable<HttpResponse<IClient>> {
    return this.http.get(this.resourceUrl + `/client/${id}`, { observe: 'response' });
  }

  findAllAssetType(): Observable<HttpResponse<IAssetList[]>> {
    return this.http.get<IAssetList[]>(this.resourceUrl + '/assetList/getAll', { observe: 'response' });
  }

  findAllManufacturerList(): Observable<HttpResponse<IManufacturer[]>> {
    return this.http.get<IManufacturer[]>(this.resourceUrl + '/getAllManufacturers', { observe: 'response' });
  }

  findAllViewAsset(): Observable<HttpResponse<IViewAllAsset[]>> {
    return this.http.get<IViewAllAsset[]>(this.resourceUrl + '/viewAllAsset/getAllTwoTables', { observe: 'response' });
  }
}
