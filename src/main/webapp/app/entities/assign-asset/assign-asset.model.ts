import { Moment } from 'moment';

export interface IAssignAsset {
  id?: number;
  assetType?: String;
  serialNumber?: String;
  assignTo?: String;
  assignmentDate?: Moment;
  status?: String;
  reason?: String;
}

export class AssignAsset implements IAssignAsset {
  constructor(
    public id?: number,
    public assetType?: String,
    public serialNumber?: String,
    public assignTo?: String,
    public assignmentDate?: Moment,
    public status?: String,
    public reason?: String
  ) {}
}
