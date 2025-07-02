import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'admin';
  profileImage?: string;
  bio?: string;
  phone?: string;
  dateOfBirth?: Date;
  enrolledCourses: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student',
  },
  profileImage: {
    type: String,
    default: null,
  },
  bio: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
  enrolledCourses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course',
  }],
}, {
  timestamps: true,
});

// Indexes for better performance
UserSchema.index({ clerkId: 1 });
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);