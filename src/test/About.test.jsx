import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../components/About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('About the Summit')).toBeInTheDocument()
  })

  it('renders section subtitle', () => {
    render(<About />)
    expect(screen.getByText('Two days of insights, connections, and innovation')).toBeInTheDocument()
  })

  it('renders stat numbers', () => {
    render(<About />)
    expect(screen.getByText('40+')).toBeInTheDocument()
    expect(screen.getByText('20+')).toBeInTheDocument()
    expect(screen.getByText('1,200+')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<About />)
    expect(screen.getByText('Expert Speakers')).toBeInTheDocument()
    expect(screen.getByText('Sessions & Workshops')).toBeInTheDocument()
    expect(screen.getByText('Attendees')).toBeInTheDocument()
    expect(screen.getByText('Days of Learning')).toBeInTheDocument()
  })

  it('section has correct id for scroll navigation', () => {
    render(<About />)
    expect(document.querySelector('#about')).toBeInTheDocument()
  })
})
