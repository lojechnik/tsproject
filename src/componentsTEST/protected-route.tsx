import { useAuth } from '../services/auth';
import { Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ProtectedRouteElement({ element }) {
    const {data,setData} = useContext(DataContext)
    const [isUserLoaded, setUserLoaded] = useState(false);
    const init = () => {
    getUser();
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);
  const handleLoginClick = (index) => {
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
    if (!isUserLoaded) {
    return null;
  }
    return loginCheck ? element : <Navigate to="/login" replace/>;
} 