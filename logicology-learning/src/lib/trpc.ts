import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

/**
 * 1. CONTEXT
 */
const createInnerTRPCContext = async () => {
  return {
    userId: null,
    user: null,
  };
};

export const createTRPCContext = async () => {
  return createInnerTRPCContext();
};

/**
 * 2. INITIALIZATION
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * 3. ROUTER & PROCEDURE HELPERS
 */
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

/** Protected procedure that requires authentication */
export const protectedProcedure = t.procedure;

/** Admin-only procedure */
export const adminProcedure = t.procedure;