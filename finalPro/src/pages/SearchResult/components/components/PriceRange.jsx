import "./priceRange.scss"

// eslint-disable-next-line react/prop-types
const PriceRange = ({start,stop}) => {
  return (
    <div className="priceRanges">
        {`$${start} - $${stop}`}
    </div>
  )
}

export default PriceRange