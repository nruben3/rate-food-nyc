import 'server-only'
import { connect } from 'mongoose'
import Place, { IPlace } from '@/lib/models/place'
import NewPlaceForm from './components/form'

export async function getPlaces() {
  await connect(process.env.MONGODB_URI || "")
  return (JSON.stringify(await Place.find()))
}

export default async function Home() {
  return (
    <div>
      <p>{await getPlaces()}</p>
      <NewPlaceForm></NewPlaceForm>
    </div>
  );
}
