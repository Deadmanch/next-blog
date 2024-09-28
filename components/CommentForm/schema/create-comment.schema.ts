import { z } from 'zod';

import { createCommentSchemaErrors } from './constants';

export const createCommentSchema = z.object({
	name: z.string().min(1, `${createCommentSchemaErrors.NAME_IS_REQUIRED}`),
	email: z.string().email(`${createCommentSchemaErrors.EMAIL_IS_INVALID}`),
	body: z.string().min(1, `${createCommentSchemaErrors.COMMENT_IS_REQUIRED}`)
});
