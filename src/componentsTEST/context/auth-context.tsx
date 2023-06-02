import React, { useEffect, useState, useMemo, useCallback,useContext,createContext } from 'react'
export type authContextType = {
 author: string,
  setAuth: () => {}
} | null;
  export const AuthContext = createContext<authContextType>(null);
