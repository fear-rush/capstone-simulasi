import React from "react";
import { useState } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { SensorData } from "./data/Data";

function App() {
  const [sensorDataA, setSensorDataA] = useState({
    labels: SensorData.map((data) => data.time),
    datasets: [
      {
        label: "Temperatur Tanaman",
        data: SensorData.map((data) => data.temperature),
        borderColor: "black",
        borderWidth: 1,
        fillStyle: "lightGreen",
      },
    ],
  });

  const [sensorDataB, setSensorDataB] = useState({
    labels: SensorData.map((data) => data.time),
    datasets: [
      {
        label: "Kelembapan Tanah",
        data: SensorData.map((data) => data.temperature),
        borderColor: "black",
        borderWidth: 1,
        fillStyle: "lightGreen",
      },
    ],
  });

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-4xl font-bold text-stone-800 mb-8">
            User Dashboard
          </h1>
        </div>
        <div className="w-96 flex justify-center">
          <LineChart chartData={sensorDataA} />
          <BarChart chartData={sensorDataB} />
        </div>
        <h1 className="my-8">
          Status Solenoid: <i><b>OFF</b></i>
        </h1>
        <div className="flex">
          <button class="btn btn-success mr-6">Hidupkan Solenoid</button>
          <button class="btn btn-error">Matikan Solenoid</button>
        </div>
      </div>
    </div>
  );
}

export default App;
