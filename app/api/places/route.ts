import { connect } from "mongoose";
import Place, { IPlace } from "@/lib/models/place";

const uri: string = process.env.MONGODB_URI || "";

export async function GET(request: Request) {
    try {
        await connect(uri)
        const res: IPlace[] = await Place.find({})
        return new Response(JSON.stringify(res))
    } catch (err: any) {
        return new Response(err)
    }
}
  