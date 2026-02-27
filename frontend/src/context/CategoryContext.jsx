import { createContext, useReducer } from "react";

export const CategoryContext = createContext();

const categoryReducer = (state, action) => {
    switch (action.type){
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }

        case 'CREATE_CATEGORY':
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            }
        default:
            return state;
    }
}

export const CategoryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(categoryReducer,{
        categories: [],
    })
    return (
        <CategoryContext.Provider value={{...state, dispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}