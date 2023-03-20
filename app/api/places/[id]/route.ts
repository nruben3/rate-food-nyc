import { connect } from "mongoose"
import Place, { IPlace } from "@/lib/models/place"
import { NextResponse } from "next/server"

const uri: string = process.env.MONGODB_URI || ""

export async function GET(request: Request, { params }: any) {
  await connect(uri)
  const place = await Place.findOne({ _id: params.id })
  if (!place) {
    return NextResponse.redirect("/404")
  }
  return NextResponse.json({ place })
}

export async function DELETE(request: Request, { params }: any) {
  await connect(uri)
  const result = await Place.deleteOne({ _id: params.id })
  return NextResponse.json(result)
}
