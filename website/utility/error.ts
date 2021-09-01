export type IError = {
  message: string;
};

export type Either<TLeft, TRight> = [TLeft, null] | [null, TRight];

export const catchError = async <TError = unknown, TData = unknown>(
  promise: Promise<TData>
): Promise<Either<TData, TError>> => {
  try {
    const data = await promise;

    return [data, null] as [TData, null];
  } catch (error) {
    return [null, error as TError] as [null, TError];
  }
};
