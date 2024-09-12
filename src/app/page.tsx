"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
  createTodoItem,
  TodoItem,
} from "@/utils/todolistUtils";
import { Card } from "@/components/ui/card";

const Home: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setItems(loadFromLocalStorage());
  }, []);

  useEffect(() => {
    saveToLocalStorage(items);
  }, [items]);

  const handleDeleteAll = () => {
    setItems([]);
    saveToLocalStorage([]);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = createTodoItem(inputValue);
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <Navbar onDeleteAll={handleDeleteAll} items={items} />
     

      <TodoList
        items={items}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default Home;
