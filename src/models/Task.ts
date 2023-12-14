
import mongoose, { Document } from 'mongoose';

interface ITask extends Document {
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  user:any,
}

const taskSchema = new mongoose.Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;
