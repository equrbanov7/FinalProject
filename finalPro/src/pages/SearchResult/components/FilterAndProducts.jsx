import FilterSide from "./FilterSide"
import FilteredProducts from "./FilteredProducts"
import "./filterAndProducts.scss"

const FilterAndProducts = () => {
  const dataFilter = [
    {
      title: "Best Filter",
      elements: [
        { name: "4 stars or upper", star: true },
        { name: "Same-day delivery", star: false },
        { name: "COD", star: false },
        { name: "Discount", star: false },
      ],
      show: null,
    },
    {
      title: "Location",
      elements: [
        { name: "Bandung", star: false },
        { name: "Medan", star: false },
        { name: "Surabaya", star: false },
        { name: "Jogja", star: false },
      ],
      show: "Show All",
    },
    {
      title: "Category",
      elements: [
        { name: "Electronic", star: false },
        { name: "Fashion", star: false },
        { name: "Action Figure", star: false },
        { name: "Book", star: false },
        { name: "Gaming", star: false },
      ],
      show: "Show All Categories Al",
    },
  ];
  return (
    <div className="mergeBoth">
        <FilterSide dataFilter={dataFilter} priceActivate={true} title={"Filter Option"} />
        <FilteredProducts />
    </div>
  )
}

export default FilterAndProducts