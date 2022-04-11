import React, { useState } from "react"
import Restaurant from "./Restaurant"
import reviewData from "../constants/reviews"
import ReviewList from "./ReviewList"

const App = props => {
  const [reviews, setReviews] = useState(reviewData)
// Testing part 2 on git!
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
