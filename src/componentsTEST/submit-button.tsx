import React, { useEffect, useState, useMemo, useCallback,useContext } from 'react'
import { DataContext, dataContextType} from './context/data-context';
import { AuthContext, authContextType } from './context/auth-context';
import { dataObjectType } from './context/data-context';
import { pushTask } from './pushtask';
const SubmitChangeBtn = ({item, taskText,display}: { item:dataObjectType,  taskText:string, display:boolean}) =>{
    const [data,setData] = useState<dataContextType>([])
    const [auth,setAuth] = useState<authContextType>('')
    return (<button onClick ={()=>pushTask(item)} >ADD</button>)
}
export default SubmitChangeBtn