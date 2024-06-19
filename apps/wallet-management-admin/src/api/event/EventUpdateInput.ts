import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  payload?: InputJsonValue;
  timestamp?: Date | null;
  typeField?: "Option1" | null;
};
