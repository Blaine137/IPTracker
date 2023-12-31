import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import Map from '@/components/Map/index'
import Header from '@/components/Header/Header'

export default function Home() {

  const [position, setPosition] = useState([33.748, -84.387])
  const [ip, setIp] = useState('23.65.26.0')
  const [city, setCity] = useState('Atlanta')
  const [state, setState] = useState('Georgia')
  const [postalCode, setPostalCode] = useState('30354')
  const [timezone, setTimezone] = useState('UTC-5:00')
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

  const location = city && state ? city + ', ' + state : null 

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className={styles.wrapper}>
          <Header
            ip={ip}
            location={location}
            timezone={timezone}
            isp={isp}
          />
          <Map 
            position={position}
          />
        </div>
      </main>
    </>
  )
}
