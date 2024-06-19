import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";

export type WalletCreateInput = {
  balance?: number | null;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
  userId?: string | null;
};
