import "./WindSpeedDirection.css";

const WindSpeedDirection = () => {
  return (
    <div className="wind-speeddirection">
      <div className="wind-speed">WIND SPEED</div>
      <div className="wind-direction">WIND DIRECTION</div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <div className="home">Home</div>
          </div>
          <div className="cash-parent">
            <div className="dashboard-icon" />
            <div className="ambient-temperature">Ambient Temperature</div>
          </div>
          <div className="cash-parent">
            <img className="cash-icon" alt="" src="/cash.svg" />
            <div className="ambient-temperature">Surface Temperature</div>
          </div>
          <div className="cash-parent">
            <img className="dashboard-icon" alt="" src="/cash1.svg" />
            <div className="ambient-temperature">Relative Humidity</div>
          </div>
          <div className="dashboard-parent">
            <img className="dashboard-icon" alt="" src="/cash2.svg" />
            <div className="ambient-temperature">Wind Speed/Direction</div>
          </div>
          <div className="cash-parent">
            <img className="dashboard-icon" alt="" src="/cash3.svg" />
            <div className="ambient-temperature">Solar Irradiance</div>
          </div>
          <div className="cash-parent">
            <div className="dashboard-icon" />
            <div className="rainfall">Rainfall</div>
          </div>
          <div className="cash-parent3">
            <div className="dashboard-icon" />
            <div className="pollution-parameters">Pollution Parameters</div>
          </div>
          <div className="cash-wrapper">
            <img className="dashboard-icon" alt="" src="/cash4.svg" />
          </div>
          <div />
          <div />
          <div className="cash-frame">
            <div className="dashboard-icon" />
          </div>
        </div>
        <div className="logout-wrapper">
          <img className="dashboard-icon" alt="" src="/logout.svg" />
        </div>
        <div className="rectangle-wrapper">
          <div className="frame-child" />
        </div>
        <img
          className="cloudy-climes-high-resolution-icon"
          alt=""
          src="/cloudyclimeshighresolutionlogoblacktransparent-1@2x.png"
        />
        <div className="cash-wrapper1">
          <div className="dashboard-icon" />
        </div>
      </div>
      <img
        className="thermostat-black-24dp-2-icon"
        alt=""
        src="/thermostat-black-24dp-2.svg"
      />
      <img
        className="cloudy-snowing-black-24dp-2-icon"
        alt=""
        src="/cloudy-snowing-black-24dp-2.svg"
      />
      <img
        className="location-city-black-24dp-2-icon"
        alt=""
        src="/location-city-black-24dp-2.svg"
      />
      <div className="rose-bg" />
      <img className="dir-line-icon" alt="" src="/16dirline.svg" />
      <img className="dir-range-icon" alt="" src="/16dirrange.svg" />
      <img className="we-line-icon" alt="" src="/we-line.svg" />
      <img className="ns-line-icon" alt="" src="/ns-line.svg" />
      <div className="rose-boder" />
      <div className="logo-group">
        <div className="bg" />
        <img className="logo-icon" alt="" src="/logo@2x.png" />
      </div>
      <div className="text">
        <div className="nw">
          <p className="p">315°</p>
          <p className="nw1">
            <b>NW</b>
          </p>
        </div>
        <div className="nnw">
          <p className="p">337.5°</p>
          <p className="nw1">
            <b>NNW</b>
          </p>
        </div>
        <div className="wnw">
          <p className="p">292.5°</p>
          <p className="nw1">
            <b>WNW</b>
          </p>
        </div>
        <div className="div">0°</div>
        <div className="div1">180°</div>
        <div className="div2">90°</div>
        <div className="div3">270°</div>
        <div className="nne">
          <p className="p">22.5°</p>
          <p className="nw1">
            <b>NNE</b>
          </p>
        </div>
        <div className="ene">
          <p className="p">67.5°</p>
          <p className="nw1">
            <b>ENE</b>
          </p>
        </div>
        <div className="ese">
          <p className="p">112.5°</p>
          <p className="nw1">
            <b>ESE</b>
          </p>
        </div>
        <div className="sse">
          <p className="p">157.5°</p>
          <p className="nw1">
            <b>SSE</b>
          </p>
        </div>
        <div className="ssw">
          <p className="p">202.5°</p>
          <p className="nw1">
            <b>SSW</b>
          </p>
        </div>
        <div className="wsw">
          <p className="p">247.5°</p>
          <p className="nw1">
            <b>WSW</b>
          </p>
        </div>
        <div className="se">
          <p className="p">135°</p>
          <p className="nw1">
            <b>SE</b>
          </p>
        </div>
        <div className="ne">
          <p className="p">45°</p>
          <p className="nw1">
            <b>NE</b>
          </p>
        </div>
        <div className="sw">
          <p className="p">225°</p>
          <p className="nw1">
            <b>SW</b>
          </p>
        </div>
      </div>
      <div className="n">
        <div className="n1">N</div>
      </div>
      <div className="w">
        <div className="w1">W</div>
      </div>
      <div className="s">
        <div className="n1">S</div>
      </div>
      <div className="e">
        <div className="n1">E</div>
      </div>
      <img className="we-pointer-icon" alt="" src="/we-pointer.svg" />
      <img className="ns-pointer-icon" alt="" src="/ns-pointer.svg" />
    </div>
  );
};

export default WindSpeedDirection;
