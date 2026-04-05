import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import Hero from '../components/Hero'

describe('Hero', () => {
  let mockScrollIntoView

  beforeEach(() => {
    mockScrollIntoView = vi.fn()
    vi.spyOn(document, 'getElementById').mockReturnValue({ scrollIntoView: mockScrollIntoView })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders event name as h1', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('EPAM Tech Summit 2026')
  })

  it('renders event date', () => {
    render(<Hero />)
    expect(screen.getAllByText(/May 15[–-]16, 2026/).length).toBeGreaterThan(0)
  })

  it('renders event location', () => {
    render(<Hero />)
    expect(screen.getByText(/Javits Center, New York/)).toBeInTheDocument()
  })

  it('renders attendee count', () => {
    render(<Hero />)
    expect(screen.getByText(/1,200\+ Attendees/)).toBeInTheDocument()
  })

  it('renders Register Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('clicking Register Now calls scrollIntoView', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(mockScrollIntoView).toHaveBeenCalled()
  })
})
