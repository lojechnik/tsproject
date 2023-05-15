import React, { useEffect, useState, useMemo, useCallback,useContext,createContext } from 'react'
export type authContextType = string
  
  export const AuthContext = createContext<authContextType>('');
