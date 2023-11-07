import React from 'react'

export const Addtask = ({tasklist,setTasklist,task,setTask}) => {
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(task.id){
      const date = new Date();
      const updateTask =tasklist.map((todo)=>(
        todo.id=== task.id ?{id:task.id,name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo
      ));
      setTasklist(updateTask);
      setTask({});

    }else{
      const date = new Date();
      const newTask = {id: date.getTime(),
        name: e.target.Add.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
       }
       setTasklist([...tasklist,newTask])
       setTask({});
    }
   

  }

  return (
    <div>
        <section className='addTask'>
            <form onSubmit={handleSubmit}> 
                <input input='text' name='Add' value={task.name || ""}placeholder='Add New Task'onChange={e => setTask({...task, name: e.target.value})} ></input>
                <button type='submit'>{task.id ? "Update":"Add"}</button>

            </form>
        </section>
    </div>
  )
}
