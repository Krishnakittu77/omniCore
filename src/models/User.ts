import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: 'Cashier' | 'Manager' | 'SystemAdministrator' | 'Customer';
  storeId?: mongoose.Types.ObjectId;
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['Cashier', 'Manager', 'SystemAdministrator', 'Customer'], required: true },
  storeId: { type: Schema.Types.ObjectId, ref: 'Store' }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
