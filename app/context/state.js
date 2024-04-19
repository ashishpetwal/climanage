'use client'

const { createContext, useContext, useState } = require("react")

const StateContext = createContext({})

export const StateContextProvider = ({ children }) => {
    const [navBar, setNavBar] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

    const handleModeToggle = () => {
        setIsDark(!isDark);
    };

    const toggleNavBar = () => {
        if (navBar === true) {
            setNavBar(false);
            document.body.style.overflow = "unset";
        } else {
            setNavBar(true);
            document.body.style.overflow = "hidden";
        }
    };

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <StateContext.Provider value={{ navBar,setNavBar, setCurrentItem, isCollapsed, isDark, currentItem, handleModeToggle, toggleNavBar, handleCollapse }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);