"use client"

import { createContext, useState} from "react";

export const HoverContext = createContext<any>(null);

export const HoverProvider = ({children} : any) => {
    const [hovered, setHovered] = useState(false);

    return (
        <HoverContext.Provider value={{hovered, setHovered}}>
            {children}
        </HoverContext.Provider>
    )
}