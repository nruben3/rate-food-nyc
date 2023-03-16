"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function NewPlaceForm() {
  const [name, setName] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [rating, setRating] = useState(0)
  const [price, setPrice] = useState("")

  const router = useRouter()
  // Handles the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        neighborhood,
        cuisine,
        rating,
        price,
      }),
    })

    console.log(await response.json())

    setName("")
    setNeighborhood("")
    setCuisine("")
    setRating(0)
    setPrice("")

    router.refresh()
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <h3>Add a new place</h3>
      <div>
        <label htmlFor="name">Name</label>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="neighborhood">Neighborhood</label>
        <div>
          <input
            type="text"
            placeholder="Neighborhood"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cuisine">Cuisine</label>
        <div>
          <input
            type="text"
            placeholder="Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <div>
          <input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.valueAsNumber)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <div>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Add Place</button>
    </form>
  )
}
