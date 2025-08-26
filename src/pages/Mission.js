import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUsers, FaHeart, FaPrayingHands, FaGlobe, FaHandshake } from 'react-icons/fa';
import styled from 'styled-components';

const MissionContainer = styled.div`
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

const MissionOverview = styled.section`
  padding: 80px 0;
  background: white;
`;

const OverviewContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const OverviewTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const OverviewText = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const MissionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  
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

const MissionFields = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const FieldsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FieldsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 1rem;
  text-align: center;
`;

const FieldsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const FieldCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  .field-image {
    height: 200px;
    background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
  }
  
  .field-content {
    padding: 2rem;
  }
  
  h3 {
    color: #2C3E50;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: #7F8C8D;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .field-stats {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    color: #FF6B35;
    font-weight: 600;
  }
`;

const TestimonialsSection = styled.section`
  padding: 80px 0;
  background: white;
`;

const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const TestimonialsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: left;
  
  .quote {
    font-size: 1.1rem;
    color: #2C3E50;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-style: italic;
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }
    
    .author-info {
      .name {
        font-weight: 600;
        color: #2C3E50;
        margin-bottom: 0.2rem;
      }
      
      .location {
        color: #7F8C8D;
        font-size: 0.9rem;
      }
    }
  }
`;

const PartnershipSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
`;

const PartnershipContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const PartnershipTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PartnershipText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const PartnershipButton = styled.button`
  background: white;
  color: #FF6B35;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Mission = () => {
  const [activeTab, setActiveTab] = useState('all');

  const missionFields = [
    {
      id: 1,
      name: '아프리카 - 케냐',
      description: '케냐의 수도 나이로비에서 교회학교 운영을 지원하고 있습니다. 현지 교사들과 함께 성경 교육 자료를 개발하고, 아이들의 영적 성장을 돕고 있습니다.',
      stats: ['15개 교회', '500명 아이들'],
      icon: '🌍'
    },
    {
      id: 2,
      name: '아시아 - 네팔',
      description: '네팔의 산간 지역에서 교회학교를 운영하는 현지 교회들과 동역하고 있습니다. 힌두교 문화권에서 기독교 교육을 위한 특별한 자료를 제공합니다.',
      stats: ['8개 교회', '300명 아이들'],
      icon: '🏔️'
    },
    {
      id: 3,
      name: '남아메리카 - 브라질',
      description: '브라질의 아마존 지역에서 원주민 아이들을 위한 교회학교를 지원합니다. 포르투갈어와 현지 언어로 된 교육 자료를 개발하고 있습니다.',
      stats: ['12개 교회', '400명 아이들'],
      icon: '🌴'
    },
    {
      id: 4,
      name: '유럽 - 우크라이나',
      description: '전쟁으로 어려움을 겪고 있는 우크라이나의 교회학교를 지원합니다. 아이들의 심리적 치유와 영적 안정을 위한 프로그램을 제공합니다.',
      stats: ['6개 교회', '200명 아이들'],
      icon: '🕊️'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Bless Project의 도움으로 우리 교회학교가 완전히 바뀌었습니다. 아이들이 더 재미있게 성경을 배우고, 교사들도 더 자신감을 가지고 가르칠 수 있게 되었어요.",
      author: "사라 존슨",
      location: "케냐, 나이로비",
      avatar: "👩‍🏫"
    },
    {
      id: 2,
      quote: "한국에서 온 교육 자료들이 우리 문화에 맞게 잘 조정되어 있어서 정말 감사합니다. 아이들이 한국 문화도 배우고, 우리 문화도 더 자랑스럽게 여기게 되었어요.",
      author: "라지 쿠마르",
      location: "네팔, 카트만두",
      avatar: "👨‍🏫"
    },
    {
      id: 3,
      quote: "전쟁 중에도 아이들이 하나님의 사랑을 느낄 수 있도록 도와주셔서 감사합니다. Bless Project 팀의 헌신적인 노력이 우리에게 큰 힘이 되고 있습니다.",
      author: "올레나 페트렌코",
      location: "우크라이나, 키예프",
      avatar: "👩‍💼"
    }
  ];

  return (
    <MissionContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>선교지 현황</HeroTitle>
          <HeroSubtitle>
            전 세계 15개 이상의 선교지에서 교회학교와 함께 성장하고 있습니다<br />
            각 선교지의 특성과 필요에 맞는 맞춤형 지원을 제공합니다
          </HeroSubtitle>
        </div>
      </HeroSection>

      <MissionOverview>
        <OverviewContent>
          <OverviewTitle>전 세계 선교 현황</OverviewTitle>
          <OverviewText>
            Bless Project는 아프리카, 아시아, 남아메리카, 유럽 등 전 세계 다양한 지역에서 
            교회학교와 동역하고 있습니다. 각 지역의 문화적 특성과 현지 교회의 필요를 파악하여 
            효과적인 지원을 제공하고 있습니다.
          </OverviewText>
          
          <MissionStats>
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
              <div className="number">1,400+</div>
              <div className="label">도움받은 아이들</div>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon">
                <FaHandshake />
              </div>
              <div className="number">41</div>
              <div className="label">동역 교회</div>
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
              <div className="number">200+</div>
              <div className="label">동역자</div>
            </StatCard>
          </MissionStats>
        </OverviewContent>
      </MissionOverview>

      <MissionFields>
        <FieldsContent>
          <FieldsTitle>주요 선교지</FieldsTitle>
          <FieldsSubtitle>
            각 선교지의 특성과 필요에 맞는 맞춤형 지원을 제공합니다
          </FieldsSubtitle>
          
          <FieldsGrid>
            {missionFields.map((field, index) => (
              <FieldCard
                key={field.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="field-image">
                  {field.icon}
                </div>
                <div className="field-content">
                  <h3>{field.name}</h3>
                  <p>{field.description}</p>
                  <div className="field-stats">
                    {field.stats.map((stat, i) => (
                      <span key={i}>{stat}</span>
                    ))}
                  </div>
                </div>
              </FieldCard>
            ))}
          </FieldsGrid>
        </FieldsContent>
      </MissionFields>

      <TestimonialsSection>
        <TestimonialsContent>
          <TestimonialsTitle>현지에서의 소식</TestimonialsTitle>
          <TestimonialsSubtitle>
            선교지 현지에서 Bless Project와 함께하는 분들의 생생한 이야기
          </TestimonialsSubtitle>
          
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="quote">"{testimonial.quote}"</div>
                <div className="author">
                  <div className="avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="author-info">
                    <div className="name">{testimonial.author}</div>
                    <div className="location">{testimonial.location}</div>
                  </div>
                </div>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsContent>
      </TestimonialsSection>

      <PartnershipSection>
        <PartnershipContent>
          <PartnershipTitle>함께 동역하고 싶으신가요?</PartnershipTitle>
          <PartnershipText>
            새로운 선교지와의 동역, 또는 기존 선교지에 대한 추가 지원이 필요하시다면 
            언제든지 연락해주세요. 함께 선교지 교회학교의 성장을 돕고, 
            하나님의 사랑을 전할 수 있도록 도와드리겠습니다.
          </PartnershipText>
          <PartnershipButton>
            동역 문의하기
          </PartnershipButton>
        </PartnershipContent>
      </PartnershipSection>
    </MissionContainer>
  );
};

export default Mission;
