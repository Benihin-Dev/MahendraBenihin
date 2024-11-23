import React, { useEffect, useState } from "react";

export default function DataStore({
  data,
  setLineChartData,
  setConsoleMessageData,
}) {
  // function for set Temperature data for line graph
  function processTemperatureData(data, count) {
    // Helper function to calculate averages
    function calculateAverage(startIndex, step, array) {
      let sum = 0;
      for (let i = 0; i < step; i++) {
        const value = parseFloat(array[startIndex + i]?.field1) || 0; // Treat null/undefined as 0
        sum += value;
      }
      return sum / step;
    }

    let result = [];
    if (count === 20) {
      const first20 = data.slice(0, count);
      result = first20.map((item, index) => ({
        time: (index + 1) * 0.5 + "", // Time (0.5, 1.0, ...)
        value: parseFloat(item.field1) || 0, // Treat null/undefined as 0
      }));
    } else if (count === 40) {
      for (let i = 0; i < count; i += 2) {
        const avg = calculateAverage(i, 2, data); // Average of every 2 items
        result.push({
          time: (i / 2 + 1) * 0.5 * 2 + "", // Time (1.0, 1.5, ...)
          value: avg.toFixed(2),
        });
      }
    } else if (count === 80) {
      for (let i = 0; i < count; i += 4) {
        const avg = calculateAverage(i, 4, data); // Average of every 4 items
        result.push({
          time: (i / 4 + 1) * 2 + "", // Time (2, 4, 6, ...)
          value: avg.toFixed(2),
        });
      }
    } else if (count === 120) {
      for (let i = 0; i < count; i += 6) {
        const avg = calculateAverage(i, 6, data); // Average of every 6 items
        result.push({
          time: (i / 6 + 1) * 3 + "", // Time (3, 6, 9, ...)
          value: avg.toFixed(2),
        });
      }
    }
    return result;
  }

  // function for set Vibration data for line graph
  function processVibrationData(data, count) {
    // Helper function to calculate field averages
    function calculateFieldAverages(startIndex, step, array, field) {
      let sum = 0;
      for (let i = 0; i < step; i++) {
        const value = parseFloat(array[startIndex + i]?.[field]) || 0; // Default to 0 for null/undefined
        sum += value;
      }
      return sum / step;
    }

    let result = [];
    const timeMultiplier =
      count === 20 ? 0.5 : count === 40 ? 1 : count === 80 ? 2 : 3;

    if (count === 20) {
      const first20 = data.slice(0, count);
      result = first20.map((item, index) => ({
        time: (index + 1) * timeMultiplier + "", // Time calculation
        value: (parseFloat(item.field5) || 0).toFixed(0), // Field5 average
        value2: (parseFloat(item.field6) || 0).toFixed(0), // Field6 average
        value3: (parseFloat(item.field7) || 0).toFixed(0), // Field7 average
      }));
    } else {
      const step = count === 40 ? 2 : count === 80 ? 4 : 6; // Step size for averaging
      for (let i = 0; i < count; i += step) {
        const avgField5 = calculateFieldAverages(i, step, data, "field5");
        const avgField6 = calculateFieldAverages(i, step, data, "field6");
        const avgField7 = calculateFieldAverages(i, step, data, "field7");

        result.push({
          time: ((i / step + 1) * timeMultiplier).toFixed(0) + "", // Time calculation
          value: avgField5.toFixed(0), // Field5 average
          value2: avgField6.toFixed(0), // Field6 average
          value3: avgField7.toFixed(0), // Field7 average
        });
      }
    }

    return result;
  }

  // function for set Message data for console
  function processConsole1Data(data) {
    // Map the extracted items into the desired format
    const result = data.map((item, index) => item.field6); // Get field1 value

    return result;
  }

  useEffect(() => {
    const setData = async () => {
      try {
        setLineChartData([
          {
            attribute: "Temperature",
            data: [
              {
                time: "live",
                reading: processTemperatureData(data, 20).reverse(),
              },
              {
                time: "20m",
                reading: processTemperatureData(data, 40).reverse(),
              },
              {
                time: "40m",
                reading: processTemperatureData(data, 80).reverse(),
              },
              {
                time: "60m",
                reading: processTemperatureData(data, 120).reverse(),
              },
            ],
          },
          {
            attribute: "Vibration",
            data: [
              {
                time: "live",
                reading: processVibrationData(data, 20).reverse(),
              },
              {
                time: "1T",
                reading: processVibrationData(data, 40).reverse(),
              },
              {
                time: "2T",
                reading: processVibrationData(data, 80).reverse(),
              },
              {
                time: "3T",
                reading: processVibrationData(data, 120).reverse(),
              },
            ],
          },
        ]);
        setConsoleMessageData(processConsole1Data(data));
      } catch (err) {
        console.log(err);
      }
    };

    // Initial fetch
    setData();
  }, [data]);

  function updateThingSpeak() {
    const apiKey = "2NIFAKSSUOAXW36K";

    // Generate random values within the specified ranges
    const field1 = Math.floor(Math.random() * 91); // 0-90
    const field2 = Math.floor(Math.random() * 16); // 0-15
    const field3 = Math.floor(Math.random() * 16); // 0-15
    const field4 = Math.floor(Math.random() * 10000); // 0-9999
    const field5 = Math.floor(Math.random() * 11); // 0-10
    const field6 = Math.floor(Math.random() * 11); // 0-10
    const field7 = Math.floor(Math.random() * 11); // 0-10
    const field8 = Math.floor(Math.random() * 91); // 0-90

    // Construct the URL
    const url = `https://api.thingspeak.com/update?api_key=${apiKey}&field1=${field1}&field2=${field2}&field3=${field3}&field4=${field4}&field5=${field5}&field6=${field6}&field7=${field7}&field8=${field8}`;

    // Send the request
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(`Update successful: ${data}`))
      .catch((error) => console.error("Error updating ThingSpeak:", error));
  }

  // Call the function every 30 seconds
  setInterval(updateThingSpeak, 5000);

  return (
    <div
      // className=" h-20 bg-white w-full"
      onClick={() => {
        console.log();
      }}
    ></div>
  );
}
