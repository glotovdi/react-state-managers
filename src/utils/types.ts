export type TypeFromObject<T extends object> = {
  [K in keyof T]: T[K];
};
