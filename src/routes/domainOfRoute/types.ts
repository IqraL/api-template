import { Request } from "express";
type ExpressPostRequest<T> = Request<{}, {}, T, {}>;

type YourType = {
  user: string;
  company: string;
  component: string;
  errorMsg: string;
};
export type YourTypeRequest = ExpressPostRequest<YourType>;
