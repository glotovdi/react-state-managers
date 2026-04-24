export type TodoStatusEnum = "open" | "close" | "inProgress";

export interface Todo {
  status: TodoStatusEnum;
  title: string;
  id: number;
}
