import { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import Card from "./Card";

function App() {
  const dataObj = [
    {
      id: 1,
      title: "Get food",
      day: "Monday",
      time: "09:30",
      color: "#4e4e4e",
    },
    {
      id: 2,
      title: "Go shopping",
      day: "Sunday",
      time: "12:30",
      color: "#4e4e4e",
    },
    {
      id: 3,
      title: "Fill the car",
      day: "Wednessday",
      time: "01:00",
      color: "#4e4e4e",
    },
  ];
  const [data, setData] = useState(dataObj);

  function getDataFromInput(test) {
    setData((prevState) => {
      return [test, ...prevState];
    });
  }

  return (
    <div className="App">
      <InputForm func={getDataFromInput} />
      <div className="wrapper">
        {data.map((element) => {
          return <Card key={element.id} cardData={element} />;
        })}
      </div>
    </div>
  );
}

export default App;
