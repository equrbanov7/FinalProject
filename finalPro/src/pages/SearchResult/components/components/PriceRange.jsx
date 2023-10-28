import "./priceRange.scss"

// eslint-disable-next-line react/prop-types
const PriceRange = ({start,stop,handleClick}) => {


  return ( 
    <div className="priceRanges" onClick={handleClick}>
        {`$${start} - $${stop}`}
    </div>
  )
}

export default PriceRange