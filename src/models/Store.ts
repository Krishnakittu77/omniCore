import mongoose, { Schema, Document } from 'mongoose';

export interface IStore extends Document {
  name: string;
  location: string;
  isActive: boolean;
}

const StoreSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model<IStore>('Store', StoreSchema);
