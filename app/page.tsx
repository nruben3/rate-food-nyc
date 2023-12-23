import "server-only"
import { connect } from "mongoose"
import Place, { IPlace } from "@/lib/models/place"
import AddPlaceForm from "./components/AddPlaceForm"
import PlacesList from "./components/PlacesList"
import Header from "./components/Header"

async function getNeighborhoods() {
  const neighborhoods: any = {}
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Nycapi_Neighborhood?limit=200`,
    {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": process.env.PARSE_APP_ID || "", // This is your app's application id
        "X-Parse-REST-API-Key": process.env.PARSE_API_KEY || "", // This is your app's REST API key
      },
    }
  )
  type Neighborhood = {
    objectId: string
    geoPosition: {}
    name: string
    borough: string
    summary: string
    createdAt: string
    updatedAt: string
  }
  const data: any = await response.json()
  const results: Neighborhood[] = data.results || []
  for (const neighborhood of results) {
    if (!neighborhoods[neighborhood.borough]) {
      neighborhoods[neighborhood.borough] = []
    }
    neighborhoods[neighborhood.borough].push(neighborhood.name)
  }

  return JSON.stringify(neighborhoods)
}

export default async function Home() {
  return (
    <div>
      <Header></Header>
      <h3 className="block text-gray-700 text-3xl text-center font-bold m-1">
        Noah and Becky&apos;s NYC Food Ratings
      </h3>
      <div className="flex justify-center">
        <AddPlaceForm neighborhoods={await getNeighborhoods()} />
        {/* @ts-expect-error Server Component */}
        <PlacesList />
      </div>
    </div>
  )
}
