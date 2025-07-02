import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: mongoose.Types.ObjectId;
  thumbnail?: string;
  price: number;
  duration: number; // in hours
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  isPublished: boolean;
  enrolledStudents: mongoose.Types.ObjectId[];
  lectures: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  isPublished: {
    type: Boolean,
    default: false,
  },
  enrolledStudents: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  lectures: [{
    type: Schema.Types.ObjectId,
    ref: 'Lecture',
  }],
}, {
  timestamps: true,
});

// Indexes
CourseSchema.index({ instructor: 1 });
CourseSchema.index({ isPublished: 1 });
CourseSchema.index({ category: 1 });
CourseSchema.index({ level: 1 });
CourseSchema.index({ title: 'text', description: 'text' });

export default mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);