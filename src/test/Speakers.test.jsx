import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Speakers from '../components/Speakers'

describe('Speakers', () => {
  it('renders section heading', () => {
    render(<Speakers />)
    expect(screen.getByText('Featured Speakers')).toBeInTheDocument()
  })

  it('renders all 4 speaker names', () => {
    render(<Speakers />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Michael Torres')).toBeInTheDocument()
    expect(screen.getByText('Aisha Patel')).toBeInTheDocument()
    expect(screen.getByText("James O'Brien")).toBeInTheDocument()
  })

  it('renders speaker titles', () => {
    render(<Speakers />)
    expect(screen.getByText('VP of Engineering')).toBeInTheDocument()
    expect(screen.getByText('Principal Cloud Architect')).toBeInTheDocument()
    expect(screen.getByText('Head of AI Research')).toBeInTheDocument()
    expect(screen.getByText('Chief Technology Officer')).toBeInTheDocument()
  })

  it('renders speaker companies', () => {
    render(<Speakers />)
    expect(screen.getByText('EPAM Systems')).toBeInTheDocument()
    expect(screen.getByText('Google Cloud')).toBeInTheDocument()
    expect(screen.getByText('DeepMind')).toBeInTheDocument()
    expect(screen.getByText('FinTech Innovations')).toBeInTheDocument()
  })

  it('renders avatar initials', () => {
    render(<Speakers />)
    expect(screen.getByText('SC')).toBeInTheDocument()
    expect(screen.getByText('MT')).toBeInTheDocument()
    expect(screen.getByText('AP')).toBeInTheDocument()
    expect(screen.getByText('JO')).toBeInTheDocument()
  })

  it('renders 4 speaker cards', () => {
    render(<Speakers />)
    expect(document.querySelectorAll('.speaker-card')).toHaveLength(4)
  })
})
