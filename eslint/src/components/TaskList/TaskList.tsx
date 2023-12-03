import React from 'react';
import { ITask, Task } from '../Task/Task';

export const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  );
};
