import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2C3E50;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: #7F8C8D;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
  }
  
  .info {
    h3 {
      color: #2C3E50;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    p, a {
      color: #7F8C8D;
      text-decoration: none;
      
      &:hover {
        color: #FF6B35;
      }
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  
  h3 {
    color: #2C3E50;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .social-grid {
    display: flex;
    gap: 1rem;
    
    a {
      width: 50px;
      height: 50px;
      background: #f8f9fa;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #7F8C8D;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      
      &:hover {
        background: #FF6B35;
        color: white;
        transform: translateY(-2px);
      }
    }
  }
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2C3E50;
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2C3E50;
    font-weight: 600;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #E9ECEF;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #FF6B35;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
  }
`;

const NewsletterSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const NewsletterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const NewsletterTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const NewsletterText = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #E9ECEF;
    border-radius: 8px;
    font-size: 16px;
    
    &:focus {
      outline: none;
      border-color: #FF6B35;
    }
  }
  
  button {
    background: #FF6B35;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #E55A2B;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 구현에서는 서버로 데이터를 전송
    console.log('Form submitted:', formData);
    alert('메시지가 성공적으로 전송되었습니다!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // 실제 구현에서는 뉴스레터 구독 처리
    console.log('Newsletter subscription:', newsletterEmail);
    alert('뉴스레터 구독이 완료되었습니다!');
    setNewsletterEmail('');
  };

  return (
    <ContactContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>연락처</HeroTitle>
          <HeroSubtitle>
            Bless Project와 함께 동역하고 싶으시거나, 궁금한 점이 있으시다면<br />
            언제든지 연락해주세요. 여러분의 소중한 의견과 제안을 기다립니다.
          </HeroSubtitle>
        </div>
      </HeroSection>

      <ContactContent>
        <ContactInfo>
          <h2>연락처 정보</h2>
          <p>
            Bless Project는 여러분과의 소통을 소중히 여깁니다. 
            선교 동역, 콘텐츠 제작, 후원 등에 대해 궁금한 점이 있으시면 
            언제든지 연락해주세요.
          </p>
          
          <InfoItem>
            <div className="icon">
              <FaEnvelope />
            </div>
            <div className="info">
              <h3>이메일</h3>
              <a href="mailto:info@blessproject.org">info@blessproject.org</a>
            </div>
          </InfoItem>
          
          <InfoItem>
            <div className="icon">
              <FaPhone />
            </div>
            <div className="info">
              <h3>전화번호</h3>
              <a href="tel:+82-2-1234-5678">+82-2-1234-5678</a>
            </div>
          </InfoItem>
          
          <InfoItem>
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info">
              <h3>주소</h3>
              <p>서울특별시 강남구 테헤란로 123<br />Bless Project 빌딩 4층</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <div className="icon">
              <FaClock />
            </div>
            <div className="info">
              <h3>운영시간</h3>
              <p>월-금: 9:00 AM - 6:00 PM<br />토: 9:00 AM - 1:00 PM</p>
            </div>
          </InfoItem>
          
          <SocialLinks>
            <h3>소셜 미디어</h3>
            <div className="social-grid">
              <a href="https://www.youtube.com/@BlessProject" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </SocialLinks>
        </ContactInfo>

        <ContactForm>
          <h2>메시지 보내기</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="category">문의 유형</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="general">일반 문의</option>
                <option value="partnership">동역 제안</option>
                <option value="content">콘텐츠 관련</option>
                <option value="support">후원 문의</option>
                <option value="volunteer">자원봉사</option>
                <option value="other">기타</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">제목 *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">메시지 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="메시지를 입력해주세요..."
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              메시지 보내기
            </SubmitButton>
          </form>
        </ContactForm>
      </ContactContent>

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterTitle>뉴스레터 구독</NewsletterTitle>
          <NewsletterText>
            Bless Project의 최신 소식과 선교지 현황, 새로운 콘텐츠 소개 등을 
            이메일로 받아보세요. 함께 선교의 꿈을 키워가요!
          </NewsletterText>
          <form onSubmit={handleNewsletterSubmit}>
            <NewsletterForm>
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">구독하기</button>
            </NewsletterForm>
          </form>
        </NewsletterContent>
      </NewsletterSection>
    </ContactContainer>
  );
};

export default Contact;
