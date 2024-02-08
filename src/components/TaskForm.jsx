import { useContext, useState } from "react";
import {TaskContext} from '../Context/TaskContex';

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        createTask({
          title, 
          description
        })

        setTitle('')
        setDescription('')
    }


  return (
    
      <div className="max-w-md mx-auto">
        <form className= "bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
          <h1 className="text-2xl text-white mb-3">Crea tu tarea</h1>
        <input className="bg-slate-500 p-3 w-full mb-2" placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}></input>
        <textarea className="bg-slate-500 p-3 w-full mb-2" placeholder="Escribe la descripcion"
        onChange={(e) => setDescription(e.target.value)}></textarea>
        <button className="bg-blue-500 px-3 py-1 text-white rounded-md">Guardar</button>
      </form>
      </div>
   
  );
}

export default TaskForm;
