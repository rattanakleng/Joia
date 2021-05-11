import './ArtItemForUser.css';

interface IArtItemProps {
  name: string
  description: string
  category: string
  size: string
  price: string | number
  location: string
  imagePath: string
}

const ArtItem = (props: IArtItemProps) => {
  const {
    name,
    description,
    category,
    size,
    price,
    location,
    imagePath,
  } = props

  return (
    <div className="card mb-3 border border-warning">
      <div className="row no-gutters">
        <div className="col-md-5">
          <img
            className="img-fluid bg-dark art-image"
            src={imagePath}
            alt="Artwork thumnail"
          />
        </div>
        <div className="col-md-7 border border-warning border-top-0 border-right-0 border-bottom-0">
          <div className="card-body">
            <h4 className="card-title text-uppercase">{name}</h4>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <span className="font-weight-bold mr-3">Category:</span>
              {category}
            </p>
            <p className="card-text">
              <span className="font-weight-bold mr-3">Size:</span>
              {size}
            </p>
            <p className="card-text">
              <span className="font-weight-bold mr-3">Price:</span>
              {price}
            </p>
            <p className="card-text">
              <span className="font-weight-bold mr-3">Location:</span>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtItem
