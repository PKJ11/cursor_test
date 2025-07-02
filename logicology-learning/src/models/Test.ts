import mongoose, { Document, Schema } from 'mongoose';

export interface IQuestion {
  type: 'mcq' | 'descriptive' | 'true-false';
  question: string;
  options?: string[]; // For MCQ
  correctAnswer?: string | number; // For MCQ (index) or True/False
  points: number;
  explanation?: string;
}

export interface ITest extends Document {
  title: string;
  description: string;
  course: mongoose.Types.ObjectId;
  instructor: mongoose.Types.ObjectId;
  questions: IQuestion[];
  timeLimit: number; // in minutes
  totalPoints: number;
  passingScore: number; // percentage
  attempts: number; // allowed attempts
  isPublished: boolean;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>({
  type: {
    type: String,
    enum: ['mcq', 'descriptive', 'true-false'],
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: [{
    type: String,
  }],
  correctAnswer: {
    type: Schema.Types.Mixed,
  },
  points: {
    type: Number,
    required: true,
    min: 1,
  },
  explanation: {
    type: String,
    default: '',
  },
});

const TestSchema = new Schema<ITest>({
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
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  questions: [QuestionSchema],
  timeLimit: {
    type: Number,
    required: true,
    min: 1,
  },
  totalPoints: {
    type: Number,
    required: true,
    min: 1,
  },
  passingScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  attempts: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    default: null,
  },
  endDate: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

// Indexes
TestSchema.index({ course: 1 });
TestSchema.index({ instructor: 1 });
TestSchema.index({ isPublished: 1 });

export default mongoose.models.Test || mongoose.model<ITest>('Test', TestSchema);