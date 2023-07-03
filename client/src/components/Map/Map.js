import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';
import styles from './Map.module.css'
import { useState, useEffect } from 'react';

const Map = () => {
  
  const [position, setPosition] = useState([33.748, -84.387])
  const [ip, setIp] = useState('23.65.26.0')
  const [city, setCity] = useState('Atlanta')
  const [state, setState] = useState('Georgia')
  const [postalCode, setPostalCode] = useState('30354')
  const [timezone, setTimezone] = useState('-5:00')
  const [isp, setIsp] = useState('AT&T Service Inc')
  useEffect(() => {
    async function fetchData(){
        try{
          const url = "http://localhost:8080/geolocate?apiKey=" + process.env?.API_KEY
          const response = await fetch(url)
          const json = await response.json()
          if(json !== null){
            setPosition([json?.latitude, json?.longitude])
            setIp(json?.ip)
            setCity(json?.city)
            setState(json?.state)
            setPostalCode(json?.postalCode)
            setTimezone(json?.timezone)
            setIsp(json?.isp)
            console.log(json)
          }
        }catch(error){
          console.log('there was an error making API request!', error)
        }
    }
    // fetchData() //commenting out to save api requests
  }, [])

  return (
    <MapContainer center={position && position} zoom={13} scrollWheelZoom={false} id={styles.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position && position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map