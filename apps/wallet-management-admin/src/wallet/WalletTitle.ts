import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "userId";

export const WalletTitle = (record: TWallet): string => {
  return record.userId?.toString() || String(record.id);
};
