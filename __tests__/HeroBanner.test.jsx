import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroBanner from '../components/HeroBanner'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}))

describe('HeroBanner', () => {
  const defaultProps = {
    imageUrl: '/images/test.jpg',
    alt: 'Test hero banner',
  }

  it('renders basic hero banner without text', () => {
    render(<HeroBanner {...defaultProps} showText={false} />)
    
    const banner = screen.getByRole('img')
    expect(banner).toBeInTheDocument()
    expect(banner).toHaveAttribute('aria-label', 'Test hero banner')
  })

  it('renders hero banner with title only', () => {
    render(
      <HeroBanner 
        {...defaultProps} 
        title="Test Title"
      />
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders hero banner with title and subtitle', () => {
    render(
      <HeroBanner 
        {...defaultProps} 
        title="Test Title"
        subtitle="Test Subtitle"
      />
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders hero banner with all text content', () => {
    render(
      <HeroBanner 
        {...defaultProps} 
        title="Test Title"
        subtitle="Test Subtitle"
        description="Test description content"
      />
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Test description content')).toBeInTheDocument()
  })

  it('does not render text when showText is false', () => {
    render(
      <HeroBanner 
        {...defaultProps} 
        title="Test Title"
        subtitle="Test Subtitle"
        description="Test description"
        showText={false}
      />
    )
    
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument()
    expect(screen.queryByText('Test description')).not.toBeInTheDocument()
  })

  it('applies custom overlay opacity', () => {
    render(
      <HeroBanner 
        {...defaultProps} 
        overlayOpacity={0.6}
      />
    )
    
    const overlay = document.querySelector('.absolute.inset-0.bg-black')
    expect(overlay).toHaveStyle({ opacity: '0.6' })
  })

  it('uses default overlay opacity when not specified', () => {
    render(<HeroBanner {...defaultProps} />)
    
    const overlay = document.querySelector('.absolute.inset-0.bg-black')
    expect(overlay).toHaveStyle({ opacity: '0.4' })
  })

  it('has proper CSS classes for styling', () => {
    render(
      <HeroBanner 
        {...defaultProps} 
        title="Test Title"
      />
    )
    
    const banner = screen.getByRole('img')
    expect(banner).toHaveClass('w-full', 'h-screen', 'bg-cover', 'bg-center', 'relative')
  })

  it('renders with background image style', () => {
    render(<HeroBanner {...defaultProps} />)
    
    const banner = screen.getByRole('img')
    expect(banner).toHaveStyle({
      backgroundImage: 'url(/images/test.jpg)'
    })
  })
})
