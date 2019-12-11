import { Moment } from 'moment';

export interface IAddClient {
  id?: number;
  clientName?: String;
}

export class AddClient implements IAddClient {
  constructor(public id?: number, public clientName?: String) {}
}
