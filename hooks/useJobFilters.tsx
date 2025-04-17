import * as React from "react"

import { useSearchParams, useRouter } from "next/navigation"

import { Job } from "@/components/JobPosts"

type FILTERS = {
  search?: string
  location?: string
  experience_min?: number
  experience_max?: number
  salary?: number
}

const initialFilters: FILTERS = {
  search: "",
  location: "",
  experience_min: undefined,
  experience_max: undefined,
  salary: undefined,
}

const useJobFilters = (jobs: Job[]) => {
  const router = useRouter()
  const params = useSearchParams()
  const [filters, setFilters] = React.useState<FILTERS>(initialFilters)

  React.useEffect(() => {
    const search = params.get("search")
    const location = params.get("location")
    const experience_min = params.get("experience_min")
    const experience_max = params.get("experience_max")
    const salary = params.get("salary")

    setFilters({
      search: search || "",
      location: location || "",
      experience_min: experience_min ? parseInt(experience_min) : undefined,
      experience_max: experience_max ? parseInt(experience_max) : undefined,
      salary: salary ? parseInt(salary) : undefined,
    })
  }, [params])

  const handleSearch = () => {
    const queryParams = {
      search: filters.search || "",
      location: filters.location || "",
      experience_min: filters.experience_min?.toString() || "",
      experience_max: filters.experience_max?.toString() || "",
      salary: filters.salary?.toString() || "",
    }
    const searchParams = new URLSearchParams(queryParams)
    router.push(`?${searchParams.toString()}`, { scroll: false })
  }

  const filteredJobs = React.useMemo(() => {
    return jobs.filter((job) => {
      const search = params.get("search")
      const location = params.get("location")
      const experience_min = params.get("experience_min")
      const salary = params.get("salary")

      if (search && !job.title.toLowerCase().includes(search.toLowerCase())) {
        return false
      }
      if (
        location &&
        !job.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false
      }
      if (experience_min && job.experience_min < parseInt(experience_min)) {
        return false
      }
      if (salary && job.salary < parseInt(salary)) {
        return false
      }
      return true
    })
  }, [jobs, filters])

  return { filters, setFilters, handleSearch, filteredJobs }
}

export default useJobFilters
