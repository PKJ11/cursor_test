import mongoose, { Document, Schema } from 'mongoose';

export interface IClassroom extends Document {
  name: string;
  description: string;
  instructor: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  students: mongoose.Types.ObjectId[];
  schedule: {
    dayOfWeek: number; // 0-6 (Sunday-Saturday)
    startTime: string; // HH:MM format
    endTime: string; // HH:MM format
  }[];
  timezone: string;
  maxStudents: number;
  isActive: boolean;
  meetingUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ClassroomSchema = new Schema<IClassroom>({
  name: {
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
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  schedule: [{
    dayOfWeek: {
      type: Number,
      required: true,
      min: 0,
      max: 6,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  }],
  timezone: {
    type: String,
    required: true,
    default: 'UTC',
  },
  maxStudents: {
    type: Number,
    required: true,
    min: 1,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  meetingUrl: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});

// Indexes
ClassroomSchema.index({ instructor: 1 });
ClassroomSchema.index({ course: 1 });
ClassroomSchema.index({ isActive: 1 });

export default mongoose.models.Classroom || mongoose.model<IClassroom>('Classroom', ClassroomSchema);