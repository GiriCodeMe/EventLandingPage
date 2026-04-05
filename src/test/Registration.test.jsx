import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Registration from '../components/Registration'

describe('Registration', () => {
  it('renders section heading', () => {
    render(<Registration />)
    expect(screen.getByText('Register for the Summit')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Registration />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Registration />)
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('shows all three validation errors on empty submit', () => {
    render(<Registration />)
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByText('Full name is required')).toBeInTheDocument()
    expect(screen.getByText('Email address is required')).toBeInTheDocument()
    expect(screen.getByText('Company name is required')).toBeInTheDocument()
  })

  it('shows invalid email error for bad email', () => {
    render(<Registration />)
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Smith' } })
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'notanemail' } })
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme Corp' } })
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('clears name error when user types in name field', () => {
    render(<Registration />)
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByText('Full name is required')).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'J' } })
    expect(screen.queryByText('Full name is required')).not.toBeInTheDocument()
  })

  it('shows success message on valid submission', () => {
    render(<Registration />)
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Smith' } })
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@company.com' } })
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme Corp' } })
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByText("You're registered!")).toBeInTheDocument()
  })

  it('success message shows submitted name and email', () => {
    render(<Registration />)
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Smith' } })
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@company.com' } })
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme Corp' } })
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByText(/Jane Smith/)).toBeInTheDocument()
    expect(screen.getByText(/jane@company\.com/)).toBeInTheDocument()
  })

  it('hides form and shows success state after submission', () => {
    render(<Registration />)
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Smith' } })
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@company.com' } })
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme Corp' } })
    fireEvent.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.queryByRole('button', { name: /register now/i })).not.toBeInTheDocument()
  })
})
