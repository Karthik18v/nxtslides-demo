import {useState} from 'react'

const CurrentSlide = props => {
  const {currentSlide, onEditingHeading} = props
  const {heading, description, id} = currentSlide
  console.log(currentSlide)

  const [headingActive, setHeadingActive] = useState(true)
  const [getHeading, setGetHeading] = useState(currentSlide.heading)
  const [getDescription, setGetDescription] = useState(currentSlide.description)

  console.log(getHeading)

  const onClickHeading = () => {
    setHeadingActive(false)
  }

  const onBlurHeading = () => {
    setHeadingActive(true)
  }

  const onChangeHeading = event => {
    setGetHeading(event.target.value)
    onEditingHeading(id, event.target.value)
  }

  const onClickDescription = () => {}
  return (
    <div className="current-slide-container">
      <div className="current-slide">
        {headingActive ? (
          <h1 onClick={onClickHeading}>{getHeading}</h1>
        ) : (
          <input
            value={getHeading}
            type="text"
            onBlur={onBlurHeading}
            onChange={onChangeHeading}
          />
        )}
        <h2 onClick={onClickDescription}>{getDescription}</h2>
      </div>
    </div>
  )
}

export default CurrentSlide
