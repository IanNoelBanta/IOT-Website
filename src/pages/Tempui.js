import { useEffect, useState } from "react";
import { FetchData } from "../utils/FetchData"; // Import your FetchData function

const temperature = () => {
  // Assuming your path in the database is "/windDirection" - replace with your actual path
  const windDirectionData = FetchData("/windDirection");
  const [windDirection, setWindDirection] = useState(null);

  useEffect(() => {
    // Assuming your data structure has a key called "value"
    if (windDirectionData.length > 0 && windDirectionData[0].hasOwnProperty("mema")) {
      setWindDirection(windDirectionData[0].value);
    }
  }, [windDirectionData]);

  return (
    <div>
      <h4 class="card-heading">Wind Direction</h4>
      <div class="content">
        <img
          className="compsie-png"
          alt=""
          src="/compsie.png"
        />
        <div class="content-temp">
          {/* Display the real-time wind direction value */}
          <p class="value-index">{windDirection !== null ? windDirection : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};

export default temperature;