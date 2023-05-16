
import React, { useEffect, useState, useMemo, useCallback,useContext,createContext } from 'react'

export type historyObjectType = {
  date: string,
  author: string,
  task: string
}

export type historyContextType = historyObjectType[]
 


export type dataObjectType = {
  task: string,
  author: string,
  date: string,
  active?: boolean,
  isTaskInputVisible?: boolean,
  isFioInputVisible?: boolean,
  history: historyContextType
}

export type dataContextType = dataObjectType[]
  export const DataContext = createContext<dataContextType>([]);

  
  