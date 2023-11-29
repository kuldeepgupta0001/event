// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventForm from "./compo/EventForm.jsx";
import EventList from "./compo/EventList.jsx";
import Header from "./compo/Header.jsx";

import "./styles/header.scss";
import "./styles/eventForm.scss";
import "./styles/eventList.scss";
import "./styles/eventItem.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<EventForm />} />
          <Route path="/eventList" element={<EventList />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
};

export default App;
