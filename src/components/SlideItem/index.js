import './index.css'

const SlideItem = props => {
  const {eachItem, serialNumber, changeSlide} = props
  const {id, heading, description} = eachItem

  const onClickSlideItem = () => {
    changeSlide(id)
  }

  return (
    <li className="slide-item" onClick={onClickSlideItem}>
      <p>{serialNumber}</p>
      <div className="slide-item-container">
        <h4 className="heading">{heading}</h4>
        <h4 className="description">{description}</h4>
      </div>
    </li>
  )
}

export default SlideItem
