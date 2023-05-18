import { dataArrayType, dataObjectType } from './context/data-context'
import {useState} from 'react'
export const pushTask = (dataItem:dataObjectType) =>{
    const [data, setData] = useState<dataArrayType>([]);
    setData([...data,
       dataItem
      ])
        console.log('dasdadasdsadasdsaata',data)
  }