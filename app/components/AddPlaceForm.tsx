"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import cuisines from "../../config/cuisines.json"
import boroughs from "../../config/boroughs.json"

interface Props {
  neighborhoods: string
}

export default function AddPlaceForm(props: Props) {
  const neighborhoods = JSON.parse(props.neighborhoods)

  const [name, setName] = useState("")
  const [borough, setBorough] = useState("Manhattan")
  const [neighborhood, setNeighborhood] = useState("Alphabet City")
  const [cuisine, setCuisine] = useState("Breakfast")
  const [rating, setRating] = useState("")
  const [price, setPrice] = useState("$")

  const [validNeighborhoods, setValidNeighborhoods] = useState(
    neighborhoods[borough]
  )

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
        borough,
        neighborhood,
        cuisine,
        rating,
        price,
      }),
    })

    console.log(await response.json())

    setName("")
    setBorough("Manhattan")
    setNeighborhood("Alphabet City")
    setCuisine("Breakfast")
    setRating("")
    setPrice("$")

    router.refresh()
  }

  return (
    // We pass the event to the handleSubmit() function on submit.
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-6 m-2"
    >
      <div className="block text-gray-700 text-xl font-bold mb-2">
        Add a New Restaurant
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="borough"
        >
          Borough
        </label>
        <div>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Borough"
            value={borough}
            onChange={(e) => {
              setBorough(e.target.value)
              setValidNeighborhoods(neighborhoods[e.target.value])
              setNeighborhood(neighborhoods[e.target.value][0])
            }}
          >
            {boroughs.map((borough, index) => (
              <option key={index} value={borough}>
                {borough}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="neighborhood"
        >
          Neighborhood
        </label>
        <div>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Neighborhood"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          >
            {validNeighborhoods.map((neighborhood: any, index: any) => (
              <option key={index} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cuisine"
        >
          Cuisine
        </label>
        <div>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            {cuisines.sort().map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Rating
        </label>
        <div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            step="0.1"
            placeholder="Rating"
            value={rating}
            required
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <div>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
            <option value="$$$$$">$$$$$</option>
          </select>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Place
      </button>
    </form>
  )
}
