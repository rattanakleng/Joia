import React, { useEffect, useState } from 'react'
import { Input, FormBtn, FormBtnOutline } from '../Form/Form'
import { Container, Col } from '../../LayoutComponents/Grid/Grid'
import ArtItemForAllArtworks from '../ArtItemForAllArtworks/ArtItemForAllArtworks'
import api from '../../utils/api'

// // Handles updating component state when the user types into the input field
// function handleInputChange() {
//   // const { name, value } = event.target;
//   // setFormObject({...formObject, [name]: value})
// }

// function handleFormSubmit() {
//   // submit form
// }

// function handleFormClear() {
//   // clear form function
// }

const HomePageMain = () => {
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
    <>
      {/* Future Development create search artworks by artist name or city name */
      /* <div className="m-0 bg-light pt-5">
        <h2 className="text-center">Location</h2>
        <div className="row d-flex flex-wrap justify-content-center">
          <Col size="md-6 sm-12">
            <form>
              <Input
                onChange={handleInputChange}
                name="State Name"
                placeholder="State Name"
              />

              <p className="font-weight-bold">Search by artist</p>
              <Input
                onChange={handleInputChange}
                name="Artist Name"
                placeholder="Artist Name"
              />

              <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>

              <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
            </form>
          </Col>
        </div>
      </div> */}

      <Container>
        <div className="container pt-5 mt-0">
          <h1 className="text-center mb-5">Artworks by Your Local Artits</h1>

          {allArt.map((anArt) => (
            <div className="container">
              <ArtItemForAllArtworks
                showcontactinfo={true}
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
      </Container>
    </>
  )
}

export default HomePageMain
