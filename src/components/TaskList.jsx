import TaskCard from './TaskCard'
import {TaskContext} from '../Context/TaskContex';
import {useContext} from 'react';

function TaskList() {
  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas</h1>;
  }
  
  return (
    <div className='grid grid-cols-4 grap-2'>
      {tasks.map((task) => (
       <TaskCard key ={task.id} task = {task} ></TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
