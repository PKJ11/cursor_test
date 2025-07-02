import mongoose, { Document, Schema } from 'mongoose';

export interface IAttendance extends Document {
  classroom: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  date: Date;
  status: 'present' | 'absent' | 'late';
  joinTime?: Date;
  leaveTime?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AttendanceSchema = new Schema<IAttendance>({
  classroom: {
    type: Schema.Types.ObjectId,
    ref: 'Classroom',
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late'],
    required: true,
  },
  joinTime: {
    type: Date,
    default: null,
  },
  leaveTime: {
    type: Date,
    default: null,
  },
  notes: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

// Indexes
AttendanceSchema.index({ classroom: 1, date: 1 });
AttendanceSchema.index({ student: 1, date: 1 });
AttendanceSchema.index({ classroom: 1, student: 1, date: 1 }, { unique: true });

export default mongoose.models.Attendance || mongoose.model<IAttendance>('Attendance', AttendanceSchema);