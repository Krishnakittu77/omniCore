import mongoose, { Schema, Document } from 'mongoose';

export interface IInventoryLedger extends Document {
  productId: mongoose.Types.ObjectId;
  storeId: mongoose.Types.ObjectId;
  quantity: number;
  reorderPoint: number;
}

const InventoryLedgerSchema: Schema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true, index: true },
  storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true, index: true },
  quantity: { type: Number, required: true, min: 0 },
  reorderPoint: { type: Number, default: 10 }
}, { timestamps: true });

// Ensure unique product-store pairs
InventoryLedgerSchema.index({ productId: 1, storeId: 1 }, { unique: true });

export default mongoose.model<IInventoryLedger>('InventoryLedger', InventoryLedgerSchema);
