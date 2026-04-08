export type TypeFromObject<T extends Object> = {
  [K in keyof T]: T[K];
};
