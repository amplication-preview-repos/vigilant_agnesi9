/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { Type } from "class-transformer";

@InputType()
class WalletUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutWalletsInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutWalletsInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutWalletsInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutWalletsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { WalletUpdateInput as WalletUpdateInput };
