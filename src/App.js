import './App.css';
import { useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl';

function App() {
  const [random, setRandom] = useState(Math.random());

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [37.61192, 55.76199],
      zoom: 10
    })
    return () => { }
  }, [])

  mapboxgl.accessToken = "pk.eyJ1IjoiYm9vYW5kcmV3IiwiYSI6ImNrd3M2ZGF1YzBhcDEyb21obzUwcDlvNXMifQ.q0NAPJB4RMgRRI8Fi9PWZg";

  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

export default App;
