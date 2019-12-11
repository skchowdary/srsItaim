import { Moment } from 'moment';

export interface IAssignAsset {
  id?: number;
  assetType?: String;
  serialNumber?: String;
  assignTo?: String;
  assignmentDate?: Moment;
}

export class AssignAsset implements IAssignAsset {
  constructor(
    public id?: number,
    public assetType?: String,
    public serialNumber?: String,
    public assignTo?: String,
    public assignmentDate?: Moment
  ) {}
}
