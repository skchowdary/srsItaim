import { AddAsset } from './add-asset/add-asset.model';
import { AssignAsset, IAssignAsset } from './assign-asset/assign-asset.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from 'app/shared/util/request-util';

@Injectable({
  providedIn: 'root'
})
export class AssetInventoryService {
  constructor(private http: HttpClient) {}

  createAssignAsset(user: AssignAsset): Observable<HttpResponse<AssignAsset>> {
    return this.http.post<AssignAsset>('/asset/save', user, { observe: 'response' });
  }

  update(user: AssignAsset): Observable<HttpResponse<AssignAsset>> {
    return this.http.put<AssignAsset>('/asset/update', user, { observe: 'response' });
  }

  findAllAssignAsset(): Observable<HttpResponse<AssignAsset[]>> {
    return this.http.get<AssignAsset[]>('/asset/all', { observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${'/asset/delete'}/${id}`, { observe: 'response' });
  }

  createAddAsset(user: AssignAsset): Observable<HttpResponse<AddAsset>> {
    return this.http.post<AddAsset>('/asset/save', user, { observe: 'response' });
  }

  findAllAddAsset(): Observable<HttpResponse<AddAsset[]>> {
    return this.http.get<AddAsset[]>('/asset/all', { observe: 'response' });
  }
}
