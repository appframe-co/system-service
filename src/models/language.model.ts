import mongoose, { Schema, Document } from "mongoose";
import {TLanguageModel} from '@/types/types'

const LanguageSchema: Schema = new Schema({
  name: String,
  code: String,
  enabled: Boolean,
  sort: Number,
});

LanguageSchema.set('toObject', { virtuals: true });
LanguageSchema.set('toJSON', { virtuals: true });

export default mongoose.models.Language || mongoose.model < TLanguageModel & Document > ("Language", LanguageSchema);