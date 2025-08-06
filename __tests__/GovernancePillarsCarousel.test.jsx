import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import GovernancePillarsCarousel from '../components/GovernancePillarsCarousel'

// Mock Swiper components
jest.mock('swiper/react', () => ({
  Swiper: ({ children, ...props }) => (
    <div data-testid="swiper" {...props}>
      {children}
    </div>
  ),
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}))

jest.mock('swiper/modules', () => ({
  Navigation: 'Navigation',
  Pagination: 'Pagination',
  Autoplay: 'Autoplay',
  A11y: 'A11y',
  Keyboard: 'Keyboard',
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
  }
})

const mockPillars = [
  {
    title: 'Family Charter',
    text: 'Clearly defined principles outlining the family\'s vision, values, succession planning, and engagement in investment decisions.'
  },
  {
    title: 'Board Oversight',
    text: 'A structured board provides oversight and guidance on strategic matters, governance best practices, and risk management.'
  },
  {
    title: 'Investment Committees',
    text: 'Independent and experienced professionals who evaluate and approve investment strategies and major transactions.'
  }
]

describe('GovernancePillarsCarousel', () => {
  it('renders the carousel with pillars', () => {
    render(<GovernancePillarsCarousel pillars={mockPillars} />)
    
    expect(screen.getByText('Governance Pillars')).toBeInTheDocument()
    expect(screen.getByText('Family Charter')).toBeInTheDocument()
    expect(screen.getByText('Board Oversight')).toBeInTheDocument()
    expect(screen.getByText('Investment Committees')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<GovernancePillarsCarousel pillars={mockPillars} />)
    
    const prevButton = screen.getByLabelText('Previous governance pillar')
    const nextButton = screen.getByLabelText('Next governance pillar')
    
    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<GovernancePillarsCarousel pillars={mockPillars} />)
    
    const pagination = document.querySelector('.swiper-pagination-custom')
    expect(pagination).toBeInTheDocument()
  })

  it('handles empty pillars array', () => {
    render(<GovernancePillarsCarousel pillars={[]} />)
    
    expect(screen.getByText('No governance pillars available.')).toBeInTheDocument()
  })

  it('handles undefined pillars', () => {
    render(<GovernancePillarsCarousel pillars={undefined} />)
    
    expect(screen.getByText('No governance pillars available.')).toBeInTheDocument()
  })

  it('renders pillar content correctly', () => {
    render(<GovernancePillarsCarousel pillars={mockPillars} />)
    
    expect(screen.getByText(/Clearly defined principles/)).toBeInTheDocument()
    expect(screen.getByText(/A structured board provides/)).toBeInTheDocument()
    expect(screen.getByText(/Independent and experienced/)).toBeInTheDocument()
  })

  it('includes accessibility features', () => {
    render(<GovernancePillarsCarousel pillars={mockPillars} />)
    
    const swiper = screen.getByTestId('swiper')
    expect(swiper).toHaveAttribute('className', expect.stringContaining('governance-pillars-swiper'))
  })
})
