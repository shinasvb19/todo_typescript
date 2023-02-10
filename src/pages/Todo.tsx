import React, { useId, useState } from "react";
import { Input } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import uuid from "react-uuid";

type arrayType = {
  taskName: string;
};
const Todo = () => {
  const [todo, setTodo] = useState<string>("");
  const [task, setTask] = useState<arrayType[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    if (todo.length === 0) return;
    const newTask = { taskName: todo };
    setTask([...task, newTask]);
    setTodo("");
  };
  const handleDelete = (taskName: string) => {
    const newTask = task.filter((task) => {
      return task.taskName !== taskName;
    });
    setTask(newTask);
  };

  return (
    <div className="flex flex-col ">
      <div className="text-white flex items-center justify-between">
        <Input
          placeholder="add list"
          onChange={handleInputChange}
          size="sm"
          bg={"blackAlpha.500"}
          value={todo}
        />
        <AddIcon
          className="ml-5 cursor-pointer"
          color={"red.400"}
          onClick={handleClick}
        />
      </div>
      <div className="text-white mt-10 h-48 w-48 overflow-y-scroll no-scrollbar items-center">
        {task.map((tasks) => (
          <div className="flex items-center" key={uuid()}>
            <div className="border-blue-500 bg-blue-500 rounded-lg mt-3 w-[200px]">
              {tasks.taskName}
            </div>
            <DeleteIcon
              className="ml-6"
              onClick={() => {
                handleDelete(tasks.taskName);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
