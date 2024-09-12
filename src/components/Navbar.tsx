import React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TodoItem } from "@/utils/todolistUtils";

interface NavbarProps {
  onDeleteAll: () => void;
  items: TodoItem[];
}

const Navbar: React.FC<NavbarProps> = ({ onDeleteAll, items }) => {
  return (
    <nav className="bg-blue-500 p-4 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-white text-2xl font-bold mb-2 sm:mb-0">TodoList</h1>
      <div className="flex-1 mx-4 overflow-x-auto whitespace-nowrap">
        <ul className="flex space-x-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={`text-white px-2 py-1 rounded ${
                item.completed ? "bg-green-600" : "bg-blue-600"
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <Button
        variant="destructive"
        onClick={onDeleteAll}
        className="bg-red-500 hover:bg-red-600"
      >
        <Trash2 className="mr-2 h-4 w-4" /> Delete All
      </Button>
    </nav>
  );
};

export default Navbar;
