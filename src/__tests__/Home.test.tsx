import { expect, test, describe, beforeAll } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  beforeAll(() => {
    render(<Home />)
  })

  test('Header', async () => {
    await waitFor(() => expect(screen.getByRole('heading', { level: 1, name: 'Users' })).toBeDefined())
  })

  test('Correct number of User cards', async () => {
    await waitFor(() => expect(screen.queryAllByTestId('test-id-1').length).toBe(1))
    await waitFor(() => expect(screen.queryAllByTestId('test-id-2').length).toBe(1))
  })

  test('Pagination controls', () => {
    expect(screen.getByText('First')).toBeDefined()
    expect(screen.getByText('Prev')).toBeDefined()
    expect(screen.getByText('Next')).toBeDefined()
    expect(screen.getByText('Last')).toBeDefined()
  })

  test('Pagination text', () => {
    expect(screen.getByText('1 - 2 of 2')).toBeDefined()
  })

  describe('User modal', () => {
    test('Starts hidden', () => {
      expect(screen.queryByTestId('user_modal')).toBe(null)
    })

    test('Displays when user is clicked', async () => {
      const el = screen.getAllByText('View More')[0]
      await waitFor(() => el.click())

      expect(screen.getByTestId('user_modal')).toBeDefined()
    })
  })
})