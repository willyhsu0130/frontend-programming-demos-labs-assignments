import { createContext, useState, useContext, useMemo } from "react";

const CounterContext = createContext();

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const contextValue = useMemo(() => {
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    return { count, increment, decrement };
  }, [count]);

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};