'use client';
import React from 'react'
import axios from 'axios'

const useData = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const fetchData = async () => {
    try {
      const result = await axios.get('https://api.artic.edu/api/v1/artworks')
      if (result.status === 200) {
        setData(result.data)
      }
    } catch (e) {
      alert('error!')
    }
  }

  return {
    fetchData,
    data,
    loading
  }
}

export const Home = () => {
  const {
    fetchData,
    data,
    loading
  } = useData()
  return (
    <div className="text-black flex flex-col items-center justify-center h-screen overflow-scroll">
        henlo
    </div>
  )
}

export default Home
