import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaYoutube } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Logo = styled(Link)`
  color: #2C3E50 !important;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B35 !important;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #2C3E50 !important;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #FF6B35 !important;
  }
  
  &.active {
    color: #FF6B35 !important;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: #FF6B35;
      border-radius: 1px;
    }
  }
`;

const SocialLink = styled.a`
  color: #2C3E50 !important;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B35 !important;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2C3E50 !important;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(44, 62, 80, 0.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 6px;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  
  &.open {
    transform: translateY(0);
    opacity: 1;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    top: 90px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    top: 85px;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  color: #2C3E50;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #E9ECEF;
  transition: color 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    color: #FF6B35;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0.8rem 0;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        {/* 왼쪽 상단: Bless Project 로고 */}
        <Logo to="/">
          Bless Project
        </Logo>

        {/* 오른쪽: 네비게이션 메뉴 + 소셜 링크 */}
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
          <Nav>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
              홈
            </NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              소개
            </NavLink>
            <NavLink to="/content" className={location.pathname === '/content' ? 'active' : ''}>
              콘텐츠
            </NavLink>
            <NavLink to="/mission" className={location.pathname === '/mission' ? 'active' : ''}>
              선교지
            </NavLink>
            <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              연락처
            </NavLink>
          </Nav>

          <SocialLink 
            href="https://www.youtube.com/@BlessProject" 
            target="_blank" 
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube />
          </SocialLink>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            <FaBars />
          </MobileMenuButton>
        </div>
      </HeaderContent>

      <MobileMenu className={mobileMenuOpen ? 'open' : ''}>
        <MobileNavLink to="/" onClick={closeMobileMenu}>홈</MobileNavLink>
        <MobileNavLink to="/about" onClick={closeMobileMenu}>소개</MobileNavLink>
        <MobileNavLink to="/content" onClick={closeMobileMenu}>콘텐츠</MobileNavLink>
        <MobileNavLink to="/mission" onClick={closeMobileMenu}>선교지</MobileNavLink>
        <MobileNavLink to="/contact" onClick={closeMobileMenu}>연락처</MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
