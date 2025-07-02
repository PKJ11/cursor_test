import mongoose, { Document, Schema } from 'mongoose';

export interface ILecture extends Document {
  title: string;
  description: string;
  course: mongoose.Types.ObjectId;
  videoUrl?: string;
  videoThumbnail?: string;
  duration: number; // in minutes
  order: number;
  isPublished: boolean;
  resources: {
    title: string;
    url: string;
    type: 'pdf' | 'video' | 'link' | 'document';
  }[];
  transcript?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  videoUrl: {
    type: String,
    default: null,
  },
  videoThumbnail: {
    type: String,
    default: null,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
  },
  order: {
    type: Number,
    required: true,
    min: 1,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  resources: [{
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['pdf', 'video', 'link', 'document'],
      required: true,
    },
  }],
  transcript: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

// Indexes
LectureSchema.index({ course: 1, order: 1 });
LectureSchema.index({ isPublished: 1 });

export default mongoose.models.Lecture || mongoose.model<ILecture>('Lecture', LectureSchema);