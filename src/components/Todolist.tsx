"use client";
import React from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TodoItem } from "@/utils/todolistUtils";

interface TodoListProps {
  items: TodoItem[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onAddItem: () => void;
  onRemoveItem: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  inputValue,
  onInputChange,
  onAddItem,
  onRemoveItem,
  onToggleComplete,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="flex mb-4">
        <Input
          type="text"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onInputChange(e.target.value)
          }
          placeholder="Add a new todo item"
          className="flex-grow mr-2"
        />
        <Button onClick={onAddItem}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <span
              className={`cursor-pointer ${
                item.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => onToggleComplete(item.id)}
            >
              {item.text}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveItem(item.id)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
