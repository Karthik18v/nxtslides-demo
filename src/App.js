import {Component} from 'react'

import Header from './components/Header/index'
import SlideItem from './components/SlideItem/index'
import CurrentSlide from './components/CurrentSlide/index'
// import NewItem from './components/NewItem/index'
// import SlidesContext from './context/SlidesContext'

import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]
console.log(initialSlidesList)

// Replace your code here

class App extends Component {
  state = {
    slideList: initialSlidesList,
    currentSlide: initialSlidesList[0],
    headingActive: true,
    descriptionActive: true,
  }

  changeSlide = slideId => {
    const {slideList} = this.state
    const newCurrentSlide = slideList.filter(
      eachItem => eachItem.id === slideId,
    )
    this.setState({currentSlide: newCurrentSlide[0]})
  }

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onEditingHeading = (slideId, editingValue) => {
    const {slideList} = this.state
    const newList = slideList.filter(eachItem => eachItem.id === slideId)
    newList[0].heading = editingValue
    console.log(newList)
    this.setState({slideList})
  }

  render() {
    const {slideList, currentSlide} = this.state

    return (
      <div>
        <Header />
        <div className="main-container">
          <div className="slides-container">
            {slideList.map((eachItem, index) => (
              <SlideItem
                serialNumber={index + 1}
                key={eachItem.id}
                eachItem={eachItem}
                changeSlide={this.changeSlide}
              />
            ))}
          </div>
          <CurrentSlide
            currentSlide={currentSlide}
            onEditingHeading={this.onEditingHeading}
          />
        </div>
      </div>
    )
  }
}

export default App
