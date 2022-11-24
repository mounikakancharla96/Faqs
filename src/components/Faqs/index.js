import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-main-container">
        <h1 className="faqs-heading">FAQs</h1>
        <ul className="question-answers-list">
          {faqsList.map(eachFaqDetails => (
            <FaqItem key={eachFaqDetails.id} faqDetails={eachFaqDetails} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
