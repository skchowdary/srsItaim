import { Moment } from 'moment';

export interface IAddAsset {
  id?: number;
  assetType?: String;
  serialNumber?: String;
  modelNumber?: String;
  manufacture?: String;
  procurementDate?: Moment;
}

export class AddAsset implements IAddAsset {
  constructor(
    public id?: number,
    public assetType?: String,
    public serialNumber?: String,
    public modelNumber?: String,
    public manufacture?: String,
    public procurementDate?: Moment
  ) {}
}
