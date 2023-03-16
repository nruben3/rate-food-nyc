import Place, { IPlace } from "@/lib/models/place"
import React from "react"

type Props = {
  place: IPlace
}

function PlaceCard(props: Props) {
  return (
    <div>
      <ul>
        <li>Name: {props.place.name}</li>
        <li>Borough: {props.place.borough}</li>
        <li>Neighborhood: {props.place.neighborhood}</li>
        <li>Price: {props.place.price}</li>
      </ul>
    </div>
  )
}

export default PlaceCard
