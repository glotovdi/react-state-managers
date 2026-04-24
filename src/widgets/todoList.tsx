import { Card, Space, Typography, message } from "antd";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { Todo } from "../entities/todo.entities";
import { generateId } from "../shared/generateId";
import { TodoItem } from "./todoItem";
const { Title } = Typography;

const initialState: Todo[] = [{ status: "open", title: "Выучить TS", id: 1 }];

interface FormValues {
  title: string;
}

export default function TodoList() {
  const [list, setList] = useState<Todo[]>(initialState);
  const [messageApi, contextHolder] = message.useMessage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
    },
  });

  const addTodo = useCallback(
    (data: FormValues) => {
      const { title } = data;

      if (!title.trim()) {
        messageApi.warning("Пожалуйста, введите название задачи");
        return;
      }

      const id = generateId();

      setList((prevList) => [...prevList, { status: "open", id, title }]);
      messageApi.success("Задача добавлена!");
      reset();
    },
    [messageApi, reset],
  );

  const deleteTodo = useCallback(
    (id: number) => {
      setList((prevList) => prevList.filter((el) => el.id !== id));
      messageApi.info("Задача удалена");
    },
    [messageApi],
  );

  const closeTodo = useCallback(
    (id: number) => {
      setList((prevList) =>
        prevList.map((elem) =>
          elem.id === id ? { ...elem, status: "close" } : elem,
        ),
      );
      messageApi.success("Задача выполнена!");
    },
    [messageApi],
  );

  return (
    <>
      {contextHolder}
      <Link to="/timer">Таймер</Link>
      <Card
        style={{
          maxWidth: 600,
          margin: "50px auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
          Todo List
        </Title>

        {/* Input + Button в одном блоке */}
        <Space.Compact style={{ width: "100%", marginBottom: 24 }}>
          <form onSubmit={handleSubmit(addTodo)}>
            <input
              {...register("title", {
                required: "Пожалуйста, введите название задачи",
              })}
              type="text"
              style={{
                border: "1px solid black",
                borderRadius: "2px",
                width: "300px",
                borderColor: errors.title ? "red" : "black",
              }}
              placeholder="Введите задачу..."
            />

            <button type="submit" disabled={isSubmitting}>
              Добавить
            </button>
          </form>
        </Space.Compact>

        <div>
          {list.map((i) => (
            <TodoItem
              todo={i}
              onClose={closeTodo}
              onDelete={deleteTodo}
              key={i.id}
            />
          ))}
        </div>

        {/* Если список пуст */}
        {list.length === 0 && (
          <div style={{ textAlign: "center", color: "#999", padding: "20px" }}>
            🎉 Поздравляю! Все задачи выполнены
          </div>
        )}
      </Card>
    </>
  );
}
