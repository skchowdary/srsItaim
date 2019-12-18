import { Moment } from 'moment';

export interface ISearchRecords {
  id?: number;
  assignedTo?: string;
  assigmentDate?: Moment;
  AssetType?: string;
  serialNumber?: string;
  modalNumber?: string;
  manufacturer?: string;
  procurementDate?: Moment;
}

export class SearchRecords implements ISearchRecords {
  constructor(
    public id?: number,
    public assignedTo?: string,
    public assigmentDate?: Moment,
    public AssetType?: string,
    public serialNumber?: string,
    public modalNumber?: string,
    public manufacturer?: string,
    public procurementDate?: Moment
  ) {}
}
