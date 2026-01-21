import { NextRequest, NextResponse } from "next/server"

import { db } from "@/lib/db"
import { jobs } from "@/app/api/schema"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      link,
      salary,
      company,
      location,
      location_type,
      type,
      category,
      tags,
      experience_min,
      experience_max,
    } = body

    // Validate required fields
    if (
      !title ||
      !description ||
      !link ||
      !salary ||
      !company ||
      !location ||
      !location_type ||
      !type ||
      !category ||
      experience_min === undefined ||
      experience_max === undefined
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate salary is a number
    if (typeof salary !== "number" || salary < 0) {
      return NextResponse.json(
        { error: "Salary must be a positive number" },
        { status: 400 }
      )
    }

    // Validate experience range
    if (
      typeof experience_min !== "number" ||
      typeof experience_max !== "number" ||
      experience_min < 0 ||
      experience_max < experience_min
    ) {
      return NextResponse.json(
        { error: "Invalid experience range" },
        { status: 400 }
      )
    }

    // Validate location type
    const validLocationTypes = ["on-site", "remote", "hybrid"]
    if (!validLocationTypes.includes(location_type)) {
      return NextResponse.json(
        { error: "Invalid location type" },
        { status: 400 }
      )
    }

    // Validate job type
    const validJobTypes = [
      "full-time",
      "part-time",
      "contractor",
      "internship",
      "freelance",
      "volunteer",
    ]
    if (!validJobTypes.includes(type)) {
      return NextResponse.json({ error: "Invalid job type" }, { status: 400 })
    }

    // Insert new job
    await db.insert(jobs).values({
      title,
      description,
      link,
      salary,
      company,
      location,
      location_type,
      type,
      category,
      tags,
      experience_min,
      experience_max,
      is_active: true,
    })

    return NextResponse.json(
      { message: "Job posted successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error posting job:", error)
    return NextResponse.json({ error: "Failed to post job" }, { status: 500 })
  }
}
