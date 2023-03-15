import { Schema, Document, model, models } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IPlace extends Document {
  name: string;
}

// 2. Create a Schema corresponding to the document interface.
const placeSchema = new Schema<IPlace>({
  name: { type: String, required: true }
});

// 3. Create a Model.
const Place = models.Place || model<IPlace>('Place', placeSchema)

export default Place