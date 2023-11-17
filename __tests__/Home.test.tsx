import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '@/app/[locale]/page'

// Mock the i18n to avoid error in testing
jest.mock('next-intl/client', () => ({
    useRouter() {
      return {
        push: () => jest.fn(),
        replace: () => jest.fn(),
      };
    },
    usePathname() {
      return '';
    },
  }));

  
// Use ARRANGE, ACT, ASSERT approach
describe('Home', () => {
    it('should have Docs text', () => {
        render(<Home />) 
        const myElem = screen.getByText('Docs') 
        expect(myElem).toBeInTheDocument()
    })

    it('should contain the text "information"', () => {
        render(<Home />)
        const myElem = screen.getByText(/information/i)
        expect(myElem).toBeInTheDocument()
    })

    it('should have a heading', () => {
        render(<Home />) 
        const myElem = screen.getByRole('heading', {
            name: 'Learn'
        }) 
        expect(myElem).toBeInTheDocument()
    })
})