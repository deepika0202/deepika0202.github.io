import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  it('renders the hero with name and current role', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Deepika\s*Chaturvedi/)
    expect(screen.getByText(/Software Engineer @ Goldman Sachs/)).toBeInTheDocument()
  })

  it('lists all employers in the experience section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Goldman Sachs' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Treatment24Seven' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Amdocs' })).toBeInTheDocument()
  })

  it('links to the resume PDF', () => {
    render(<Home />)
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i })
    expect(resumeLinks.length).toBeGreaterThan(0)
    resumeLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/Deepika_Chaturvedi_Resume.pdf')
    })
  })

  it('shows contact channels', () => {
    render(<Home />)
    expect(screen.getAllByRole('link', { name: /deepikachatur97@gmail.com/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /linkedin/i }).length).toBeGreaterThan(0)
  })
})
