import React from 'react'

export const Addtask = ({tasklist,setTasklist}) => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    const date = new Date();
    const newTask = {id: date.getTime(),
      name: e.target.Add.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
     }
     setTasklist([...tasklist,newTask])
     e.target.Add.value="";

  }

  return (
    <div>
        <section className='addTask'>
            <form onSubmit={handleSubmit}> 
                <input input='text' name='Add'placeholder='Add New Task'></input>
                <button type='submit'>Add</button>

            </form>
        </section>
    </div>
  )
}
