import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Tag, Typography } from "antd";
import { memo } from "react";
import type { Todo } from "../entities/todo.entities";

const { Text } = Typography;

interface TodoItemProps {
  todo: Todo;
  onClose: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = memo(function TodoItem({
  todo,
  onClose,
  onDelete,
}: TodoItemProps) {
  const isClosed = todo.status === "close";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #f0f0f0",
        transition: "all 0.3s",
      }}
    >
      <Space size="middle">
        {isClosed && <Tag color="success">✓ Выполнено</Tag>}
        <Text
          style={{
            textDecoration: isClosed ? "line-through" : "none",
            fontSize: "16px",
            opacity: isClosed ? 0.6 : 1,
          }}
        >
          {todo.title}
        </Text>
      </Space>

      <Space>
        {!isClosed && (
          <Button
            type="link"
            icon={<CheckOutlined />}
            onClick={() => onClose(todo.id)}
            style={{ color: "#52c41a" }}
          >
            Выполнить
          </Button>
        )}
        <Button
          type="link"
          danger
          icon={<DeleteOutlined />}
          onClick={() => onDelete(todo.id)}
        >
          Удалить
        </Button>
      </Space>
    </div>
  );
});

TodoItem.displayName = "TodoItem";
