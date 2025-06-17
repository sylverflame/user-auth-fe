export const Status = {
  Success: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
} as const;

export const Status_4XX = [400, 401, 402, 403, 404];
export const Status_2XX = [200, 201, 203];
