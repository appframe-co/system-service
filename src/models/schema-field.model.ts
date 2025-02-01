import mongoose, { Schema, Document } from "mongoose";
import {TSchemaFieldModel} from '@/types/types'

const PresetChoiceSchema: Schema = new Schema({
  name: String,
  value: String
}, { _id : false });

const ValidationSchema: Schema = new Schema({
  code: String,
  name: String,
  desc: String,
  type: String,
  value: Schema.Types.Mixed,
  presetChoices: [PresetChoiceSchema]
});

const UnitSchema: Schema = new Schema({
  code: String,
  name: String
}, { _id : false });

const SchemaFieldSchema: Schema = new Schema({
  name: String,
  type: String,
  icon: String,
  groupCode: String,
  list: Boolean,
  validationDescHtml: String,
  params: [ValidationSchema],
  validations: [ValidationSchema],
  units: [UnitSchema]
});

SchemaFieldSchema.set('toObject', { virtuals: true });
SchemaFieldSchema.set('toJSON', { virtuals: true });

export default mongoose.models.SchemaField || mongoose.model < TSchemaFieldModel & Document > ("SchemaField", SchemaFieldSchema);