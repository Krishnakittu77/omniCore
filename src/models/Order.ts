import mongoose, { Schema, Document } from 'mongoose';

export interface IOrderLineItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface IOrder extends Document {
  storeId: mongoose.Types.ObjectId; // Routing engine optimal fulfillment center
  cashierId?: mongoose.Types.ObjectId; // For offline/POS
  source: 'Offline' | 'Online';
  items: IOrderLineItem[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: 'Cash' | 'Credit' | 'DigitalWallet';
  status: 'Completed' | 'Refunded';
}

const OrderLineItemSchema = new Schema<IOrderLineItem>({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true }
});

const OrderSchema: Schema = new Schema({
  storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true, index: true },
  cashierId: { type: Schema.Types.ObjectId, ref: 'User' },
  source: { type: String, enum: ['Offline', 'Online'], required: true },
  items: [OrderLineItemSchema],
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['Cash', 'Credit', 'DigitalWallet'], required: true },
  status: { type: String, enum: ['Completed', 'Refunded'], default: 'Completed', index: true }
}, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema);
