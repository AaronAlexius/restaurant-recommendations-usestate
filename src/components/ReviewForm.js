import React, { useState } from "react"

const ReviewForm = props => {
  const [currentReview, setCurrentReview] = useState({
    name: "",
    rating: "",
    content: ""
  })

  const handleInputChange = event => {
    setCurrentReview({
      ...currentReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  } 

  console.log("name:" [currentReview.name])

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input 
            type="text"
            id="name"
            name="name"
            value={currentReview.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="rating">
          Rating 1 - 5: 
          <br />
          <input 
            type="select"
            id="rating"
            name="rating"
            value={currentReview.rating}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="content">
          Your Review Here:
          <input 
            type="text"
            id="content"
            name="content"
            value={currentReview.content}
            onChange={handleInputChange}         
          />
        </label>
      </form>
    </div>
  )
}

export default ReviewForm