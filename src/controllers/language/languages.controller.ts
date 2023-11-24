import Language from '@/models/language.model'
import {TLanguage, TErrorResponse, TLanguageModel} from '@/types/types'

export default async function LanguageList(): Promise<TErrorResponse | {languages: TLanguage[]}> {
    try {
        const languages: TLanguageModel[] = await Language.find({}).sort({'sort': 1});
        if (!languages) {
            return {error: 'invalid_language'};
        }

        const output = languages.map(language => ({
            id: language.id,
            name: language.name,
            code: language.code,
            enabled: language.enabled,
            sort: language.sort
        }));

        return {languages: output};
    } catch (error) {
        throw error;
    }
}