import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaYoutube, FaHeart, FaCreditCard, FaPlus, FaSearch, FaEye, FaComment, FaEdit, FaTrash, FaThumbsUp, FaReply, FaCloud, FaUser, FaClock as FaTime, FaSave, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { auth, qaService } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

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

// ContactForm 관련 스타일 컴포넌트들을 모두 제거하고 Q&A 관련 스타일만 유지

const QASection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const QATitle = styled.h2`
  color: #2C3E50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const QASubtitle = styled.p`
  color: #7F8C8D;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const QAControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #F8F9FA;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  flex: 1;
  max-width: 400px;
  
  input {
    border: none;
    background: transparent;
    outline: none;
    flex: 1;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

const WriteButton = styled.button`
  background: #FF6B35;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #E55A2B;
    transform: translateY(-2px);
  }
`;

const QAList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QAItem = styled.div`
  border: 1px solid #E9ECEF;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #FF6B35;
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.1);
  }
`;

const QAHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const QATitleText = styled.h3`
  color: #2C3E50;
  font-size: 1.2rem;
  margin: 0;
  flex: 1;
`;

const QAMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #7F8C8D;
  font-size: 0.9rem;
`;

const QAContent = styled.p`
  color: #5A6C7D;
  margin: 0;
  line-height: 1.6;
`;

const QATags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const QATag = styled.span`
  background: #F8F9FA;
  color: #5A6C7D;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    margin: 0;
    color: #2C3E50;
  }
  
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #7F8C8D;
    
    &:hover {
      color: #2C3E50;
    }
  }
`;

const QAFormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2C3E50;
    font-weight: 600;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px;
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
    min-height: 120px;
    resize: vertical;
  }
`;

const QASubmitButton = styled.button`
  background: #FF6B35;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: #E55A2B;
  }
  
  &:disabled {
    background: #BDC3C7;
    cursor: not-allowed;
  }
`;

const QADetailModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const QADetailContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

const QAHeaderDetail = styled.div`
  border-bottom: 2px solid #E9ECEF;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`;

const QATitleDetail = styled.h2`
  color: #2C3E50;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
`;

const QAMetaDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7F8C8D;
  font-size: 0.9rem;
`;

const QAContentDetail = styled.div`
  color: #5A6C7D;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const QAActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #F8F9FA;
  border-radius: 8px;
`;

const ActionButton = styled.button`
  background: ${props => props.primary ? '#FF6B35' : 'white'};
  color: ${props => props.primary ? 'white' : '#FF6B35'};
  border: 2px solid #FF6B35;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
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

const SyncStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${props => props.synced ? '#27AE60' : '#F39C12'};
  margin-top: 0.5rem;
`;

// 댓글 관련 스타일 컴포넌트 추가
const CommentsSection = styled.div`
  margin-top: 2rem;
`;

const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  input {
    flex: 1;
    padding: 10px;
    border: 2px solid #E9ECEF;
    border-radius: 6px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #FF6B35;
    }
  }
  
  button {
    background: #FF6B35;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
      background: #E55A2B;
    }
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentItem = styled.div`
  background: #F8F9FA;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #FF6B35;
  margin-bottom: 1rem;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  
  .author {
    font-weight: 600;
    color: #2C3E50;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .date {
    color: #7F8C8D;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const CommentContent = styled.p`
  color: #5A6C7D;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
`;

const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const CommentLikeButton = styled.button`
  background: ${props => props.liked ? '#FF6B35' : 'transparent'};
  color: ${props => props.liked ? 'white' : '#FF6B35'};
  border: 1px solid #FF6B35;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  &:hover {
    background: #FF6B35;
    color: white;
  }
`;

const EditForm = styled.form`
  margin-bottom: 1rem;
`;

const EditInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid #E9ECEF;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 0.5rem;
  
  &:focus {
    outline: none;
    border-color: #FF6B35;
  }
`;

const EditTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 2px solid #E9ECEF;
  border-radius: 6px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  margin-bottom: 0.5rem;
  
  &:focus {
    outline: none;
    border-color: #FF6B35;
  }
`;

const EditButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EditButton = styled.button`
  background: ${props => props.primary ? '#FF6B35' : '#6C757D'};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

