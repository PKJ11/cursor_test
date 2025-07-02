import mongoose, { Document, Schema } from 'mongoose';

export interface INote extends Document {
  title: string;
  content: string;
  course: mongoose.Types.ObjectId;
  classroom?: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
  attachments: {
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize: number;
  }[];
  tags: string[];
  isPublic: boolean;
  downloadCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new Schema<INote>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  classroom: {
    type: Schema.Types.ObjectId,
    ref: 'Classroom',
    default: null,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  attachments: [{
    fileName: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number,
      required: true,
    },
  }],
  tags: [{
    type: String,
    trim: true,
  }],
  isPublic: {
    type: Boolean,
    default: true,
  },
  downloadCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Indexes
NoteSchema.index({ course: 1 });
NoteSchema.index({ classroom: 1 });
NoteSchema.index({ author: 1 });
NoteSchema.index({ isPublic: 1 });
NoteSchema.index({ title: 'text', content: 'text' });

export default mongoose.models.Note || mongoose.model<INote>('Note', NoteSchema);