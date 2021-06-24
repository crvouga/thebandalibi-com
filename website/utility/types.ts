export type IPromiseValue<T> = T extends PromiseLike<infer U> ? U : T;
