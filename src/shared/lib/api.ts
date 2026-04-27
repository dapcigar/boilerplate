export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export function ok<T>(data: T): Response {
  return Response.json({ success: true, data } satisfies ApiResponse<T>);
}

export function fail(error: string, status = 400): Response {
  return Response.json({ success: false, error } satisfies ApiResponse<never>, { status });
}

export function handleApiError(error: unknown): Response {
  if (error instanceof Error) {
    return fail(error.message, 500);
  }

  return fail('Unknown error', 500);
}
