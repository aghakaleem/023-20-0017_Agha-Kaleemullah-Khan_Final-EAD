import React, { createContext, useContext, useState } from 'react';

const MyInformationContext = createContext();

export const MyInformationProvider = ({ children }) => {
    const [myInfo, setMyInfo] = useState({
        name: 'Fahad',
        experience: '4+ Years of Experience',
        projectsCount: 100
    })
    const [projectsInformation, setProjectsInformation] = useState([])
    const [reviews, setReviews] = useState([])

    // states
    return (
        <MyInformationContext.Provider value={{
            myInfo, setMyInfo,
            projectsInformation, setProjectsInformation,
            reviews, setReviews
        }}>
            {children}
        </MyInformationContext.Provider>
    );
};

// Step 3: Create a custom hook to use the context
export const useMyInformation = () => {
    const context = useContext(MyInformationContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
