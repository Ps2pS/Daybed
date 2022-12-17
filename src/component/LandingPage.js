import React from 'react'
import HomeListing from './homeListing/HomeListing'
import HomePage from './homePage/HomePage'
import { getHomePageData } from "../Utils"
import { useState } from 'react'
import { useEffect } from 'react'
import { base_url } from '../constant'
import Login from './common/Login'
import Signup from './common/Signup'
export default function LandingPage() {

  const [homePageData, sathomePageData] = useState([])
  const getDashboard = async () => {
    let getData = await getHomePageData(`${base_url}dashboard`)
    sathomePageData(getData)
  }

  useEffect(() => {
    getDashboard()
  }, [])
  console.log('iiiiiiiiiiii', homePageData);

  return (
    <>
      {
        // <HomeListing/>
        // <HomePage homePageData={homePageData.data} />
        // <Login/>
      }
      <Signup/>
    </>
  )
}
