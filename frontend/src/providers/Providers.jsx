import React from "react";
import { WorkoutContextProvider } from "../context/WorkoutsContext";
import { CategoryContextProvider } from "../context/CategoryContext";
import { AuthContextProvider } from "../context/authContext";
const Providers = ({ children }) => {
  return (
    <AuthContextProvider>
      <CategoryContextProvider>
        <WorkoutContextProvider>{children}</WorkoutContextProvider>
      </CategoryContextProvider>
    </AuthContextProvider>
  );
};

export default Providers;
