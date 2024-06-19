import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";

export type WalletUpdateInput = {
  balance?: number | null;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
  userId?: string | null;
};
