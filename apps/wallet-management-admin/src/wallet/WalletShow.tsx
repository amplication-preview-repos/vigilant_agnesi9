import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { WALLET_TITLE_FIELD } from "./WalletTitle";

export const WalletShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserId" source="userId" />
        <ReferenceManyField
          reference="Transaction"
          target="walletId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Timestamp" source="timestamp" />
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wallet"
              source="wallet.id"
              reference="Wallet"
            >
              <TextField source={WALLET_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
