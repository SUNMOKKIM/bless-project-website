import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHeart, FaGlobe, FaHandshake, FaLightbulb, FaPrayingHands, FaGraduationCap, FaVideo, FaMusic, FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const StorySection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StoryTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  font-weight: 700;
`;

const StoryText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #495057;
  text-align: left;
  
  p {
    margin-bottom: 20px;
    text-indent: 0;
  }
  
  strong {
    color: #e67e22;
    font-weight: 600;
  }
`;

const StoryImage = styled.div`
  height: 400px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 5rem;
`;

const ValuesSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const ValuesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ValuesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const ValuesSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  .icon {
    font-size: 3rem;
    color: #FF6B35;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #2C3E50;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: #7F8C8D;
    line-height: 1.6;
  }
`;

const TeamSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TeamTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamMemberAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35, #F7931E);
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`;

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TeamMemberRole = styled.h4`
  font-size: 1.1rem;
  color: #FF6B35;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TeamMemberDescription = styled.p`
  color: #495057;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>Bless Project 소개</HeroTitle>
          <HeroSubtitle>
            선교지 교회학교와 함께 성장하는 청년 선교 동역 모임<br />
            우리는 하나님의 사랑을 전하는 선교의 동역자입니다
          </HeroSubtitle>
        </div>
      </HeroSection>

      <StorySection>
        <Container>
          <StoryContent>
            <StoryTitle>우리의 이야기</StoryTitle>
            <StoryText>
              <p>
                <strong>Bless Project</strong>는 2020년, 선교지의 절실한 필요를 직접 목격한 청년들이 마음을 모아 시작되었습니다.
              </p>
              <p>
                많은 선교지 교회학교들이 체계적인 교육 자료와 프로그램 부족으로 어려움을 겪고 있다는 현실을 마주하게 되었고, 이 문제를 해결하고자 하는 간절한 마음으로 뜻을 같이했습니다.
              </p>
              <p>
                우리는 일회성 이벤트나 단기선교에 머물지 않고, 선교지의 진정한 자립을 목표로 하는 동역에 헌신하고 있습니다.
              </p>
              <p>
                몇 명의 소규모 팀으로 시작한 우리의 여정은 이제 여러 선교지와 선교사들과의 동역을 통해 평생 선교를 위해 살아가겠다는 청년들의 공동체로 성장했습니다.
              </p>
              <p>
                우리는 단순한 자료 제공을 넘어서, 각 선교지의 고유한 상황과 실제적인 필요를 깊이 있게 파악하여 그에 최적화된 맞춤형 콘텐츠를 제작합니다.
              </p>
              <p>
                우리의 비전은 모든 선교지 교회학교가 자립적이고 지속가능한 운영 체계를 갖추도록 돕는 것입니다. 이를 위해 현지 리더 양성에 집중하고, 각 지역의 문화적 맥락을 깊이 고려한 교육 자료를 개발하며, 일시적이지 않은 장기적 파트너십을 구축해 나가고 있습니다.
              </p>
            </StoryText>
          </StoryContent>
        </Container>
      </StorySection>

      <ValuesSection>
        <ValuesContent>
          <ValuesTitle>우리의 핵심 가치</ValuesTitle>
          <ValuesSubtitle>
            Bless Project가 추구하는 가치와 원칙들
          </ValuesSubtitle>
          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaHeart />
              </div>
              <h3>사랑과 섬김</h3>
              <p>
                하나님의 사랑을 먼저 받고, 그 사랑으로 선교지의 아이들과 교회학교를 섬깁니다. 
                우리는 섬김의 마음으로 모든 일에 임합니다.
              </p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaHandshake />
              </div>
              <h3>동역과 협력</h3>
              <p>
                혼자가 아닌 함께하는 선교를 추구합니다. 선교지 현지 교회와 협력하고, 
                다양한 배경의 동역자들과 함께 일합니다.
              </p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaLightbulb />
              </div>
              <h3>창의성과 혁신</h3>
              <p>
                선교지의 다양한 상황과 필요에 맞는 창의적인 해결책을 찾습니다. 
                전통적인 방법과 새로운 기술을 조합하여 효과적인 교육 자료를 만듭니다.
              </p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaPrayingHands />
              </div>
              <h3>기도와 신뢰</h3>
              <p>
                모든 일의 시작과 끝은 기도입니다. 우리는 하나님께 모든 것을 맡기고, 
                그분의 인도하심을 신뢰하며 일합니다.
              </p>
            </ValueCard>
          </ValuesGrid>
        </ValuesContent>
      </ValuesSection>

      <TeamSection>
        <TeamContainer>
          <TeamTitle>팀 소개</TeamTitle>
          <TeamGrid>
            <TeamCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TeamMemberAvatar>
                <FaUsers />
              </TeamMemberAvatar>
              <TeamMemberName>김선목</TeamMemberName>
              <TeamMemberRole>팀리더</TeamMemberRole>
              <TeamMemberDescription>
                15년 이상 다양한 선교지에서 사역해온 풍부한 경험을 바탕으로 팀의 비전과 방향성을 제시하며, 선교 현장의 실제적인 필요를 깊이 이해하고 있습니다.
              </TeamMemberDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TeamMemberAvatar>
                <FaGraduationCap />
              </TeamMemberAvatar>
              <TeamMemberName>신유진</TeamMemberName>
              <TeamMemberRole>교육 콘텐츠팀장</TeamMemberRole>
              <TeamMemberDescription>
                초등교육 전문성을 바탕으로 선교지 교회학교의 구체적인 교육적 필요를 분석하고, 현지 상황에 최적화된 효과적인 교육 자료를 개발합니다.
              </TeamMemberDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TeamMemberAvatar>
                <FaVideo />
              </TeamMemberAvatar>
              <TeamMemberName>이은창</TeamMemberName>
              <TeamMemberRole>미디어팀장</TeamMemberRole>
              <TeamMemberDescription>
                선교지 교육을 위한 유튜브 콘텐츠를 전략적으로 기획하고 운영하며, 온라인을 통한 교육 자료 전달 체계를 구축합니다.
              </TeamMemberDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TeamMemberAvatar>
                <FaMusic />
              </TeamMemberAvatar>
              <TeamMemberName>김성민</TeamMemberName>
              <TeamMemberRole>찬양팀장</TeamMemberRole>
              <TeamMemberDescription>
                어린이들이 쉽게 따라 부를 수 있는 영어 찬양을 직접 녹음하고 제작하여, 선교지 교회학교의 예배와 교육에 활용할 수 있는 찬양 콘텐츠를 제공합니다.
              </TeamMemberDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <TeamMemberAvatar>
                <FaCog />
              </TeamMemberAvatar>
              <TeamMemberName>송은총</TeamMemberName>
              <TeamMemberRole>기획운영팀장</TeamMemberRole>
              <TeamMemberDescription>
                팀의 전반적인 일정 관리와 프로젝트 기획을 총괄하며, 각 부서 간의 협력이 원활히 이루어질 수 있도록 조율하고 운영합니다.
              </TeamMemberDescription>
            </TeamCard>
          </TeamGrid>
        </TeamContainer>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
