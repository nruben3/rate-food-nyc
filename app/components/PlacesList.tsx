import "server-only"
import { connect } from "mongoose"
import Place, { IPlace } from "@/lib/models/place"
import PlaceCard from "./PlaceCard"

async function getPlaces() {
  await connect(process.env.MONGODB_URI || "")
  return JSON.stringify(await Place.find())
}

export default async function PlacesList() {
  const response = await getPlaces()
  const places: IPlace[] = JSON.parse(response)

  return (
    <div>
      <h3>Places</h3>
      <div>
        {places.map((place, index) => (
          <PlaceCard place={place} key={index} />
        ))}
      </div>
    </div>
  )
}
