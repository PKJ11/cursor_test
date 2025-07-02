import mongoose, { Document, Schema } from 'mongoose';

export interface IAnswer {
  questionIndex: number;
  answer: string | number;
  isCorrect?: boolean;
  pointsEarned: number;
}

export interface ITestSubmission extends Document {
  test: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  answers: IAnswer[];
  score: number;
  percentage: number;
  timeSpent: number; // in minutes
  submittedAt: Date;
  attempt: number;
  passed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AnswerSchema = new Schema<IAnswer>({
  questionIndex: {
    type: Number,
    required: true,
  },
  answer: {
    type: Schema.Types.Mixed,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
  pointsEarned: {
    type: Number,
    required: true,
    min: 0,
  },
});

const TestSubmissionSchema = new Schema<ITestSubmission>({
  test: {
    type: Schema.Types.ObjectId,
    ref: 'Test',
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  answers: [AnswerSchema],
  score: {
    type: Number,
    required: true,
    min: 0,
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  timeSpent: {
    type: Number,
    required: true,
    min: 0,
  },
  submittedAt: {
    type: Date,
    required: true,
  },
  attempt: {
    type: Number,
    required: true,
    min: 1,
  },
  passed: {
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true,
});

// Indexes
TestSubmissionSchema.index({ test: 1, student: 1 });
TestSubmissionSchema.index({ student: 1 });
TestSubmissionSchema.index({ submittedAt: -1 });

export default mongoose.models.TestSubmission || mongoose.model<ITestSubmission>('TestSubmission', TestSubmissionSchema);