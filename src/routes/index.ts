import { RoutesInput } from '@/types/types'
import currency from './currency.route'

export default ({ app }: RoutesInput) => {
    app.use('/api/currencies', currency);
};