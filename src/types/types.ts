import { Application } from "express";

export type RoutesInput = {
  app: Application,
}

export type TErrorResponse = {
  error: string|null;
  description?: string;
  property?: string;
}

export type TCurrencyModel = {
  id: string;
  name: string;
  code: string;
  enabled:boolean;
  sort: number;
  moneyFormat: string;
  moneyInEmailsFormat: string;
  moneyWithCurrencyFormat: string;
  moneyWithCurrencyInEmailsFormat: string;
  decimalMark: string;
  subunitToUnit: number;
  symbol: string;
  thousandsSeparator: string;
}

export type TCurrency = {
  name: string;
  code: string;
  enabled:boolean;
  sort: number;
  moneyFormat: string;
  moneyInEmailsFormat: string;
  moneyWithCurrencyFormat: string;
  moneyWithCurrencyInEmailsFormat: string;
  decimalMark: string;
  subunitToUnit: number;
  symbol: string;
  thousandsSeparator: string;
}