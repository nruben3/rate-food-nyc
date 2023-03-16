import { Schema, model, models } from "mongoose"

// 1. Create an interface representing a document in MongoDB.
export interface IPlace {
  _id?: string
  name: string
  borough: string
  neighborhood: string
  cuisine: string
  rating: number
  price: String
}

// 2. Create a Schema corresponding to the document interface.
const placeSchema = new Schema<IPlace>(
  {
    name: { type: String, required: true },
    borough: { type: String, required: true },
    neighborhood: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: String, required: true },
  },
  { versionKey: false }
)

// 3. Create a Model.
const Place = models.Place || model<IPlace>("Place", placeSchema)

export default Place
