import React, { useState } from "react"
import Restaurant from "./Restaurant"
import reviewData from "../constants/reviews"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

const App = props => {
  const defaultState = {
    name: "",
    rating: "",
    content: ""
  }

  const [reviews, setReviews] = useState(reviewData)
  const [currentReview, setCurrentReview] = useState(defaultState)


  const handleInputChange = event => {
    setCurrentReview({
      ...currentReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  } 

  const handleOnSubmit = event => {
    event.preventDefault(),
    setReviews([
      ...reviews, 
      currentReview
    ])
    clearForm()
  }

  const clearForm = event => {
    setCurrentReview(defaultState)
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant />
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>
            <ReviewForm 
              currentReview={currentReview} 
              setCurrentReview={setCurrentReview} 
              handleInputChange={handleInputChange}
              handleOnSubmit={handleOnSubmit}
            />
          // future review form component here

          </div>

          <div className="cell">
            <h3>Reviews</h3>
            <ReviewList reviews={reviews} setReviews={setReviews}/>
            // future review list component here
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
