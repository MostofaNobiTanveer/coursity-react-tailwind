import { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("./courses.JSON");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <AppContext.Provider value={{ courses }}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
