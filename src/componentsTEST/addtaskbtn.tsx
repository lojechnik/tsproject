import { Dispatch,useState, SetStateAction } from "react";
import { dataArrayType, dataObjectType } from "./context/data-context";
import { historyContextType } from "./context/data-context";
const AddTaskBtn = ({
  taskText,
  authorName,
  history,
  setterF,
  data,
}: {
  taskText: string;
  authorName: string;
  history?: historyContextType;
  setterF: Dispatch<SetStateAction<dataArrayType>>;
  data:dataArrayType;
}) => {
  const pushTask = (dataItem:dataObjectType) =>{
    setterF([...data,
       dataItem
      ])}
  console.log(taskText);
  const addedTask = {
    task: taskText,
    author: authorName,
    date: new Date().toLocaleString(),
    history: [
      {
        task: taskText,
        author: authorName,
        date: new Date().toLocaleString(),
      },
    ],
  };
  return <button onClick={() => pushTask(addedTask)}>ADD</button>;
};
export default AddTaskBtn;
