/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const SelectionofProduct = ({dataType}) => {
  return (
    <div>
         <div className="selectOfProduct">
          <h6>{dataType?.title}</h6>
          <form>
            <select className="select">
             
              {dataType?.elements.map((element, index) => (
                <option key={index} value={element.toLowerCase()}>
                  {element}
                </option>
              ))}
            </select>
          </form>
        </div>
    </div>
  )
}

export default SelectionofProduct