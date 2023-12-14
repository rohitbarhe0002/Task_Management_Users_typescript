
import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  tasks:any,
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
