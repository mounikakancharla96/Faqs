import {Component} from 'react'
import './index.css'

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswerItem = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="hr" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleButton = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImageButton = () => {
    const {isActive} = this.state
    const buttonUrl = isActive ? minusImage : plusImage
    const buttonAltText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleButton}>
        <img src={buttonUrl} alt={buttonAltText} className="image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="each-question-item">
        <div className="main-container">
          <div className="question-container">
            <h1 className="question">{questionText}</h1>
            {this.renderActiveImageButton()}
          </div>
          {this.renderAnswerItem()}
        </div>
      </li>
    )
  }
}

export default FaqItem
