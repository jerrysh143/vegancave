import store from "../redux/store";

export interface Response {
  data: any;
  status: boolean;
  message: string;
}

export type RootState = ReturnType<typeof store.getState>;
