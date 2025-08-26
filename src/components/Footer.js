import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
  color: white;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #FF6B35;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p, a {
    color: #BDC3C7;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  
  a:hover {
    color: #FF6B35;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #BDC3C7;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B35;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495E;
  padding-top: 1rem;
  text-align: center;
  color: #BDC3C7;
  
  .heart {
    color: #E74C3C;
    animation: heartbeat 1.5s ease-in-out infinite;
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Bless Project</h3>
          <p>선교지 교회학교와 함께 성장하는 청년 선교 동역 모임</p>
          <p>함께 만들어가는 선교의 미래</p>
        </FooterSection>
        
        <FooterSection>
          <h3>빠른 링크</h3>
          <Link to="/">홈</Link><br />
          <Link to="/about">소개</Link><br />
          <Link to="/content">콘텐츠</Link><br />
          <Link to="/mission">선교지</Link><br />
          <Link to="/contact">연락처</Link>
        </FooterSection>
        
        <FooterSection>
          <h3>콘텐츠</h3>
          <p>주일학교 교재</p>
          <p>성경 공부 자료</p>
          <p>찬양/워십 콘텐츠</p>
          <p>게임/액티비티</p>
        </FooterSection>
        
        <FooterSection>
          <h3>연결하기</h3>
          <p>함께 동역하고 싶으신가요?</p>
          <p>기도와 후원으로 함께해주세요</p>
          <SocialLinks>
            <SocialLink 
              href="https://www.youtube.com/@BlessProject" 
              target="_blank" 
              rel="noopener noreferrer"
              title="YouTube"
            >
              <FaYoutube />
            </SocialLink>
            <SocialLink href="#" title="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" title="Facebook">
              <FaFacebook />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>
          © 2024 Bless Project. Made with <FaHeart className="heart" /> for God's Kingdom
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
