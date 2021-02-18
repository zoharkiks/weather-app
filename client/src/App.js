import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

const App = () => {
  const [form, setForm] = useState({
    location: "",
  });

  const [weather, setWeather] = useState({});

  return (
    <div>
      <Navbar
        form={form}
        setForm={setForm}
        weather={weather}
        setWeather={setWeather}
      />
      <Card
        form={form}
        setForm={setForm}
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  );
};

export default App;
