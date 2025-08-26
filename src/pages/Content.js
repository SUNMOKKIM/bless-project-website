import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaHeart, FaUpload, FaSearch, FaFilter, FaFile, FaTimes, FaStar, FaEye } from 'react-icons/fa';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const ContentContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: #f8f9fa;
`;

const ContentHeader = styled.div`
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 20px;
`;

const AuthSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const LoginButton = styled.button`
  background: #4285F4;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3367D6;
    transform: translateY(-2px);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .user-details {
    text-align: left;
    
    .name {
      font-weight: 600;
      color: #2C3E50;
    }
    
    .email {
      color: #7F8C8D;
      font-size: 0.9rem;
    }
  }
`;

const SearchSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #E9ECEF;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #FF6B35;
  }
`;

const SearchButton = styled.button`
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
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#FF6B35' : 'transparent'};
  color: ${props => props.active ? 'white' : '#FF6B35'};
  border: 2px solid #FF6B35;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FF6B35;
    color: white;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContentCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContentImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const ContentInfo = styled.div`
  padding: 1.5rem;
`;

const ContentTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2C3E50;
  margin-bottom: 0.5rem;
`;

const ContentDescription = styled.p`
  color: #7F8C8D;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContentStats = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #7F8C8D;
`;

const ContentActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: ${props => props.primary ? '#FF6B35' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#FF6B35'};
  border: 2px solid #FF6B35;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.primary ? '#E55A2B' : '#FF6B35'};
    color: white;
  }
`;

const UploadSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const UploadArea = styled.div`
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  background: #f8f9fa;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #FF6B35;
    background: #fff5f2;
  }
  
  &.drag-over {
    border-color: #FF6B35;
    background: #fff5f2;
    transform: scale(1.02);
  }
  
  .upload-icon {
    font-size: 3rem;
    color: #FF6B35;
    margin-bottom: 1rem;
  }
  
  .upload-text {
    color: #666;
    font-size: 1.1rem;
  }
  
  .file-input {
    display: none;
  }
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 1rem;
  
  .file-info {
    flex: 1;
    
    .file-name {
      font-weight: 600;
      color: #2C3E50;
    }
    
    .file-size {
      color: #666;
      font-size: 0.9rem;
    }
  }
  
  .remove-btn {
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: #c82333;
    }
  }
`;

const UploadForm = styled.form`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-top: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2C3E50;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #FF6B35;
      box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  background: #FF6B35;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e55a2b;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const RatingStars = styled.div`
  display: flex;
  gap: 2px;
  margin: 0.5rem 0;
  
  .star {
    cursor: pointer;
    color: #ddd;
    font-size: 1.2rem;
    transition: color 0.2s ease;
    
    &.filled {
      color: #FFD700;
    }
    
    &:hover {
      color: #FFD700;
    }
  }
`;

const RatingModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const RatingContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  
  h3 {
    margin-bottom: 1rem;
    color: #2C3E50;
  }
  
  .rating-input {
    margin: 1rem 0;
  }
  
  .comment-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin: 1rem 0;
    resize: vertical;
    min-height: 80px;
  }
  
  .modal-buttons {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
`;

