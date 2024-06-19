import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  id: string;
  payload: JsonValue;
  timestamp: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
