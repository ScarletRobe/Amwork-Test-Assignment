import { ITaskResponse } from "../taskResponse/taskResponse";

export interface ITask extends ITaskResponse {
  startDate: string;
  endDate: string;
  enitity: string;
  tag: string;
  description: string;
}
