import "server-only"
import { connect } from "mongoose"
import Place, { IPlace } from "@/lib/models/place"
import AddPlaceForm from "./components/AddPlaceForm"
import PlacesList from "./components/PlacesList"

async function getPlaces() {
  await connect(process.env.MONGODB_URI || "")
  return JSON.stringify(await Place.find())
}

export default async function Home() {
  return (
    <div>
      <h1>Welcome to NYC Food Ratings</h1>
      <AddPlaceForm />
      {/* @ts-expect-error Server Component */}
      <PlacesList />
    </div>
  )
}
