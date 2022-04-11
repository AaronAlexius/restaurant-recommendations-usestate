import React from 'react'
import Review from "./Review"

const ReviewList = (props) => {
  const { reviews, setReviews } = props
  const reviewsComponents = reviews.map((reviewObject) => {
    return (
      <Review 
        key={reviewObject.id}
        reviewData={reviewObject}
      />
    )
  }) 


  return(
    <div>
      {reviewsComponents}
    </div>
  )
}

export default ReviewList
