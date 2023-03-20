import { connect } from "mongoose"
import Place, { IPlace } from "@/lib/models/place"
import { NextResponse } from "next/server"

const uri: string = process.env.MONGODB_URI || ""

export async function GET(request: Request) {
  try {
    await connect(uri)
    return NextResponse.json(await Place.find({}))
  } catch (err: any) {
    return new Response(err)
  }
}

export async function POST(request: Request) {
  try {
    const new_place: IPlace = await request.json()
    await connect(uri)
    await Place.create(new_place)
    console.log({ message: "Place saved" })
    return NextResponse.json({ message: `${new_place.name} was added.` })
  } catch (err: any) {
    return new Response(err)
  }
}

export async function DELETE(request: Request) {
  try {
    await connect(uri)
    await Place.deleteMany()
    return NextResponse.json({ message: "All places have been deleted." })
  } catch (err: any) {
    return new Response(err)
  }
}
