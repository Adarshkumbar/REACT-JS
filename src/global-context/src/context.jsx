import { createContext, useContext, useState } from "react";

// Context is basically used to send props down the stream i.e in nested components
const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) =>{
    const [name, setName] = useState('Nothing')

    // xyz.Provider means which sends data/props 
    return <GlobalContext.Provider value={{name,setName}}>
           {children}
    </GlobalContext.Provider>
}

export default AppContext