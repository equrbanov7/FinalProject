import "./button.scss"

// eslint-disable-next-line react/prop-types
const Button = ({btnData}) => {
   // console.log(btnData.btnData)
  return (
        <button  className="btn" id="myButton" >{btnData}  </button>
  )
}

export default Button