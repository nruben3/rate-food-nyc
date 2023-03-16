import "server-only"
import { connect } from "mongoose"
import Place, { IPlace } from "@/lib/models/place"
import NewPlaceForm from "./components/form"

async function getPlaces() {
  await connect(process.env.MONGODB_URI || "")
  return JSON.stringify(await Place.find())
}

export default async function Home() {
  const response = await getPlaces()
  const places: IPlace[] = JSON.parse(response)

  return (
    <>
      <h1>Home</h1>
      <NewPlaceForm />
      <ul>
        {places.map((place, index) => (
          <li key={index}>{JSON.stringify(place)}</li>
        ))}
      </ul>
    </>
  )
}
