import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  typeField?: "Option1";
  wallet?: WalletWhereUniqueInput;
};
