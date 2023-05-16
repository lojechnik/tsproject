import React, { useRef,useEffect, useState, useMemo, useCallback,useContext } from 'react'
import styles from './home-page.module.css' ;
import FormInput from './form-input'
import AddTaskBtn from './addtaskbtn'
import { Route,Link,Router} from 'react-router-dom';
import { DataContext, dataContextType} from './context/data-context';
import { AuthContext, authContextType } from './context/auth-context';
import History from './history'
import EditButton from './edit-button';
import { dataObjectType } from './context/data-context';

export const Home = () =>{
  const [searchText, setSearchText] = useState('')
  const [date, setDate] = useState(new Date().toLocaleString())
  const [taskInputValue, setTaskInputValue] = useState('')

  const taskInputEl = useRef<HTMLInputElement>(null);

  const data = useContext<dataContextType>([])
  const [auth,setAuth] = useState<authContextType>('')
  const clear = () => {
    setData([])
  }

  const handleDeleteClick = (value:number) => {
    const filteredArray = data.filter((item, index) => index !== value);
    setData(filteredArray)
    }

  const handleTaskEditClick = (index:number) => {
    const nextData = data.map((c, i) => {
      if (i === index) {
        c.isTaskInputVisible = !c.isTaskInputVisible
        return c;
      } else {
        return c;
      }
    });
    setData(nextData);
  }
const evalue = taskInputEl.current
  const handleSubmitClick = (index:number) => {
    const changedData = data.map((c, i) => {
      if (i === index) {
        if (evalue)
        {c.task = taskInputEl.current.value}
        c.history.push({
          task: c.task,
          author: c.author,
          date: date
          })
        console.log('VALUECHECK', c.history)
        return c
      } else {
        return c
      }
    })
    setData(changedData)
    console.log('taskinputvalue', taskInputValue)
    console.log('changedData', changedData)
  }

 

const storedValue:string | null = localStorage.getItem("todoData")
console.log('dataValue',data)
  useEffect(() => {
    if (storedValue !==null) {
    localStorage.setItem("todoData", JSON.stringify([]))
    setData(JSON.parse(storedValue))
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(data))
    console.log(data, 'data')
    console.log('SEND')
  }, [data])
  
  return(
    <div>
      <h2>Введите ФИО</h2>
      <button onClick={clear}>CLEAR CACHE</button>
      <input className={styles.Taskinput} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <AddTaskBtn taskText={searchText} authorName={auth} />
        <Link to= "/">
          <button onClick={()=>
            setAuth('')
          }>Logout</button>
        </Link>
        <div>
          {
            data.map((item,i) => {
              return(
                <div className={item.task} key={i}>
                  <span>{item.author}__</span>
                  <span>{item.task}xx</span>
                  {/* {item.isTaskInputVisible && <input ref={taskInputEl} />}  */}
                  <Link to= {"/task/" + item.task} state={{ todo: {...item} }} >
                  <button>Open history</button>   
                  </Link>          
                  <button onClick={()=>{
                    handleTaskEditClick(i)
                  }}>Task Edit</button>
                  <button onClick={()=>{
                    handleDeleteClick(i)
                  }}>Delete</button>
                  <button className={styles.SubmitButton} onClick={()=>{
                    handleSubmitClick(i)
                  }}>Submit</button>
                </div>
              )
            })
          }
        </div> 
    </div>
  )
}