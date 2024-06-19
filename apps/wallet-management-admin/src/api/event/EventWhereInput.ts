import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  payload?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
  typeField?: "Option1";
};
