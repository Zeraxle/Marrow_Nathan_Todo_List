import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  
const [taskList, setTaskList] = useState([])

  return (
    <>
      <Form setTaskList={setTaskList}/>
      <Display taskList={taskList} setTaskList={setTaskList}/>
        
    </>
  )
}

export default App
