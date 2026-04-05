import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  let mockScrollIntoView

  beforeEach(() => {
    mockScrollIntoView = vi.fn()
    vi.spyOn(document, 'getElementById').mockReturnValue({ scrollIntoView: mockScrollIntoView })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('EPAM Tech Summit')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Program')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders Register Now CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('clicking Register Now calls scrollIntoView', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(mockScrollIntoView).toHaveBeenCalled()
  })

  it('nav links have correct href attributes', () => {
    render(<Navbar />)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Program').closest('a')).toHaveAttribute('href', '#program')
    expect(screen.getByText('Speakers').closest('a')).toHaveAttribute('href', '#speakers')
    expect(screen.getByText('FAQ').closest('a')).toHaveAttribute('href', '#faq')
  })

  it('clicking About nav link calls scrollIntoView', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByText('About'))
    expect(mockScrollIntoView).toHaveBeenCalled()
  })

  it('clicking Program nav link calls scrollIntoView', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByText('Program'))
    expect(mockScrollIntoView).toHaveBeenCalled()
  })

  it('clicking Speakers nav link calls scrollIntoView', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByText('Speakers'))
    expect(mockScrollIntoView).toHaveBeenCalled()
  })

  it('clicking FAQ nav link calls scrollIntoView', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByText('FAQ'))
    expect(mockScrollIntoView).toHaveBeenCalled()
  })
})
