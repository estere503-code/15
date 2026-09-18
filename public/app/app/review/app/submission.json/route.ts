import { NextResponse } from "next/server";
import submission from "../../public/submission.json";

export function GET() {
  return NextResponse.json(submission, { headers: { "Cache-Control": "public, max-age=60" } });
}
