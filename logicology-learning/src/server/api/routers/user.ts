import { createTRPCRouter, protectedProcedure } from '../../../lib/trpc';

export const userRouter = createTRPCRouter({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    return ctx.user;
  }),
});