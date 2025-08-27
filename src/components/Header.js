import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaYoutube } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  min-height: 70px;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const Logo = styled(Link)`
  color: #2C3E50;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B35;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 320px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #2C3E50;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #FF6B35;
  }
  
  &.active {
    color: #FF6B35;
    
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
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 1rem;
  }
  
  @media (max-width: 400px) {
    font-size: 0.75rem;
    gap: 0.8rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.7rem;
    gap: 0.6rem;
  }
`;

const SocialLink = styled.a`
  color: #2C3E50;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #FF6B35;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2C3E50;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  min-width: 44px;
  min-height: 44px;
  
  &:hover {
    background-color: rgba(44, 62, 80, 0.1);
  }
  
  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 999;
  border-top: 1px solid #E9ECEF;
  
  &.open {
    transform: translateY(0);
    opacity: 1;
  }
  
  @media (min-width: 321px) {
    display: none;
  }
  
  @media (max-width: 320px) {
    padding: 1.5rem;
    top: 70px;
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
  font-weight: 500;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    color: #FF6B35;
  }
  
  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 0.8rem 0;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        {/* 왼쪽: Bless Project 로고 */}
        <Logo to="/">
          Bless Project
        </Logo>

        {/* 오른쪽: 데스크톱 메뉴 + 모바일 버튼 */}
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
          {/* 데스크톱 메뉴 (320px 이상에서 표시) */}
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

          {/* YouTube 링크 */}
          <SocialLink 
            href="https://www.youtube.com/@BlessProject" 
            target="_blank" 
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube />
          </SocialLink>
          
          {/* 모바일 햄버거 메뉴 버튼 (320px 이하에서만 표시) */}
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="메뉴 열기">
            <FaBars />
          </MobileMenuButton>
        </div>
      </HeaderContent>

      {/* 모바일 메뉴 (320px 이하에서만 표시) */}
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
