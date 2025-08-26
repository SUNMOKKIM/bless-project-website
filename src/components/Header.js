import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FF6B35;
  text-decoration: none;
  
  &:hover {
    color: #F7931E;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? '#2C3E50' : '#2C3E50'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #FF6B35;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #FF6B35;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active::after {
    width: 100%;
  }
`;

const SocialLink = styled.a`
  color: ${props => props.scrolled ? '#2C3E50' : '#2C3E50'};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF0000;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#2C3E50' : '#2C3E50'};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1001;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B35;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo to="/">Bless Project</Logo>
        
        <NavLinks>
          <NavLink to="/" scrolled={scrolled} className={location.pathname === '/' ? 'active' : ''}>
            홈
          </NavLink>
          <NavLink to="/about" scrolled={scrolled} className={location.pathname === '/about' ? 'active' : ''}>
            소개
          </NavLink>
          <NavLink to="/content" scrolled={scrolled} className={location.pathname === '/content' ? 'active' : ''}>
            콘텐츠
          </NavLink>
          <NavLink to="/mission" scrolled={scrolled} className={location.pathname === '/mission' ? 'active' : ''}>
            선교지
          </NavLink>
          <NavLink to="/contact" scrolled={scrolled} className={location.pathname === '/contact' ? 'active' : ''}>
            연락처
          </NavLink>
          <SocialLink 
            href="https://www.youtube.com/@BlessProject" 
            target="_blank" 
            rel="noopener noreferrer"
            scrolled={scrolled}
          >
            <FaYoutube />
          </SocialLink>
        </NavLinks>
        
        <MobileMenuButton 
          onClick={() => setMobileMenuOpen(true)}
          scrolled={scrolled}
        >
          <FaBars />
        </MobileMenuButton>
      </Nav>

      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseButton onClick={closeMobileMenu}>
          <FaTimes />
        </CloseButton>
        <MobileNavLink to="/" onClick={closeMobileMenu}>홈</MobileNavLink>
        <MobileNavLink to="/about" onClick={closeMobileMenu}>소개</MobileNavLink>
        <MobileNavLink to="/content" onClick={closeMobileMenu}>콘텐츠</MobileNavLink>
        <MobileNavLink to="/mission" onClick={closeMobileMenu}>선교지</MobileNavLink>
        <MobileNavLink to="/contact" onClick={closeMobileMenu}>연락처</MobileNavLink>
        <SocialLink 
          href="https://www.youtube.com/@BlessProject" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </SocialLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
