import { DataContext, dataContextType, dataObjectType } from './context/data-context'
import {useState} from 'react'
export const pushTask = (dataItem:dataObjectType) =>{
    const [data, setData] = useState<dataContextType>([]);
    setData([...data,
       dataItem
      ])
        console.log('dasdadasdsadasdsaata',data)
  }