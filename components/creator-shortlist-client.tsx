'use client'

import { useState, useEffect } from 'react'
import { TaskList, type Task } from '@/components/ui/task-list'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination'

type LoadCreatorsResult = {
  tasks: Task[]
  total: number
  page: number
  totalPages: number
}

export function CreatorShortlistClient({ initialPage = 1 }: { initialPage?: number }) {
  const [data, setData] = useState<LoadCreatorsResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(initialPage)

  const loadData = async (page: number) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/creators?page=${page}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      if (result && Array.isArray(result.tasks)) {
        // Only update data if we got valid results
        setData(result)
        setCurrentPage(page)
        // Update URL without page reload
        window.history.pushState({}, '', `/creator-shortlist${page > 1 ? `?page=${page}` : ''}`)
      } else {
        console.error('Invalid response format:', result)
      }
    } catch (error) {
      console.error('Error loading creators:', error)
      // Don't clear existing data on error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData(initialPage)
  }, []) // Only run on mount with initial page

  const handlePageChange = (page: number) => {
    loadData(page)
    // Scroll to top of list
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show loading state only on initial load (when there's no data yet)
  if (loading && !data) {
    return (
      <div className="w-full max-w-4xl mx-auto rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Who we're looking for</h2>
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    )
  }

  // Show empty state only if we have data but no tasks (not during loading)
  if (!loading && (!data || !data.tasks || data.tasks.length === 0)) {
    return (
      <div className="w-full max-w-4xl mx-auto rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Who we're looking for</h2>
        <p className="text-muted-foreground">
          No creators found. Please configure Supabase credentials or add creators to the database.
        </p>
      </div>
    )
  }

  // Don't render if we don't have valid data
  if (!data || !data.tasks) {
    return null
  }

  return (
    <>
      <div className={loading ? 'opacity-60 transition-opacity' : 'transition-opacity'}>
        <TaskList title="Who we're looking for" tasks={data.tasks} />
      </div>
      {data.totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="inline-flex items-center justify-center gap-1 px-2.5 sm:pl-2.5 h-10 rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span className="hidden sm:block">Previous</span>
                  </button>
                </PaginationItem>
              )}
              {(() => {
                const pages: (number | 'ellipsis')[] = []
                const totalPages = data.totalPages

                if (totalPages <= 7) {
                  // Show all pages if 7 or fewer
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i)
                  }
                } else {
                  // Always show first page
                  pages.push(1)

                  if (currentPage <= 4) {
                    // Show first 5 pages and ellipsis
                    for (let i = 2; i <= 5; i++) {
                      pages.push(i)
                    }
                    pages.push('ellipsis')
                    pages.push(totalPages)
                  } else if (currentPage >= totalPages - 3) {
                    // Show ellipsis and last 5 pages
                    pages.push('ellipsis')
                    for (let i = totalPages - 4; i <= totalPages; i++) {
                      pages.push(i)
                    }
                  } else {
                    // Show first, ellipsis, current-1, current, current+1, ellipsis, last
                    pages.push('ellipsis')
                    pages.push(currentPage - 1)
                    pages.push(currentPage)
                    pages.push(currentPage + 1)
                    pages.push('ellipsis')
                    pages.push(totalPages)
                  }
                }

                return pages.map((item, index) => {
                  if (item === 'ellipsis') {
                    return (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )
                  }
                  return (
                    <PaginationItem key={item}>
                      <button
                        onClick={() => handlePageChange(item)}
                        className={`inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium transition-colors ${
                          item === currentPage
                            ? 'border border-input bg-background'
                            : 'hover:bg-accent hover:text-accent-foreground'
                        } ${item === currentPage ? 'pointer-events-none' : 'cursor-pointer'}`}
                        aria-current={item === currentPage ? 'page' : undefined}
                      >
                        {item}
                      </button>
                    </PaginationItem>
                  )
                })
              })()}
              {currentPage < data.totalPages && (
                <PaginationItem>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="inline-flex items-center justify-center gap-1 px-2.5 sm:pr-2.5 h-10 rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span className="hidden sm:block">Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  )
}

