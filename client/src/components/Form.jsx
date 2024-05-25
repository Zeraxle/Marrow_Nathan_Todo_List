import {useState} from 'react'

const Form = (props) => {
    const {setTaskList} = props
    const cryptoID = crypto.randomUUID()
    const [task, setTask] = useState({
        id: cryptoID,
        body: '',
        isComplete: false
    })
    const updateTask = (e) => {
        const {name, value} = e.target
        setTask(prev => ({...prev, [name] : value}))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setTaskList(prev => [...prev, task])

        setTask({
            id: cryptoID,
            body: '',
            isComplete: false
        })
        
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label>
                    Add Your Task Here:  
                    <input 
                        type="text" 
                        name="body" 
                        value={task.body}
                        onInput={updateTask}/>
                </label>
                <input type="submit" value="Add Task" className="button"/>
            </form>
        </>
    )
}

export default Form