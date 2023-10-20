import React, { useState, useEffect } from "react";

import Worker from "worker-loader!../Worker";

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const workerInstance = new Worker();

    workerInstance.onmessage = function (e) {
      setRandomNumber(e.data);
    };

    console.log("Starting...");
    workerInstance.postMessage({ delay: 2000, max: 100 });

    return () => {
      workerInstance.terminate();
    };
  }, []);

  console.log("Random Number", randomNumber);

  return (
    <div>
      {randomNumber !== null ? (
        <p>Random number after 2 seconds: {randomNumber}</p>
      ) : (
        <p>Generating random number...</p>
      )}
    </div>
  );
}

export default RandomNumber;
