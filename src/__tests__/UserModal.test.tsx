import { expect, test, describe, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserModal from '@/components/user_modal'
import { users } from '../../vite_setup'

const user = users[0]

describe('UserModal', () => {
    beforeAll(() => {
        render(<UserModal user={user} closeModal={null} />)
    })

    test('Avatar', () => {
        expect(screen.getByRole('img')).toBeDefined()
    })

    test('User name', () => {
        expect(screen.getByText(user.firstname + ' ' + user.lastname)).toBeDefined()
    })

    test('Role', () => {
        expect(screen.getByText(user.role)).toBeDefined()
    })

    test('Join Date', () => {
        expect(screen.getByText(user.join_date)).toBeDefined()
    })

    test('Description', () => {
        expect(screen.getByText(user.description)).toBeDefined()
    })

    test('Modal close button', () => {
        expect(screen.getByText('X')).toBeDefined()
    })
})