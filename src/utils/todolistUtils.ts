export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const LOCAL_STORAGE_KEY = "todoListItems";

export const saveToLocalStorage = (items: TodoItem[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }
};

export const loadFromLocalStorage = (): TodoItem[] => {
  if (typeof window !== "undefined") {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
  }
  return [];
};

export const createTodoItem = (text: string): TodoItem => {
  return { id: Date.now(), text: text.trim(), completed: false };
};
