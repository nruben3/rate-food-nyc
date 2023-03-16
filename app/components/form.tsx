'use client'

export default function NewPlaceForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        name: event.target.name.value,
        neighborhood: event.target.neighborhood.value,
        cuisine: event.target.cuisine.value,
        rating: event.target.rating.value,
        price: event.target.price.value
      }
  
      const JSONdata = JSON.stringify(data)
      const endpoint = '/api/places'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata
      }
  
      const response = await fetch(endpoint, options)
      const result = await response.text()
      alert(result)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
        </div>
        <label htmlFor="neighborhood">Neighborhood</label>
        <input type="text" id="neighborhood" name="neighborhood" required />
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" id="cuisine" name="cuisine" required />
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" required />
        <label htmlFor="rating">Rating</label>
        <input type="text" id="rating" name="rating" required />
        <button type="submit">Submit</button>
      </form>
    )
  }