import { RoutesInput } from '@/types/types'
import currency from './currency.route'
import language from './language.route'
import schemaFields from './schema-fields.route'

export default ({ app }: RoutesInput) => {
    app.use('/api/currencies', currency);
    app.use('/api/languages', language);
    app.use('/api/schema_fields', schemaFields);
};