import React, { createContext, useContext, useState } from 'react';

const EcommerceContext = createContext();

export const EcommerceInformationProvider = ({ children }) => {
    const [product,setProducts] = useState([])
    const [error, setError] = useState(false)

    return (
        <EcommerceContext.Provider value={{
            product,setProducts,
            error, setError
        }}>
            {children}
        </EcommerceContext.Provider>
    );
};

// Step 3: Create a custom hook to use the context
export const useEcommerceData = () => {
    const context = useContext(EcommerceContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
