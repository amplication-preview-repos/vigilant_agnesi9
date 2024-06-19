import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  payload?: InputJsonValue;
  timestamp?: Date | null;
  typeField?: "Option1" | null;
};
