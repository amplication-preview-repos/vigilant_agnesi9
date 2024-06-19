import { Transaction } from "../transaction/Transaction";

export type Wallet = {
  balance: number | null;
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  userId: string | null;
};
