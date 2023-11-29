import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext();

const AppWrapper = () => {
  const [events, setEvents] = useState([]);

  return (
    <Context.Provider
      value={{
        events,
        setEvents,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
