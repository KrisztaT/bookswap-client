import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

 /* The useEffect is used to read the user data from the local storage and update the state of the
 AuthContext if a user is found. */
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
      dispatch({type: 'LOGIN', payload: user})
    }
  }, [])


  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
