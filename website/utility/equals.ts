import fastDeepEquals from "fast-deep-equal";

export const equals = <TA, TB>(a: TA, b: TB): boolean => fastDeepEquals(a, b);
