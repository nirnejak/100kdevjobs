import { NextRequest, NextResponse } from "next/server"
import { drizzle } from "drizzle-orm/node-postgres"
import { Client } from "pg"
import { jobs } from "@/app/api/schema"
import { and, eq, gte, lte, inArray, sql } from "drizzle-orm"

// Types for query parameters
interface JobFilters {
  page?: number
  limit?: number
  tags?: string[]
  type?: string
  category?: string
  experience_min?: number
  experience_max?: number
}

// Default pagination values
const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 10

export async function GET(request: NextRequest) {
  try {
    // Create a single PostgreSQL client for serverless environment
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    })

    // Create a drizzle database instance
    const db = drizzle(client, { schema: { jobs } })

    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const filters: JobFilters = {
      page: Number(searchParams.get("page")) || DEFAULT_PAGE,
      limit: Number(searchParams.get("limit")) || DEFAULT_LIMIT,
      tags: searchParams.get("tags")?.split(","),
      type: searchParams.get("type") || undefined,
      category: searchParams.get("category") || undefined,
      experience_min: Number(searchParams.get("experience_min")) || undefined,
      experience_max: Number(searchParams.get("experience_max")) || undefined,
    }

    // Calculate offset for pagination
    const offset = (filters.page! - 1) * filters.limit!

    // Build query conditions
    const conditions = [eq(jobs.is_active, true)]

    // Add filters if provided
    if (filters.tags?.length) {
      conditions.push(
        sql`${jobs.tags} @> ${JSON.stringify(filters.tags)}::jsonb`
      )
    }

    if (filters.type) {
      conditions.push(eq(jobs.type, filters.type))
    }

    if (filters.category) {
      conditions.push(eq(jobs.category, filters.category))
    }

    if (filters.experience_min !== undefined) {
      conditions.push(gte(jobs.experience_min, filters.experience_min))
    }

    if (filters.experience_max !== undefined) {
      conditions.push(lte(jobs.experience_max, filters.experience_max))
    }

    // Get total count for pagination
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(jobs)
      .where(and(...conditions))

    // Get paginated results
    const results = await db
      .select()
      .from(jobs)
      .where(and(...conditions))
      .limit(filters.limit!)
      .offset(offset)
      .orderBy(jobs.createdAt)

    // Close the client connection
    await client.end()

    // Return response with pagination metadata
    return NextResponse.json({
      data: results,
      pagination: {
        total: Number(count),
        page: filters.page,
        limit: filters.limit,
        total_pages: Math.ceil(Number(count) / filters.limit!),
      },
    })
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 })
  }
}
