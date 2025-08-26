import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaUsers, FaGlobe, FaHeart, FaDownload, FaUpload } from 'react-icons/fa';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.8) 0%, rgba(52, 73, 94, 0.8) 100%),
              url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 2;
  
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .hero-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const StatsSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  .icon {
    font-size: 3rem;
    color: #FF6B35;
    margin-bottom: 1rem;
  }
  
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2C3E50;
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: #7F8C8D;
    font-size: 1.1rem;
  }
`;

const VisionSection = styled.section`
  padding: 80px 0;
  background: white;
`;

const VisionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const VisionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const VisionText = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const VisionCard = styled(motion.div)`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
  text-align: center;
  
  h3 {
    color: #FF6B35;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: #7F8C8D;
    line-height: 1.6;
  }
`;

const ContentSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
`;

const ContentContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ContentTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
`;

const ContentButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 18px;
  
  &.primary {
    background: white;
    color: #FF6B35;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background: white;
      color: #FF6B35;
    }
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bless Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            선교지의 필요한 부분을 동역하고자 모인 청년 선교 동역 모임입니다.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            선교지에 있는 교회학교의 성장과 자립에 동역하고자 다양한 콘텐츠를 제작하고 있습니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-buttons"
          >
            <button className="btn btn-primary">동역하기</button>
            <button className="btn btn-secondary">콘텐츠 둘러보기</button>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <div className="container">
          <h2 className="section-title">함께 만들어온 성과</h2>
          <p className="section-subtitle">Bless Project와 함께한 선교의 발자취</p>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaGlobe />
              </div>
              <div className="number">15+</div>
              <div className="label">동역 선교지</div>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaUsers />
              </div>
              <div className="number">200+</div>
              <div className="label">동역자</div>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaDownload />
              </div>
              <div className="number">500+</div>
              <div className="label">제작 콘텐츠</div>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaHeart />
              </div>
              <div className="number">1000+</div>
              <div className="label">도움받은 아이들</div>
            </StatCard>
          </StatsGrid>
        </div>
      </StatsSection>

      <VisionSection>
        <VisionContent>
          <VisionTitle>우리의 비전과 사명</VisionTitle>
          <VisionText>
            선교지 교회학교의 성장과 자립을 위해 다양한 콘텐츠를 제작하고, 
            현지 리더들을 양성하며, 문화 교류를 통해 하나님의 사랑을 전합니다.
          </VisionText>
          <VisionGrid>
            <VisionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>교육 콘텐츠 제작</h3>
              <p>선교지 교회학교에 필요한 다양한 교육 자료를 현지 상황에 맞게 제작합니다.</p>
            </VisionCard>
            <VisionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>현지 리더 양성</h3>
              <p>선교지에서 자립적으로 사역할 수 있는 리더들을 양성하고 지원합니다.</p>
            </VisionCard>
            <VisionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>문화 교류 프로그램</h3>
              <p>한국과 선교지 간의 문화 교류를 통해 상호 이해와 존중을 증진합니다.</p>
            </VisionCard>
          </VisionGrid>
        </VisionContent>
      </VisionSection>

      <ContentSection>
        <ContentContent>
          <ContentTitle>함께 콘텐츠를 만들어가요</ContentTitle>
          <ContentText>
            누구든지 업로드하고 다운로드할 수 있는 개방형 플랫폼으로, 
            선교지 교회학교를 위한 다양한 자료를 공유합니다.
          </ContentText>
          <ContentButtons>
            <CTAButton to="/content" className="primary">
              <FaDownload /> 콘텐츠 둘러보기
            </CTAButton>
            <CTAButton to="/content" className="secondary">
              <FaUpload /> 콘텐츠 업로드
            </CTAButton>
          </ContentButtons>
        </ContentContent>
      </ContentSection>
    </>
  );
};

export default Home;
