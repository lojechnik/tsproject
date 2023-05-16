import React, { useEffect, useState, useMemo, useCallback,useContext } from 'react'
import { DataContext, dataContextType, dataObjectType } from './context/data-context'
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
  const [data, setData] = useState<dataContextType>([]);
  const pushTask = (dataItem:dataObjectType) =>{
    setData([...data,
       dataItem
      ])
        console.log('dataPushed',data)
  }
    return (<button onClick = {()=> pushTask(item)} >ADD</button>)
}
export default AddTaskBtn
