import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  sku: string;
  description: string;
  price: number;
  category: string;
  attributes: Map<string, string>; // e.g., size, color
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true, text: true }, // Full-text search index
  sku: { type: String, required: true, unique: true, index: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, index: true },
  attributes: { type: Map, of: String }
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema);
