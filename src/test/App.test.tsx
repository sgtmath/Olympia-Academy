import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Blog from '../pages/Blog';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';

function renderWithRouter(ui: React.ReactElement, { initialEntries = ['/'] } = {}) {
  return render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);
}

describe('Navbar', () => {
  it('renders the Bijank logo and nav links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Bijank')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the Get Started button', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('renders footer content', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Bijank')).toBeInTheDocument();
    expect(screen.getByText(/Empowering the next generation/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });
});

describe('Home', () => {
  it('renders hero heading and stats', () => {
    renderWithRouter(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toMatch(/Decode/);
    expect(screen.getByText('Start Learning')).toBeInTheDocument();
    expect(screen.getByText('View Methodology')).toBeInTheDocument();
    expect(screen.getByText('10k+')).toBeInTheDocument();
    expect(screen.getByText('450+')).toBeInTheDocument();
    expect(screen.getByText('25+')).toBeInTheDocument();
    expect(screen.getByText('4.9/5')).toBeInTheDocument();
  });
});

describe('About', () => {
  it('renders mission statement', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/Our Mission/)).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('Intuitive Learning')).toBeInTheDocument();
    expect(screen.getByText('Elite Mentorship')).toBeInTheDocument();
    expect(screen.getByText('Global Community')).toBeInTheDocument();
  });
});

describe('Courses', () => {
  it('renders course listings', () => {
    renderWithRouter(<Courses />);
    expect(screen.getByText(/Master the/)).toBeInTheDocument();
    expect(screen.getByText('Olympiad Beginner')).toBeInTheDocument();
    expect(screen.getByText('Olympiad Intermediate')).toBeInTheDocument();
    expect(screen.getByText('JEE Advanced')).toBeInTheDocument();
  });
});

describe('Blog', () => {
  it('renders blog posts', () => {
    renderWithRouter(<Blog />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toMatch(/Math/);
    expect(heading.textContent).toMatch(/Journal/);
    expect(screen.getByText('How to Approach Unseen Problems')).toBeInTheDocument();
    expect(screen.getByText('The Beauty of Prime Numbers')).toBeInTheDocument();
  });
});

describe('FAQ', () => {
  it('renders FAQ section', () => {
    renderWithRouter(<FAQ />);
    expect(screen.getByText(/Common/)).toBeInTheDocument();
    expect(screen.getByText('Is Bijank suitable for beginners?')).toBeInTheDocument();
  });
});

describe('Contact', () => {
  it('renders contact form', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(/Get in/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ada')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Lovelace')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ada@math.com')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });
});

describe('App', () => {
  it('renders the full layout with navbar and footer', () => {
    renderWithRouter(<App />);
    const bijankElements = screen.getAllByText('Bijank');
    expect(bijankElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/Empowering the next generation/)).toBeInTheDocument();
  });
});