const Content = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    category: '교재',
    language: '한국어'
  });
  const [isUploading, setIsUploading] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  
  const [contents, setContents] = useState([
    {
      id: 1,
      title: '주일학교 교재 - 창조 이야기',
      description: '어린이들이 쉽게 이해할 수 있는 창조 이야기 교재입니다.',
      category: '교재',
      downloads: 150,
      rating: 4.8,
      totalRatings: 25,
      language: '한국어',
      fileUrl: 'https://example.com/file1.pdf',
      likes: 45,
      likedBy: [],
      ratings: [
        { userId: 'user1', rating: 5, comment: '정말 좋은 교재입니다!' },
        { userId: 'user2', rating: 4, comment: '아이들이 좋아해요' }
      ]
    },
    {
      id: 2,
      title: '성경 퀴즈 게임',
      description: '재미있는 성경 퀴즈로 아이들의 성경 지식을 키워보세요.',
      category: '게임',
      downloads: 89,
      rating: 4.6,
      totalRatings: 18,
      language: '한국어',
      fileUrl: 'https://example.com/file2.pdf',
      likes: 32,
      likedBy: [],
      ratings: [
        { userId: 'user3', rating: 5, comment: '아이들이 재미있어해요' }
      ]
    },
    {
      id: 3,
      title: '찬양 가사집 - 영어',
      description: '영어권 선교지에서 사용할 수 있는 찬양 가사집입니다.',
      category: '찬양',
      downloads: 234,
      rating: 4.9,
      totalRatings: 42,
      language: '영어',
      fileUrl: 'https://example.com/file3.pdf',
      likes: 67,
      likedBy: [],
      ratings: [
        { userId: 'user4', rating: 5, comment: '완벽합니다!' }
      ]
    },
    {
      id: 4,
      title: '절기별 활동 프로그램',
      description: '크리스마스, 부활절 등 절기별로 활용할 수 있는 프로그램입니다.',
      category: '프로그램',
      downloads: 67,
      rating: 4.7,
      totalRatings: 15,
      language: '한국어',
      fileUrl: 'https://example.com/file4.pdf',
      likes: 28,
      likedBy: [],
      ratings: [
        { userId: 'user5', rating: 4, comment: '유용한 프로그램이에요' }
      ]
    }
  ]);

  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true);
      setUser({
        id: result.user.uid,
        name: result.user.displayName || '사용자',
        email: result.user.email || 'user@example.com',
        photoURL: result.user.photoURL || 'https://via.placeholder.com/40'
      });
    } catch (error) {
      console.error('로그인 오류:', error);
      alert(`로그인 오류: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUploadForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!uploadedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    if (!uploadForm.title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    setIsUploading(true);

    try {
      // 실제 파일 업로드 로직 (Firebase Storage 사용)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 새 콘텐츠 추가
      const newContent = {
        id: Date.now(),
        title: uploadForm.title,
        description: uploadForm.description,
        category: uploadForm.category,
        language: uploadForm.language,
        downloads: 0,
        rating: 0,
        totalRatings: 0,
        fileUrl: URL.createObjectURL(uploadedFile), // 임시 URL
        likes: 0,
        likedBy: [],
        ratings: []
      };

      setContents(prev => [newContent, ...prev]);
      
      // 폼 초기화
      setUploadForm({
        title: '',
        description: '',
        category: '교재',
        language: '한국어'
      });
      setUploadedFile(null);
      
      alert('콘텐츠가 성공적으로 업로드되었습니다!');
    } catch (error) {
      console.error('업로드 오류:', error);
      alert('업로드 중 오류가 발생했습니다.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = (content) => {
    if (!isLoggedIn) {
      alert('다운로드를 위해 로그인이 필요합니다.');
      return;
    }

    // 다운로드 수 증가
    setContents(prev => prev.map(c => 
      c.id === content.id ? { ...c, downloads: c.downloads + 1 } : c
    ));

    // 실제 파일 다운로드 (임시로 링크 생성)
    const link = document.createElement('a');
    link.href = content.fileUrl;
    link.download = content.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('다운로드가 시작되었습니다!');
  };

  const handleLike = (content) => {
    if (!isLoggedIn) {
      alert('좋아요를 위해 로그인이 필요합니다.');
      return;
    }

    setContents(prev => prev.map(c => {
      if (c.id === content.id) {
        const isLiked = c.likedBy.includes(user.id);
        if (isLiked) {
          // 좋아요 취소
          return {
            ...c,
            likes: c.likes - 1,
            likedBy: c.likedBy.filter(id => id !== user.id)
          };
        } else {
          // 좋아요 추가
          return {
            ...c,
            likes: c.likes + 1,
            likedBy: [...c.likedBy, user.id]
          };
        }
      }
      return c;
    }));
  };

  const openRatingModal = (content) => {
    if (!isLoggedIn) {
      alert('평점을 위해 로그인이 필요합니다.');
      return;
    }
    setSelectedContent(content);
    setShowRatingModal(true);
    setUserRating(0);
    setUserComment('');
  };

  const submitRating = () => {
    if (userRating === 0) {
      alert('평점을 선택해주세요.');
      return;
    }

    const newRating = {
      userId: user.id,
      rating: userRating,
      comment: userComment,
      userName: user.name
    };

    setContents(prev => prev.map(c => {
      if (c.id === selectedContent.id) {
        const existingRatingIndex = c.ratings.findIndex(r => r.userId === user.id);
        let newRatings;
        
        if (existingRatingIndex >= 0) {
          // 기존 평점 수정
          newRatings = [...c.ratings];
          newRatings[existingRatingIndex] = newRating;
        } else {
          // 새 평점 추가
          newRatings = [...c.ratings, newRating];
        }

        // 평균 평점 계산
        const totalRating = newRatings.reduce((sum, r) => sum + r.rating, 0);
        const averageRating = totalRating / newRatings.length;

        return {
          ...c,
          ratings: newRatings,
          rating: Math.round(averageRating * 10) / 10,
          totalRatings: newRatings.length
        };
      }
      return c;
    }));

    setShowRatingModal(false);
    alert('평점이 등록되었습니다!');
  };

  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || content.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const categories = ['all', '교재', '게임', '찬양', '프로그램', '리더십'];

  const isLiked = (content) => {
    return content.likedBy.includes(user?.id);
  };

  const getUserRating = (content) => {
    const userRating = content.ratings.find(r => r.userId === user?.id);
    return userRating ? userRating.rating : 0;
  };

  return (
    <ContentContainer>
      <ContentHeader>
        <HeaderTitle>콘텐츠 플랫폼</HeaderTitle>
        <HeaderSubtitle>
          선교지 교회학교를 위한 다양한 교육 자료를 공유하고 다운로드하세요
        </HeaderSubtitle>
      </ContentHeader>

      <ContentBody>
        <AuthSection>
          {!isLoggedIn ? (
            <div>
              <h3 style={{ marginBottom: '1rem', color: '#2C3E50' }}>
                콘텐츠를 업로드하고 다운로드하려면 로그인하세요
              </h3>
              <LoginButton onClick={handleGoogleLogin} disabled={loading}>
                {loading ? '로그인 중...' : 'Google로 로그인'}
              </LoginButton>
            </div>
          ) : (
            <div>
              <h3 style={{ marginBottom: '1rem', color: '#2C3E50' }}>
                환영합니다!
              </h3>
              <UserInfo>
                <img src={user.photoURL} alt={user.name} />
                <div className="user-details">
                  <div className="name">{user.name}</div>
                  <div className="email">{user.email}</div>
                </div>
              </UserInfo>
              <button 
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  color: '#FF6B35',
                  border: '2px solid #FF6B35',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  marginTop: '1rem',
                  cursor: 'pointer'
                }}
              >
                로그아웃
              </button>
            </div>
          )}
        </AuthSection>

        <SearchSection>
          <SearchBar>
            <SearchInput
              type="text"
              placeholder="콘텐츠를 검색하세요..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchButton>
              <FaSearch /> 검색
            </SearchButton>
          </SearchBar>
          
          <FilterSection>
            {categories.map(category => (
              <FilterButton
                key={category}
                active={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? '전체' : category}
              </FilterButton>
            ))}
          </FilterSection>
        </SearchSection>

        {isLoggedIn && (
          <UploadSection>
            <h3 style={{ marginBottom: '1rem', color: '#2C3E50' }}>
              새로운 콘텐츠 업로드
            </h3>
            
            <UploadArea
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-input').click()}
            >
              <input
                id="file-input"
                type="file"
                className="file-input"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.mp4,.mp3"
              />
              <div className="upload-icon">
                <FaUpload />
              </div>
              <div className="upload-text">
                파일을 드래그하거나 클릭하여 업로드하세요
                <br />
                <small style={{ color: '#999' }}>
                  PDF, Word, PowerPoint, 이미지, 비디오, 오디오 파일 지원
                </small>
              </div>
            </UploadArea>

            {uploadedFile && (
              <FilePreview>
                <FaFile style={{ fontSize: '2rem', color: '#FF6B35' }} />
                <div className="file-info">
                  <div className="file-name">{uploadedFile.name}</div>
                  <div className="file-size">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
                <button className="remove-btn" onClick={removeFile}>
                  <FaTimes />
                </button>
              </FilePreview>
            )}

            {uploadedFile && (
              <UploadForm onSubmit={handleSubmit}>
                <FormGroup>
                  <label htmlFor="title">콘텐츠 제목 *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={uploadForm.title}
                    onChange={handleInputChange}
                    placeholder="예: 주일학교 교재 - 창조 이야기"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="description">설명</label>
                  <textarea
                    id="description"
                    name="description"
                    value={uploadForm.description}
                    onChange={handleInputChange}
                    placeholder="콘텐츠에 대한 자세한 설명을 입력하세요"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="category">카테고리</label>
                  <select
                    id="category"
                    name="category"
                    value={uploadForm.category}
                    onChange={handleInputChange}
                  >
                    <option value="교재">교재</option>
                    <option value="게임">게임</option>
                    <option value="찬양">찬양</option>
                    <option value="프로그램">프로그램</option>
                    <option value="리더십">리더십</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="language">언어</label>
                  <select
                    id="language"
                    name="language"
                    value={uploadForm.language}
                    onChange={handleInputChange}
                  >
                    <option value="한국어">한국어</option>
                    <option value="영어">영어</option>
                    <option value="스페인어">스페인어</option>
                    <option value="프랑스어">프랑스어</option>
                    <option value="중국어">중국어</option>
                  </select>
                </FormGroup>

                <SubmitButton type="submit" disabled={isUploading}>
                  {isUploading ? '업로드 중...' : '콘텐츠 업로드'}
                </SubmitButton>
              </UploadForm>
            )}
          </UploadSection>
        )}

        <ContentGrid>
          {filteredContents.map((content, index) => (
            <ContentCard
              key={content.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ContentImage>
                {content.category === '교재' && '📚'}
                {content.category === '게임' && '🎮'}
                {content.category === '찬양' && '🎵'}
                {content.category === '프로그램' && '📅'}
                {content.category === '리더십' && '👥'}
              </ContentImage>
              <ContentInfo>
                <ContentTitle>{content.title}</ContentTitle>
                <ContentDescription>{content.description}</ContentDescription>
                <ContentMeta>
                  <ContentStats>
                    <span>⭐ {content.rating} ({content.totalRatings}명)</span>
                    <span>📥 {content.downloads}</span>
                    <span>🌐 {content.language}</span>
                  </ContentStats>
                </ContentMeta>
                <ContentActions>
                  <ActionButton primary onClick={() => handleDownload(content)}>
                    <FaDownload /> 다운로드
                  </ActionButton>
                  <ActionButton 
                    onClick={() => handleLike(content)}
                    style={{ color: isLiked(content) ? '#e74c3c' : '#666' }}
                  >
                    <FaHeart /> {content.likes}
                  </ActionButton>
                  <ActionButton onClick={() => openRatingModal(content)}>
                    <FaStar /> 평점
                  </ActionButton>
                </ContentActions>
              </ContentInfo>
            </ContentCard>
          ))}
        </ContentGrid>
      </ContentBody>

      {/* 평점 모달 */}
      {showRatingModal && (
        <RatingModal onClick={() => setShowRatingModal(false)}>
          <RatingContent onClick={(e) => e.stopPropagation()}>
            <h3>{selectedContent.title} - 평점 남기기</h3>
            
            <div className="rating-input">
              <label>평점:</label>
              <RatingStars>
                {[1, 2, 3, 4, 5].map(star => (
                  <FaStar
                    key={star}
                    className={`star ${star <= userRating ? 'filled' : ''}`}
                    onClick={() => setUserRating(star)}
                  />
                ))}
              </RatingStars>
              <span>{userRating}/5점</span>
            </div>

            <textarea
              className="comment-input"
              placeholder="의견을 남겨주세요 (선택사항)"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
            />

            <div className="modal-buttons">
              <button
                onClick={() => setShowRatingModal(false)}
                style={{
                  background: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                취소
              </button>
              <button
                onClick={submitRating}
                style={{
                  background: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                평점 등록
              </button>
            </div>
          </RatingContent>
        </RatingModal>
      )}
    </ContentContainer>
  );
};

export default Content;
