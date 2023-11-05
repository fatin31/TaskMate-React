import React from 'react'

export const Addtask = () => {
  return (
    <div>
        <section className='addTask'>
            <form>
                <input input='text' name='Add'placeholder='Add New Task'></input>
                <button type='submit'>Add</button>

            </form>
        </section>
    </div>
  )
}
