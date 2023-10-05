import mongoose, { Schema, Document } from "mongoose";
import {TCurrencyModel} from '@/types/types'

const CurrencySchema: Schema = new Schema({
  name: String,
  code: String,
  enabled: Boolean,
  sort: Number,
  moneyFormat: String,
  moneyInEmailsFormat: String,
  moneyWithCurrencyFormat: String,
  moneyWithCurrencyInEmailsFormat: String,
  decimalMark: String,
  subunitToUnit: Number,
  symbol: String,
  thousandsSeparator: String,
});

CurrencySchema.set('toObject', { virtuals: true });
CurrencySchema.set('toJSON', { virtuals: true });

export default mongoose.models.Currency || mongoose.model < TCurrencyModel & Document > ("Currency", CurrencySchema);