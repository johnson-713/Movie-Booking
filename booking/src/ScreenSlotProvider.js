import React, { createContext, useContext, useState } from 'react';

const ScreenSlotContext = createContext();

const ScreenSlotProvider = ({children}) => {
    const [activeButton, setActiveButton] = useState(null)
  return (
    <ScreenSlotContext.Provider value={{ activeButton, setActiveButton}}>
        {children}
    </ScreenSlotContext.Provider>
  )
}

const useScreenSlotContext = () => {
    return useContext(ScreenSlotContext)
}

export { ScreenSlotProvider, useScreenSlotContext};
