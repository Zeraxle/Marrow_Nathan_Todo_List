

const Display = (props) => {
    const {taskList, setTaskList} = props
    const deleteHandler = (id) => {
        const updatedTaskList = taskList.filter(task => task.id !== id)
        setTaskList(updatedTaskList)
    }

    const toggleComplete = (id) => {
        const updatedTaskList = (taskList.map(task => {
            if(task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task 
        }
    ))
        setTaskList(updatedTaskList)
}

    return (
        <>
            
            {
                taskList.map( task => (
                    <div key={task.id} className="task-div">
                        <p className={task.isComplete? "complete" : null}>{task.body}</p>
                        <input 
                            type="checkbox" 
                            name="checkbox"  
                            onClick={() => toggleComplete(task.id)}/>
                        <button onClick={ () => deleteHandler(task.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default Display