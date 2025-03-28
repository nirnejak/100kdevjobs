import { NextRequest, NextResponse } from "next/server"

import { eq } from "drizzle-orm"

import { db } from "@/drizzle.config"
import { job_subscribers } from "@/app/api/schema"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingSubscriber = await db
      .select()
      .from(job_subscribers)
      .where(eq(job_subscribers.email, email))
      .limit(1)

    if (existingSubscriber.length > 0) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 }
      )
    }

    // Insert new subscriber
    await db.insert(job_subscribers).values({
      email,
    })

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 }
    )
  }
}
