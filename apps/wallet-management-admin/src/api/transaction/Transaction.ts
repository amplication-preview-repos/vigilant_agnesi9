import { Wallet } from "../wallet/Wallet";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
