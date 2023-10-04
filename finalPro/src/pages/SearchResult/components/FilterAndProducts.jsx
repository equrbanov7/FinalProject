import FilterSide from "./FilterSide"
import FilteredProducts from "./FilteredProducts"
import "./filterAndProducts.scss"

const FilterAndProducts = () => {
  return (
    <div className="mergeBoth">
        <FilterSide />
        <FilteredProducts />
    </div>
  )
}

export default FilterAndProducts