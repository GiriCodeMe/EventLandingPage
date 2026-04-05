import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FAQ from '../components/FAQ'

describe('FAQ', () => {
  it('renders section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all 5 questions', () => {
    render(<FAQ />)
    expect(screen.getByText('Who should attend EPAM Tech Summit 2026?')).toBeInTheDocument()
    expect(screen.getByText('Where is the event held?')).toBeInTheDocument()
    expect(screen.getByText('Is lunch and refreshments included?')).toBeInTheDocument()
    expect(screen.getByText('Will sessions be recorded and available after the event?')).toBeInTheDocument()
    expect(screen.getByText('What is the cancellation and refund policy?')).toBeInTheDocument()
  })

  it('answers are hidden initially', () => {
    render(<FAQ />)
    expect(screen.queryByText(/summit is designed for software engineers/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Javits Center, 429/i)).not.toBeInTheDocument()
  })

  it('clicking a question reveals the answer', () => {
    render(<FAQ />)
    fireEvent.click(screen.getByText('Who should attend EPAM Tech Summit 2026?'))
    expect(screen.getByText(/summit is designed for software engineers/i)).toBeInTheDocument()
  })

  it('clicking an open question closes it', () => {
    render(<FAQ />)
    const q = screen.getByText('Who should attend EPAM Tech Summit 2026?')
    fireEvent.click(q)
    expect(screen.getByText(/summit is designed for software engineers/i)).toBeInTheDocument()
    fireEvent.click(q)
    expect(screen.queryByText(/summit is designed for software engineers/i)).not.toBeInTheDocument()
  })

  it('only one question open at a time', () => {
    render(<FAQ />)
    fireEvent.click(screen.getByText('Who should attend EPAM Tech Summit 2026?'))
    expect(screen.getByText(/summit is designed for software engineers/i)).toBeInTheDocument()
    fireEvent.click(screen.getByText('Where is the event held?'))
    expect(screen.queryByText(/summit is designed for software engineers/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Javits Center, 429/i)).toBeInTheDocument()
  })

  it('question buttons have aria-expanded attribute', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(buttons[0])
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
  })
})
