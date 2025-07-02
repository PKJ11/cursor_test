import { createTRPCRouter } from '../../lib/trpc';
import { authRouter } from './routers/auth';
import { courseRouter } from './routers/course';
import { classroomRouter } from './routers/classroom';
import { lectureRouter } from './routers/lecture';
import { testRouter } from './routers/test';
import { chatRouter } from './routers/chat';
import { attendanceRouter } from './routers/attendance';
import { noteRouter } from './routers/note';
import { userRouter } from './routers/user';

/**
 * This is the primary router for your server.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  course: courseRouter,
  classroom: classroomRouter,
  lecture: lectureRouter,
  test: testRouter,
  chat: chatRouter,
  attendance: attendanceRouter,
  note: noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;