import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  timestamp?: Date | null;
  typeField?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
