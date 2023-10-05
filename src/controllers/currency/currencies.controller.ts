import Currency from '@/models/currency.model'
import {TCurrency, TCurrencyModel, TErrorResponse} from '@/types/types'

export default async function CurrencyList(): Promise<TErrorResponse | {currencies: TCurrency[]}> {
    try {
        const currencies: TCurrencyModel[] = await Currency.find({});
        if (!currencies) {
            return {error: 'invalid_currency'};
        }

        const output = currencies.map(currency => ({
            id: currency.id,
            name: currency.name,
            code: currency.code,
            enabled: currency.enabled,
            sort: currency.sort,
            moneyFormat: currency.moneyFormat,
            moneyInEmailsFormat: currency.moneyInEmailsFormat,
            moneyWithCurrencyFormat: currency.moneyWithCurrencyFormat,
            moneyWithCurrencyInEmailsFormat: currency.moneyWithCurrencyInEmailsFormat,
            decimalMark: currency.decimalMark,
            subunitToUnit: currency.subunitToUnit,
            symbol: currency.symbol,
            thousandsSeparator: currency.thousandsSeparator
        }));

        return {currencies: output};
    } catch (error) {
        throw error;
    }
}