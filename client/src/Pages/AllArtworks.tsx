import React, { useEffect, useState } from 'react'
import ArtItemForAllArtworks from '../components/ArtItemForAllArtworks/ArtItemForAllArtworks'
import api from '../utils/api'

export default function AllArtworks() {
  const [allArt, setAllArt] = useState([])

  useEffect(() => {
    const asyncBody = async () => {
      let allArt = await api.getAllArt()
      setAllArt(allArt.data)
      console.log(allArt)
    }

    asyncBody().then(() => console.log('done getting all art'))
  }, [])

  return (
    <div className="wrapper">
      <h1 className="text-center my-5">
        All art posted to this site
      </h1>

      {allArt.map((anArt) => (
        <div className="container">
          <ArtItemForAllArtworks
            showcontactinfo = {true}
            userid={anArt.user}
            name={anArt.name}
            description={anArt.description}
            category={anArt.category}
            size={anArt.size}
            price={anArt.price}
            imagePath={anArt.imagePath}
          />
        </div>
      ))}
    </div>
  )
}