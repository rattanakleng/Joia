import React, { useEffect, useState } from 'react'
import ArtItemForUser from '../components/ArtItemForUser/ArtItemForUser'
import api from '../utils/api'
import { useAuthenticatedUser } from '../utils/auth'

export default function AllArtworksByUser() {
  const [allArtByUser, setAllArtByUser] = useState<any[]>([])

  const user = useAuthenticatedUser()

  useEffect(() => {
    const asyncBody = async () => {
      let allArt: any = await api.getAllArtByUser(user._id)
      setAllArtByUser(allArt.data)
    }

    asyncBody().then(() => console.log('done getting user art'))
  }, [])

  return (
    <div className="bg-light">
      <div className="container py-5">
        <h2 className="text-center my-5">Artworks by <span>{user.name} </span></h2>
        <ul>
          {allArtByUser.map((anArt, i) => (
            <ArtItemForUser
              showcontactinfo={false}
              userid={''}
              name={anArt.name}
              imagePath={anArt.imagePath}
              description={anArt.description}
              category={anArt.category}
              size={anArt.size}
              price={anArt.price}
            ></ArtItemForUser>
          ))}
        </ul>
      </div>
    </div>
  )
}
