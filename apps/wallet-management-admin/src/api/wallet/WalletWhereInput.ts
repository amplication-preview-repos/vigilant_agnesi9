import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  userId?: StringNullableFilter;
};
