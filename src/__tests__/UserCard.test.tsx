import { expect, test, describe, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserCard from '@/components/user_card'
import { users } from '../../vite_setup'

const user = users[0]

describe('UserCard', () => {
    beforeAll(() => {
        render(<UserCard user={user} selectUser={null} />)
    })

    test('Avatar', () => {
        expect(screen.getByRole('img')).toBeDefined()
    })

    test('User name', () => {
        expect(screen.getByText(user.firstname + ' ' + user.lastname)).toBeDefined()
    })

    test('View more button', () => {
        expect(screen.getByText('View More')).toBeDefined()
    })
})