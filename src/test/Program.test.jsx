import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Program from '../components/Program'

describe('Program', () => {
  it('renders section heading', () => {
    render(<Program />)
    expect(screen.getByText('Program Schedule')).toBeInTheDocument()
  })

  it('renders all 6 timeline session titles', () => {
    render(<Program />)
    expect(screen.getByText('Registration & Networking Breakfast')).toBeInTheDocument()
    expect(screen.getByText('Opening Keynote: AI-Driven Engineering at Scale')).toBeInTheDocument()
    expect(screen.getByText('Panel: Architecting for the Cloud-Native Future')).toBeInTheDocument()
    expect(screen.getByText('Lunch & Exhibition Floor')).toBeInTheDocument()
    expect(screen.getByText('Workshops: DevOps, Security & Modern Frontends')).toBeInTheDocument()
    expect(screen.getByText('Closing Remarks & Networking Reception')).toBeInTheDocument()
  })

  it('renders first and last time labels', () => {
    render(<Program />)
    expect(screen.getByText('09:00')).toBeInTheDocument()
    expect(screen.getByText('16:30')).toBeInTheDocument()
  })

  it('renders 6 timeline items', () => {
    render(<Program />)
    expect(document.querySelectorAll('.timeline-item')).toHaveLength(6)
  })

  it('section has correct id for scroll navigation', () => {
    render(<Program />)
    expect(document.querySelector('#program')).toBeInTheDocument()
  })
})
