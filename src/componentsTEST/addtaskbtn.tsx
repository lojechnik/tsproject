import React, { useEffect, useState, useMemo, useCallback,useContext } from 'react'
import { DataContext, dataContextType, dataObjectType } from './context/data-context'
import { historyContextType } from './context/data-context';
const AddTaskBtn = ({taskText, authorName,history}: { taskText:string,  authorName:string, history?:historyContextType}) =>{
 
  const [data, setData] = useState<dataContextType>([]);
  const pushTask = (dataItem:dataObjectType) =>{
    setData([...data,
       dataItem
      ])
        console.log('dasdadasdsadasdsaata',data)
  }
    return (<button onClick = {()=> pushTask} >ADD</button>)
}
export default AddTaskBtn
