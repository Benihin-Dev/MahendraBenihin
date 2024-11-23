import React, { useState } from "react";
import HomePage from "../HomePage/HomePage";
import APICalling from "../MiniComponents/APICalling";
import DataStore from "../MiniComponents/DataStore";

export default function MainPage() {
  const [data, setData] = useState([]);
  const [dataForIndicators, setDataForIndicators] = useState([
    {
      attribute: "Voltage",
      value: 12,
      lowValue: 5,
      alertValue: 12,
      warningValue: 15,
      maxValue: 20,
    },
    {
      attribute: "Current",
      value: 8,
      lowValue: 0,
      alertValue: 8,
      warningValue: 10,
      maxValue: 20,
    },
    {
      attribute: "Vibration",
      value: 50,
      lowValue: 0,
      alertValue: 120,
      warningValue: 150,
      maxValue: 200,
    },
    {
      attribute: "Temperature",
      value: 85,
      lowValue: 0,
      alertValue: 85,
      warningValue: 90,
      maxValue: 120,
    },
  ]);
  const [kwh, setKwh] = useState(0);
  const [lineChartData, setLineChartData] = useState([
    {
      attribute: "Temperature",
      data: [
        {
          time: "live",
          reading: [
            { time: "A", value: 110 },
            { time: "B", value: 120 },
            { time: "C", value: 130 },
            { time: "I", value: 190 },
            { time: "J", value: 200 },
            { time: "E", value: 150 },
            { time: "K", value: 210 },
            { time: "L", value: 220 },
            { time: "D", value: 140 },
            { time: "F", value: 160 },
            { time: "G", value: 170 },
            { time: "H", value: 180 },
            { time: "M", value: 230 },
            { time: "N", value: 240 },
          ],
        },
        {
          time: "20m",
          reading: [
            { time: "A", value: 115 },
            { time: "B", value: 125 },
            { time: "D", value: 145 },
            { time: "M", value: 235 },
            { time: "H", value: 185 },
            { time: "I", value: 195 },
            { time: "J", value: 205 },
            { time: "N", value: 245 },
            { time: "E", value: 155 },
            { time: "F", value: 165 },
            { time: "G", value: 175 },
            { time: "C", value: 135 },
            { time: "K", value: 215 },
            { time: "L", value: 225 },
          ],
        },
        {
          time: "40m",
          reading: [
            { time: "A", value: 120 },
            { time: "H", value: 190 },
            { time: "I", value: 200 },
            { time: "J", value: 210 },
            { time: "K", value: 220 },
            { time: "L", value: 230 },
            { time: "B", value: 130 },
            { time: "C", value: 140 },
            { time: "D", value: 150 },
            { time: "E", value: 160 },
            { time: "F", value: 170 },
            { time: "G", value: 180 },
            { time: "M", value: 240 },
            { time: "N", value: 250 },
          ],
        },
        {
          time: "60m",
          reading: [
            { time: "D", value: 155 },
            { time: "E", value: 165 },
            { time: "F", value: 175 },
            { time: "G", value: 185 },
            { time: "H", value: 195 },
            { time: "I", value: 205 },
            { time: "J", value: 215 },
            { time: "K", value: 225 },
            { time: "A", value: 125 },
            { time: "B", value: 135 },
            { time: "C", value: 145 },
            { time: "L", value: 235 },
            { time: "M", value: 245 },
            { time: "N", value: 255 },
          ],
        },
      ],
    },
    // {
    //   attribute: "Vibration",
    //   data: [
    //     {
    //       time: "live",
    //       reading: [
    //         { attribute: "A", value: 115, value2: 210, value3: 135 },
    //         { attribute: "B", value: 125, value2: 210, value3: 145 },
    //         { attribute: "D", value: 145, value2: 240, value3: 155 },
    //         { attribute: "M", value: 235, value2: 130, value3: 165 },
    //         { attribute: "H", value: 185, value2: 280, value3: 175 },
    //         { attribute: "I", value: 195, value2: 290, value3: 215 },
    //         { attribute: "J", value: 205, value2: 100, value3: 225 },
    //         { attribute: "N", value: 245, value2: 140, value3: 235 },
    //         { attribute: "E", value: 155, value2: 250, value3: 185 },
    //         { attribute: "F", value: 165, value2: 160, value3: 195 },
    //         { attribute: "G", value: 175, value2: 170, value3: 205 },
    //         { attribute: "C", value: 135, value2: 190, value3: 245 },
    //         { attribute: "K", value: 215, value2: 210, value3: 255 },
    //         { attribute: "L", value: 225, value2: 220, value3: 265 },
    //       ],
    //     },
    //     {
    //       time: "1T",
    //       reading: [
    //         { attribute: "A", value: 210, value2: 135, value3: 110 },
    //         { attribute: "B", value: 210, value2: 145, value3: 120 },
    //         { attribute: "C", value: 240, value2: 155, value3: 130 },
    //         { attribute: "I", value: 130, value2: 165, value3: 190 },
    //         { attribute: "J", value: 280, value2: 175, value3: 200 },
    //         { attribute: "E", value: 290, value2: 215, value3: 150 },
    //         { attribute: "K", value: 100, value2: 225, value3: 210 },
    //         { attribute: "L", value: 140, value2: 235, value3: 220 },
    //         { attribute: "D", value: 250, value2: 185, value3: 140 },
    //         { attribute: "F", value: 160, value2: 195, value3: 160 },
    //         { attribute: "G", value: 170, value2: 205, value3: 170 },
    //         { attribute: "H", value: 190, value2: 245, value3: 180 },
    //         { attribute: "M", value: 210, value2: 255, value3: 230 },
    //         { attribute: "N", value: 220, value2: 265, value3: 240 },
    //       ],
    //     },
    //     {
    //       time: "2T",
    //       reading: [
    //         { attribute: "A", value: 120, value2: 210, value2: 135 },
    //         { attribute: "H", value: 190, value2: 210, value2: 145 },
    //         { attribute: "I", value: 200, value2: 240, value2: 155 },
    //         { attribute: "J", value: 210, value2: 130, value2: 165 },
    //         { attribute: "K", value: 220, value2: 280, value2: 175 },
    //         { attribute: "L", value: 230, value2: 290, value2: 215 },
    //         { attribute: "B", value: 130, value2: 100, value2: 225 },
    //         { attribute: "C", value: 140, value2: 140, value2: 235 },
    //         { attribute: "D", value: 150, value2: 250, value2: 185 },
    //         { attribute: "E", value: 160, value2: 160, value2: 195 },
    //         { attribute: "F", value: 170, value2: 170, value2: 205 },
    //         { attribute: "G", value: 180, value2: 190, value2: 245 },
    //         { attribute: "M", value: 240, value2: 210, value2: 255 },
    //         { attribute: "N", value: 250, value2: 220, value2: 265 },
    //       ],
    //     },
    //     {
    //       time: "3T",
    //       reading: [
    //         { attribute: "A", value: 135 },
    //         { attribute: "B", value: 145 },
    //         { attribute: "C", value: 155 },
    //         { attribute: "D", value: 165 },
    //         { attribute: "E", value: 175 },
    //         { attribute: "I", value: 215 },
    //         { attribute: "J", value: 225 },
    //         { attribute: "K", value: 235 },
    //         { attribute: "F", value: 185 },
    //         { attribute: "G", value: 195 },
    //         { attribute: "H", value: 205 },
    //         { attribute: "L", value: 245 },
    //         { attribute: "M", value: 255 },
    //         { attribute: "N", value: 265 },
    //       ],
    //     },
    //   ],
    // },
  ]);
  return (
    <div>
      <APICalling
        setDataForIndicators={setDataForIndicators}
        setKwh={setKwh}
        data={data}
        setData={setData}
      />
      <HomePage
        dataForIndicators={dataForIndicators}
        kwh={kwh}
        lineChartData={lineChartData}
      />
      <DataStore
        data={data}
        setLineChartData={setLineChartData}
      />
    </div>
  );
}
