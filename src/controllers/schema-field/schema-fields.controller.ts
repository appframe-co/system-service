import SchemaField from '@/models/schema-field.model'
import {TErrorResponse, TSchemaField, TSchemaFieldOutput} from '@/types/types'

export default async function SchemaFields(): Promise<TErrorResponse | {schemaFields: TSchemaFieldOutput[]}> {
    try {
        const schemaFields = await SchemaField.find({});
        if (!schemaFields) {
            throw new Error('invalid schema fields');
        }

        const output = schemaFields.map((schemaField: TSchemaField)  => ({
            id: schemaField.id,
            type: schemaField.type,
            name: schemaField.name,
            code: schemaField.code,
            icon: schemaField.icon,
            groupCode: schemaField.groupCode,
            list: schemaField.list,
            validationDescHtml: schemaField.validationDescHtml,
            validations: schemaField.validations.map(v => ({
                code: v.code,
                name: v.name,
                value: v.value,
                desc: v.desc,
                type: v.type,
                presetChoices: v.presetChoices
            })),
            units: schemaField.units.map(v => ({
                code: v.code,
                name: v.name
            }))
        }));

        return {schemaFields: output};
    } catch (error) {
        throw error;
    }
}