import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'

export const users = [
    {
        "id": "test-id-1",
        "username": "test1",
        "firstname": "Test",
        "lastname": "One",
        "email": "test1@example.com",
        "avatar": "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
        "role": "Subcontractor",
        "join_date": "5/4/2023",
        "description": "This is a test description for the first test user."
    },
    {
        "id": "test-id-2",
        "username": "test2",
        "firstname": "Test",
        "lastname": "Two",
        "email": "test2@example.com",
        "avatar": "https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1",
        "role": "Engineer",
        "join_date": "2/28/2024",
        "description": "This is a test description for the second test user."
    }
]

export const restHandlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(users)
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

