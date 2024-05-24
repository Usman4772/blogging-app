"use client"

import { createContext, useState } from "react"
export const GlobalContext=createContext<any>(null)
function Context({children}:any) { 
  const [posts,setPosts]=useState<Array<Object>|null>([])
  return (
    <GlobalContext.Provider value={{posts,setPosts}}>{children}</GlobalContext.Provider>
  )
}

export default Context