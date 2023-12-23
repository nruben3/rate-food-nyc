import Place, { IPlace } from "@/lib/models/place"
import React from "react"

type Props = {
  place: IPlace
}

function PlaceCard(props: Props) {
  return (
    <div className="border rounded border-gray-500 shadow-md px-3 py-2">
      <ul>
        <li className="font-bold">{props.place.name}</li>
        <li>{props.place.borough}</li>
        <li>{props.place.neighborhood}</li>
        <li>{props.place.price}</li>
        <li>{props.place.rating}</li>
      </ul>
    </div>
  )
}

export default PlaceCard
