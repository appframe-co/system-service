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

export type TLanguageModel = {
  id: string;
  name: string;
  code: string;
  enabled:boolean;
  sort: number;
}

export type TLanguage = {
  id: string;
  name: string;
  code: string;
  enabled:boolean;
  sort: number;
}

type TValidationFieldModel = {
  code: string;
  type: string;
  value: any;
}

export type TSchemaFieldModel = {
  name: string;
  code: string;
  icon: string;
  list: boolean;
  validationDescHtml: string|null;
  validations: TValidationFieldModel[]
}

export type TSchemaFieldOutput = {
  id: string;
  type: string;
  name: string;
  code: string;
  icon: string;
  validations: TValidationField[];
}

type TValidationField = {
  type: string;
  code: string;
  value: any;
}

type TValidationSchemaField = {
  code: string;
  name: string;
  desc: string;
  value: any;
  type: string;
  presetChoices: {name: string, value: string}[];
}

type TUnitField = {
  code: string;
  name: string;
}

export type TSchemaField = {
  id: string;
  type: string;
  name: string;
  code: string;
  icon: string;
  groupCode: string;
  list: string;
  validationDescHtml: string|null;
  validations: TValidationSchemaField[];
  units: TUnitField[];
}