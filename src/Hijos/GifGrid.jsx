import React, { useState, useEffect } from "react"
import { GifItem } from "../components/GifItem"
import GetGifs from "../hooks/GetGifs"

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([])

  const fetchGifs = async () => {
    try {
      const gifsData = await GetGifs({ category });
      console.log(gifsData)
      setGifs(gifsData)
    } catch (error) {
      console.error("Error:", error)
    }
  };

  useEffect(() => {
    fetchGifs()
  }, [category])

  return (
    <>
      <h3>{category}</h3>
      <p>Gif</p>
      {gifs.map((gif) => (
        <GifItem key={gif.id} title={gif.title} url={gif.url} />
      ))}
    </>
  )
}
