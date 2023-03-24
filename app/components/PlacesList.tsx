import "server-only"
import { connect } from "mongoose"
import Place, { IPlace } from "@/lib/models/place"
import PlaceCard from "./PlaceCard"

async function getPlaces() {
  try {
    await connect(process.env.MONGODB_URI || "")
  } catch (e: any) {
    return e
  }
  return JSON.stringify(await Place.find())
}

export default async function PlacesList() {
  const response = await getPlaces()
  const places: IPlace[] = JSON.parse(response)

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2 w-full">
      <h3 className="block text-gray-700 text-xl font-bold mb-2">Places</h3>
      <div className="grid gap-4 grid-cols-5">
        {places.map((place, index) => (
          <PlaceCard place={place} key={index} />
        ))}
      </div>
    </div>
  )
}
