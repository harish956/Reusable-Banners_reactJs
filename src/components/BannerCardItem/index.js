// Write your code here.
import './index.css'

const Banner = props => {
  const {eachItem} = props
  const {headerText, description, className} = eachItem
  return (
    <li className={className}>
      <h1 className="head">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="btn" type="button">
        Show More
      </button>
    </li>
  )
}
export default Banner
