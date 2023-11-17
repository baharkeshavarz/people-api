import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavBar from '@/app/components/NavBar';

// Mock the i18n to avoid error in testing
jest.mock('next-i18next', () => require('__mocks__/next-i18next'));

 // Use ARRANGE, ACT, ASSERT approach
describe('NavBar', () => {
    it('should have "My Company" text', () => {
        render(<NavBar />) 
        const myElem = screen.getByText('My Company') 
        expect(myElem).toBeInTheDocument()
    })

    it('should contain the text "Search"', () => {
        render(<NavBar />)
        const myElem = screen.getByText(/Search/i)
        expect(myElem).toBeInTheDocument()
    })
})