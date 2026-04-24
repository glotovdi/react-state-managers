import { BaseLayout } from "../app/layouts/baseLayout";
import TodoList from "../widgets/todoList";

export const TodoListPage = () => {
  return (
    <BaseLayout>
      <TodoList />
    </BaseLayout>
  );
};
