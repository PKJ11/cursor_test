import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage {
  sender: mongoose.Types.ObjectId;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
  fileName?: string;
}

export interface IChat extends Document {
  type: 'direct' | 'classroom' | 'course';
  participants: mongoose.Types.ObjectId[];
  course?: mongoose.Types.ObjectId;
  classroom?: mongoose.Types.ObjectId;
  messages: IMessage[];
  lastMessage?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ['text', 'image', 'file'],
    default: 'text',
  },
  fileUrl: {
    type: String,
    default: null,
  },
  fileName: {
    type: String,
    default: null,
  },
});

const ChatSchema = new Schema<IChat>({
  type: {
    type: String,
    enum: ['direct', 'classroom', 'course'],
    required: true,
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    default: null,
  },
  classroom: {
    type: Schema.Types.ObjectId,
    ref: 'Classroom',
    default: null,
  },
  messages: [MessageSchema],
  lastMessage: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Indexes
ChatSchema.index({ participants: 1 });
ChatSchema.index({ course: 1 });
ChatSchema.index({ classroom: 1 });
ChatSchema.index({ lastMessage: -1 });

export default mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema);