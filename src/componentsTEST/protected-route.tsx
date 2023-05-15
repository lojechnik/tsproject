
import { Route, Navigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from './context/data-context';
import { dataContextType, dataObjectType } from './context/data-context';
import React from 'react'
interface ParentCompProps {
  childComp?: React.ReactNode;
}
export function ProtectedRouteElement( element:ParentCompProps ) {
    const [data,setData] = useState<dataContextType>([])
    const [isUserLoaded, setUserLoaded] = useState(false);
    const init = () => {
    setUserLoaded(true);
  };

  // useEffect(() => {
  //   init();
  // }, []);
  const handleLoginClick = (index:number) => {
    const nextData = data.map((c:dataObjectType, i) => {
      if (i === index) {
        c.isTaskInputVisible = !c.isTaskInputVisible
        return c;
      } else {
        return c;
      }
    });
    setData(nextData);
  }
    if (!isUserLoaded) {
    return null;
  }
    return <Navigate to="/login" replace/>;
} 