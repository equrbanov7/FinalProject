import styles from "./button.module.scss"

// eslint-disable-next-line react/prop-types
const Button = ({btnData}) => {
   // console.log(btnData.btnData)
  return (
        <button  className={styles.btn} >{btnData}  </button>
  )
}

export default Button