// 배너 스타일 컴포넌트 추가
const BannerSection = styled.div`
  background: linear-gradient(135deg, #87CEEB 0%, #20B2AA 100%);
  border-radius: 16px;
  padding: 3rem 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 8px 32px rgba(32, 178, 170, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%);
    pointer-events: none;
  }
`;

const BannerLogo = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #1E3A8A 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BannerSlogan = styled.p`
  font-size: 1.3rem;
  color: white;
  margin: 0;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Contact = () => {
  const [user, loading] = useAuthState(auth);
  const [qaList, setQaList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedQA, setSelectedQA] = useState(null);
  const [newQA, setNewQA] = useState({ title: '', content: '', category: '일반' });
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [editingQA, setEditingQA] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', content: '', category: '' });

  // 네트워크 상태 모니터링
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 초기 Q&A 목록 로드
  useEffect(() => {
    if (isOnline) {
      loadQAList();
    }
  }, [isOnline]);

  const loadQAList = async () => {
    try {
      setIsLoading(true);
      const data = await qaService.getQAList();
      setQaList(data);
    } catch (error) {
      console.error('Error loading QA list:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleWriteQA = () => {
    if (!user) {
      alert('Q&A를 작성하려면 로그인이 필요합니다.');
      return;
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewQA({
      title: '',
      content: '',
      category: '일반'
    });
  };

  const handleSubmitQA = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // 1. 즉시 로컬에 추가
      const newQAItem = {
        id: `local_${Date.now()}`,
        title: newQA.title,
        content: newQA.content,
        category: newQA.category,
        author: user?.displayName || user?.email || '사용자',
        authorId: user?.uid,
        authorEmail: user?.email,
        date: new Date().toISOString().split('T')[0],
        views: 0,
        comments: 0,
        likes: 0,
        likedBy: [],
        isPending: true,
        createdAt: new Date()
      };
      
      setQaList(prev => [newQAItem, ...prev]);
      handleCloseModal();
      
      // 2. 백그라운드에서 Firebase 동기화
      if (isOnline) {
        syncToFirebase(newQAItem);
      }
      
      alert('Q&A가 성공적으로 등록되었습니다!');
      
    } catch (error) {
      console.error('Error:', error);
      alert('오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const syncToFirebase = async (localQA) => {
    try {
      const firebaseId = await qaService.addQA({
        title: localQA.title,
        content: localQA.content,
        category: localQA.category,
        author: localQA.author,
        authorId: localQA.authorId,
        authorEmail: localQA.authorEmail
      });
      
      // 성공 시 로컬 상태 업데이트
      setQaList(prev => prev.map(qa => 
        qa.id === localQA.id 
          ? { ...qa, id: firebaseId, isPending: false, synced: true }
          : qa
      ));
      
      console.log('Firebase 동기화 완료');
    } catch (error) {
      console.error('Firebase 동기화 실패:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQA(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Q&A 클릭 시 댓글 로딩 함수 수정
  const handleQAClick = async (qa) => {
    setSelectedQA(qa);
    setShowDetailModal(true);
    
    // 조회수 증가
    if (qa.id && !qa.id.startsWith('local_')) {
      try {
        await qaService.incrementViews(qa.id);
        await loadQAList();
      } catch (error) {
        console.error('Error incrementing views:', error);
      }
    }
    
    // 댓글 로딩 - 항상 Firebase에서 최신 데이터 가져오기
    if (qa.id && !qa.id.startsWith('local_')) {
      try {
        console.log('댓글 로딩 시작:', qa.id);
        const commentData = await qaService.getComments(qa.id);
        console.log('로딩된 댓글:', commentData);
        setComments(commentData);
      } catch (error) {
        console.error('Error loading comments:', error);
        setComments([]); // 오류 시 빈 배열로 초기화
      }
    } else {
      // 로컬 Q&A인 경우 빈 댓글 배열
      setComments([]);
    }
  };

  // 댓글 새로고침 함수 추가
  const refreshComments = async () => {
    if (selectedQA && selectedQA.id && !selectedQA.id.startsWith('local_')) {
      try {
        console.log('댓글 새로고침 시작');
        const commentData = await qaService.getComments(selectedQA.id);
        console.log('새로고침된 댓글:', commentData);
        setComments(commentData);
      } catch (error) {
        console.error('Error refreshing comments:', error);
      }
    }
  };

  // 모달 닫을 때 댓글 상태 초기화
  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
    setSelectedQA(null);
    setComments([]); // 댓글 상태 완전 초기화
    setNewComment('');
    setEditingQA(null);
    setEditingComment(null);
  };

  // 댓글 작성 함수
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    try {
      setCommentSubmitting(true);
      
      // 1. 즉시 로컬에 댓글 추가
      const newCommentItem = {
        id: `local_comment_${Date.now()}`,
        content: newComment,
        author: user?.displayName || user?.email || '사용자',
        authorId: user?.uid,
        authorEmail: user?.email,
        createdAt: new Date(),
        likes: 0,
        likedBy: [],
        isPending: true
      };
      
      // 로컬 상태에 즉시 추가
      setComments(prev => [...prev, newCommentItem]);
      setQaList(prev => prev.map(qa => 
        qa.id === selectedQA.id 
          ? { ...qa, comments: (qa.comments || 0) + 1 }
          : qa
      ));
      setSelectedQA(prev => ({
        ...prev,
        comments: (prev.comments || 0) + 1
      }));
      
      setNewComment('');
      
      // 2. Firebase 동기화
      if (isOnline && selectedQA.id && !selectedQA.id.startsWith('local_')) {
        try {
          await syncCommentToFirebase(newCommentItem);
        } catch (error) {
          console.error('댓글 동기화 실패:', error);
        }
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('댓글 등록 중 오류가 발생했습니다.');
    } finally {
      setCommentSubmitting(false);
    }
  };

  // 댓글 Firebase 동기화
  const syncCommentToFirebase = async (localComment) => {
    try {
      const commentData = {
        content: localComment.content,
        author: localComment.author,
        authorId: localComment.authorId,
        authorEmail: localComment.authorEmail
      };
      
      const firebaseId = await qaService.addComment(selectedQA.id, commentData);
      console.log('댓글 Firebase 동기화 완료:', firebaseId);
      
      // 성공 시 로컬 상태 업데이트
      setComments(prev => prev.map(comment => 
        comment.id === localComment.id 
          ? { ...comment, id: firebaseId, isPending: false, synced: true }
          : comment
      ));
      
    } catch (error) {
      console.error('댓글 Firebase 동기화 실패:', error);
      throw error;
    }
  };

  // 댓글 좋아요
  const handleCommentLike = async (commentId) => {
    if (!user) {
      alert('좋아요를 누르려면 로그인이 필요합니다.');
      return;
    }
    
    try {
      const comment = comments.find(c => c.id === commentId);
      if (!comment) return;
      
      const isLiked = isLikedByUser(comment, user.uid);
      
      setComments(prev => prev.map(c => 
        c.id === commentId
          ? {
              ...c,
              likes: isLiked ? (c.likes || 0) - 1 : (c.likes || 0) + 1,
              likedBy: isLiked 
                ? (c.likedBy || []).filter(id => id !== user.uid)
                : [...(c.likedBy || []), user.uid]
            }
          : c
      ));
      
      // Firebase 동기화
      if (selectedQA && selectedQA.id && !selectedQA.id.startsWith('local_') && 
          commentId && !commentId.startsWith('local_comment_')) {
        try {
          await qaService.toggleCommentLike(selectedQA.id, commentId, user.uid);
        } catch (error) {
          console.error('Firebase 댓글 좋아요 동기화 실패:', error);
        }
      }
      
    } catch (error) {
      console.error('Error toggling comment like:', error);
      alert('댓글 좋아요 처리 중 오류가 발생했습니다.');
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId) => {
    if (!window.confirm('정말로 이 댓글을 삭제하시겠습니까?')) return;
    
    try {
      // 즉시 로컬에서 제거
      setComments(prev => prev.filter(comment => comment.id !== commentId));
      setQaList(prev => prev.map(qa => 
        qa.id === selectedQA.id 
          ? { ...qa, comments: Math.max(0, (qa.comments || 0) - 1) }
          : qa
      ));
      setSelectedQA(prev => ({
        ...prev,
        comments: Math.max(0, (prev.comments || 0) - 1)
      }));
      
      // Firebase 동기화
      if (selectedQA && selectedQA.id && !selectedQA.id.startsWith('local_') && 
          commentId && !commentId.startsWith('local_comment_')) {
        try {
          await qaService.deleteComment(selectedQA.id, commentId);
        } catch (error) {
          console.error('Firebase 댓글 삭제 실패:', error);
        }
      }
      
      alert('댓글이 삭제되었습니다.');
      
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('댓글 삭제 중 오류가 발생했습니다.');
    }
  };

  // Q&A 편집 시작
  const startEditQA = (qa) => {
    setEditingQA(qa.id);
    setEditForm({
      title: qa.title,
      content: qa.content,
      category: qa.category
    });
  };

  // Q&A 편집 취소
  const cancelEditQA = () => {
    setEditingQA(null);
    setEditForm({
      title: '',
      content: '',
      category: ''
    });
  };

  // Q&A 편집 저장
  const saveEditQA = async () => {
    try {
      const updatedQA = {
        ...selectedQA,
        title: editForm.title,
        content: editForm.content,
        category: editForm.category
      };
      
      // 로컬 상태 업데이트
      setQaList(prev => prev.map(qa => 
        qa.id === selectedQA.id ? updatedQA : qa
      ));
      setSelectedQA(updatedQA);
      setEditingQA(null);
      
      // Firebase 동기화
      if (selectedQA.id && !selectedQA.id.startsWith('local_')) {
        try {
          await qaService.updateQA(selectedQA.id, {
            title: editForm.title,
            content: editForm.content,
            category: editForm.category
          });
        } catch (error) {
          console.error('Firebase 업데이트 실패:', error);
        }
      }
      
      alert('Q&A가 수정되었습니다!');
      
    } catch (error) {
      console.error('Error updating QA:', error);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  // 댓글 편집 시작
  const startEditComment = (comment) => {
    setEditingComment(comment.id);
    setEditForm({
      title: '',
      content: comment.content,
      category: ''
    });
  };

  // 댓글 편집 취소
  const cancelEditComment = () => {
    setEditingComment(null);
    setEditForm({
      title: '',
      content: '',
      category: ''
    });
  };

  // 댓글 편집 저장
  const saveEditComment = async (commentId) => {
    try {
      const updatedComment = {
        content: editForm.content
      };
      
      setComments(prev => prev.map(comment => 
        comment.id === commentId
          ? { ...comment, content: editForm.content }
          : comment
      ));
      
      setEditingComment(null);
      
      // Firebase 동기화
      if (selectedQA && selectedQA.id && !selectedQA.id.startsWith('local_') && 
          commentId && !commentId.startsWith('local_comment_')) {
        try {
          await qaService.updateComment(selectedQA.id, commentId, updatedComment);
        } catch (error) {
          console.error('Firebase 댓글 업데이트 실패:', error);
        }
      }
      
      alert('댓글이 수정되었습니다!');
      
    } catch (error) {
      console.error('Error updating comment:', error);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  // Q&A 삭제 함수에 디버깅 로그 추가
  const handleDeleteQA = async (qaId) => {
    console.log('삭제 시도:', { qaId, user: user?.uid, authorId: selectedQA?.authorId });
    
    if (!window.confirm('정말로 이 Q&A를 삭제하시겠습니까?')) return;
    
    try {
      // 1. 즉시 로컬에서 제거
      setQaList(prev => {
        console.log('삭제 전 Q&A 목록:', prev.length);
        const filtered = prev.filter(qa => qa.id !== qaId);
        console.log('삭제 후 Q&A 목록:', filtered.length);
        return filtered;
      });
      
      handleCloseDetailModal();
      
      // 2. Firebase에서 삭제
      if (qaId && !qaId.startsWith('local_')) {
        try {
          await qaService.deleteQA(qaId);
          console.log('Firebase에서 Q&A 삭제 완료');
        } catch (error) {
          console.error('Firebase Q&A 삭제 실패:', error);
        }
      }
      
      alert('Q&A가 삭제되었습니다.');
      
    } catch (error) {
      console.error('Error deleting QA:', error);
      alert('Q&A 삭제 중 오류가 발생했습니다.');
    }
  };

  // 좋아요 토글 함수 추가
  const handleLike = async (qaId) => {
    if (!user) {
      alert('좋아요를 누르려면 로그인이 필요합니다.');
      return;
    }
    
    try {
      const isLiked = isLikedByUser(selectedQA, user.uid);
      
      // 즉시 로컬 상태 업데이트
      setQaList(prev => prev.map(qa => 
        qa.id === qaId 
          ? {
              ...qa,
              likes: isLiked ? (qa.likes || 0) - 1 : (qa.likes || 0) + 1,
              likedBy: isLiked 
                ? (qa.likedBy || []).filter(id => id !== user.uid)
                : [...(qa.likedBy || []), user.uid]
            }
          : qa
      ));
      
      setSelectedQA(prev => ({
        ...prev,
        likes: isLiked ? (prev.likes || 0) - 1 : (prev.likes || 0) + 1,
        likedBy: isLiked 
          ? (prev.likedBy || []).filter(id => id !== user.uid)
          : [...(prev.likedBy || []), user.uid]
      }));
      
      // Firebase 동기화
      if (qaId && !qaId.startsWith('local_')) {
        try {
          await qaService.toggleLike(qaId, user.uid);
        } catch (error) {
          console.error('Firebase 좋아요 동기화 실패:', error);
        }
      }
      
    } catch (error) {
      console.error('Error toggling like:', error);
      alert('좋아요 처리 중 오류가 발생했습니다.');
    }
  };

  // 사용자 권한 확인 함수들 추가
  const canEditOrDelete = (item) => {
    if (!user) return false;
    
    return (
      user.uid === item.authorId ||
      user.email === item.authorEmail ||
      (item.authorId && user.uid === item.authorId) ||
      (item.author && user.displayName === item.author)
    );
  };

  const canEditQA = (qa) => {
    return canEditOrDelete(qa);
  };

  const canEditComment = (comment) => {
    return canEditOrDelete(comment);
  };

  // 좋아요 상태 확인 함수 추가
  const isLikedByUser = (item, userId) => {
    return item.likedBy && item.likedBy.includes(userId);
  };

  // useEffect로 댓글 상태 모니터링
  useEffect(() => {
    console.log('댓글 상태 변경:', comments);
  }, [comments]);

  // useEffect로 선택된 QA 상태 모니터링
  useEffect(() => {
    console.log('선택된 QA 변경:', selectedQA);
  }, [selectedQA]);

  // 필터링된 Q&A 목록
  const filteredQAList = qaList.filter(qa => 
    qa.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    qa.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    qa.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 날짜 포맷팅 함수
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

      {/* Bless Project 배너 추가 */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <BannerSection>
          <BannerLogo>Bless Project</BannerLogo>
          <BannerSlogan>
            선교지의 필요한 부분을 동역하고자 모인 청년 선교 동역 모임
          </BannerSlogan>
        </BannerSection>
      </div>

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
              <a href="mailto:2020blessproject@gmail.com">2020blessproject@gmail.com</a>
            </div>
          </InfoItem>
          
          <InfoItem>
            <div className="icon">
              <FaCreditCard />
            </div>
            <div className="info">
              <h3>후원 계좌</h3>
              <p>카카오뱅크 7979-23-37167<br />예금주: 배수정<br />
              <small style={{color: '#FF6B35', fontWeight: 'bold'}}>후원금 100% 선교지를 위해 사용됩니다</small></p>
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
              <a href="https://www.youtube.com/@BlessProject" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FaYoutube />
              </a>
            </div>
          </SocialLinks>
        </ContactInfo>

        <QASection>
          <QATitle>Q&A or 건의사항</QATitle>
          <QASubtitle>
            궁금한 점이나 건의사항이 있으시면 언제든지 질문해주세요. 
            다른 사용자들과 함께 공유하고 답변을 받아보세요.
          </QASubtitle>
          
          <QAControls>
            <SearchBox>
              <FaSearch color="#7F8C8D" />
              <input
                type="text"
                placeholder="Q&A 검색..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </SearchBox>
            <WriteButton onClick={handleWriteQA}>
              <FaPlus />
              글쓰기
            </WriteButton>
          </QAControls>
          
          {isLoading ? (
            <div style={{textAlign: 'center', padding: '2rem'}}>로딩 중...</div>
          ) : (
            <QAList>
              {filteredQAList.map((qa) => (
                <QAItem key={qa.id} onClick={() => handleQAClick(qa)}>
                  <QAHeader>
                    <QATitleText>{qa.title}</QATitleText>
                    <QAMeta>
                      <span><FaEye /> {qa.views || 0}</span>
                      <span><FaComment /> {qa.comments || 0}</span>
                      <span><FaThumbsUp /> {qa.likes || 0}</span>
                      <span>{formatDate(qa.createdAt)}</span>
                    </QAMeta>
                  </QAHeader>
                  <QAContent>{qa.content.substring(0, 100)}...</QAContent>
                  <QATags>
                    <QATag>{qa.category}</QATag>
                    <QATag>{qa.author}</QATag>
                    {qa.isPending && (
                      <QATag style={{background: '#F39C12', color: 'white'}}>
                        <FaCloud /> 동기화 중
                      </QATag>
                    )}
                    {qa.synced && (
                      <QATag style={{background: '#27AE60', color: 'white'}}>
                        <FaCloud /> 동기화 완료
                      </QATag>
                    )}
                  </QATags>
                </QAItem>
              ))}
            </QAList>
          )}
        </QASection>

        {/* Q&A 작성 모달 */}
        {showModal && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <h2>새로운 Q&A 작성</h2>
                <button onClick={handleCloseModal}>&times;</button>
              </ModalHeader>
              
              <form onSubmit={handleSubmitQA}>
                <QAFormGroup>
                  <label htmlFor="title">제목 *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newQA.title}
                    onChange={handleInputChange}
                    required
                    placeholder="질문이나 건의사항의 제목을 입력하세요"
                  />
                </QAFormGroup>
                
                <QAFormGroup>
                  <label htmlFor="category">카테고리</label>
                  <select
                    id="category"
                    name="category"
                    value={newQA.category}
                    onChange={handleInputChange}
                  >
                    <option value="일반">일반</option>
                    <option value="동역">동역</option>
                    <option value="콘텐츠">콘텐츠</option>
                    <option value="후원">후원</option>
                    <option value="기술지원">기술지원</option>
                    <option value="건의사항">건의사항</option>
                  </select>
                </QAFormGroup>
                
                <QAFormGroup>
                  <label htmlFor="content">내용 *</label>
                  <textarea
                    id="content"
                    name="content"
                    value={newQA.content}
                    onChange={handleInputChange}
                    required
                    placeholder="질문이나 건의사항을 자세히 작성해주세요"
                  />
                </QAFormGroup>
                
                <QASubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? '등록 중...' : '등록하기'}
                </QASubmitButton>
              </form>
            </ModalContent>
          </Modal>
        )}

        {/* Q&A 상세보기 모달 */}
        {showDetailModal && selectedQA && (
          <QADetailModal>
            <QADetailContent>
              <QAHeaderDetail>
                <QATitleDetail>{selectedQA.title}</QATitleDetail>
                <QAMetaDetail>
                  <div>
                    <span><FaUser /> {selectedQA.author}</span>
                    <span style={{marginLeft: '1rem'}}>카테고리: {selectedQA.category}</span>
                  </div>
                  <div>
                    <span><FaEye /> {selectedQA.views || 0}</span>
                    <span style={{marginLeft: '1rem'}}><FaComment /> {selectedQA.comments || 0}</span>
                    <span style={{marginLeft: '1rem'}}><FaThumbsUp /> {selectedQA.likes || 0}</span>
                    <span style={{marginLeft: '1rem'}}><FaTime /> {formatDate(selectedQA.createdAt)}</span>
                  </div>
                </QAMetaDetail>
              </QAHeaderDetail>
              
              {editingQA === selectedQA.id ? (
                <EditForm>
                  <EditInput
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="제목"
                  />
                  <EditTextarea
                    value={editForm.content}
                    onChange={(e) => setEditForm(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="내용"
                  />
                  <select
                    value={editForm.category}
                    onChange={(e) => setEditForm(prev => ({ ...prev, category: e.target.value }))}
                    style={{width: '100%', padding: '8px', marginBottom: '0.5rem'}}
                  >
                    <option value="일반">일반</option>
                    <option value="동역">동역</option>
                    <option value="콘텐츠">콘텐츠</option>
                    <option value="후원">후원</option>
                    <option value="기술지원">기술지원</option>
                    <option value="건의사항">건의사항</option>
                  </select>
                  <EditButtons>
                    <EditButton primary onClick={saveEditQA}>
                      <FaSave /> 저장
                    </EditButton>
                    <EditButton onClick={cancelEditQA}>
                      <FaTimes /> 취소
                    </EditButton>
                  </EditButtons>
                </EditForm>
              ) : (
                <QAContentDetail>{selectedQA.content}</QAContentDetail>
              )}
              
              <QAActions>
                <ActionButton 
                  onClick={() => handleLike(selectedQA.id)}
                  primary={isLikedByUser(selectedQA, user?.uid)}
                >
                  <FaThumbsUp />
                  {isLikedByUser(selectedQA, user?.uid) ? '좋아요 취소' : '좋아요'}
                </ActionButton>
                
                {/* 권한 확인 함수 사용 */}
                {canEditQA(selectedQA) && (
                  <>
                    <ActionButton onClick={() => startEditQA(selectedQA)}>
                      <FaEdit />
                      수정
                    </ActionButton>
                    <ActionButton onClick={() => handleDeleteQA(selectedQA.id)}>
                      <FaTrash />
                      삭제
                    </ActionButton>
                  </>
                )}
              </QAActions>
              
              {/* 댓글 섹션 추가 */}
              {selectedQA.id && !selectedQA.id.startsWith('local_') && (
                <CommentsSection>
                  <h3>댓글 ({comments.length})</h3>
                  
                  {/* 댓글 작성 폼 */}
                  {user && (
                    <CommentForm onSubmit={handleSubmitComment}>
                      <input
                        type="text"
                        placeholder="댓글을 입력하세요..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        disabled={commentSubmitting}
                      />
                      <button type="submit" disabled={commentSubmitting}>
                        {commentSubmitting ? '작성 중...' : '댓글 작성'}
                      </button>
                    </CommentForm>
                  )}
                  
                  {/* 댓글 목록 */}
                  <CommentList>
                    {comments.map((comment) => (
                      <CommentItem key={comment.id}>
                        <CommentHeader>
                          <span className="author">
                            <FaUser />
                            {comment.author}
                          </span>
                          <span className="date">
                            <FaTime />
                            {formatDate(comment.createdAt)}
                          </span>
                        </CommentHeader>
                        
                        {editingComment === comment.id ? (
                          <EditForm>
                            <EditTextarea
                              value={editForm.content}
                              onChange={(e) => setEditForm(prev => ({ ...prev, content: e.target.value }))}
                              placeholder="댓글 내용"
                            />
                            <EditButtons>
                              <EditButton primary onClick={() => saveEditComment(comment.id)}>
                                <FaSave /> 저장
                              </EditButton>
                              <EditButton onClick={cancelEditComment}>
                                <FaTimes /> 취소
                              </EditButton>
                            </EditButtons>
                          </EditForm>
                        ) : (
                          <CommentContent>{comment.content}</CommentContent>
                        )}
                        
                        <CommentActions>
                          <CommentLikeButton
                            liked={isLikedByUser(comment, user?.uid)}
                            onClick={() => handleCommentLike(comment.id)}
                          >
                            <FaThumbsUp />
                            {comment.likes || 0}
                          </CommentLikeButton>
                          
                          {/* 댓글 권한 확인 함수 사용 */}
                          {canEditComment(comment) && (
                            <>
                              <ActionButton 
                                onClick={() => startEditComment(comment)}
                                style={{fontSize: '0.8rem', padding: '4px 8px'}}
                              >
                                <FaEdit />
                                수정
                              </ActionButton>
                              <ActionButton 
                                onClick={() => handleDeleteComment(comment.id)}
                                style={{fontSize: '0.8rem', padding: '4px 8px'}}
                              >
                                <FaTrash />
                                삭제
                              </ActionButton>
                            </>
                          )}
                          {comment.isPending && (
                            <small style={{color: '#F39C12'}}>
                              <FaCloud /> 동기화 중
                            </small>
                          )}
                        </CommentActions>
                      </CommentItem>
                    ))}
                  </CommentList>
                </CommentsSection>
              )}
              
              <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <ActionButton onClick={handleCloseDetailModal}>
                  닫기
                </ActionButton>
              </div>
            </QADetailContent>
          </QADetailModal>
        )}
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
