import { useState } from 'react'
import { dataArrayType, dataObjectType } from './context/data-context'
import { historyContextType } from './context/data-context';
const AddTaskBtn = ({taskText, authorName,history}: { taskText:string,  authorName:string, history?:historyContextType}) =>{
 console.log(taskText)
 const item:dataObjectType = {
  task: taskText,
  author: authorName,
  date: new Date().toLocaleString(),
  history: [{
    task: taskText,
  author: authorName,
  date: new Date().toLocaleString()
  }]
 }
  const [data, setData] = useState<dataArrayType>([]);
  const pushTask = (dataItem:dataObjectType) =>{
    setData([...data,
       dataItem
      ])
        console.log('dataPushed',data)
  }
    return (<button onClick = {()=> pushTask(item)} >ADD</button>)
}
export default AddTaskBtn
