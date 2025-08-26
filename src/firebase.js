import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where, orderBy, limit, serverTimestamp, increment, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDamcmKfZ7RA1ni7qTndJ_Cgz8YDP7uQ3Y",
  authDomain: "bless-project-3953a.firebaseapp.com",
  projectId: "bless-project-3953a",
  storageBucket: "bless-project-3953a.firebasestorage.app",
  messagingSenderId: "1059887410995",
  appId: "1:1059887410995:web:c5348affb70930d23f5846",
  measurementId: "G-EZWXJVNZVL"
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Q&A 관련 완벽한 서비스
export const qaService = {
  // Q&A 목록 가져오기
  async getQAList() {
    try {
      const qaRef = collection(db, 'qa');
      const q = query(qaRef, orderBy('createdAt', 'desc'), limit(50));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      }));
    } catch (error) {
      console.error('Error getting QA list:', error);
      throw error;
    }
  },

  // 새 Q&A 추가
  async addQA(qaData) {
    try {
      const qaRef = collection(db, 'qa');
      const docRef = await addDoc(qaRef, {
        ...qaData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        views: 0,
        comments: 0,
        likes: 0,
        likedBy: []
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding QA:', error);
      throw error;
    }
  },

  // Q&A 조회수 증가
  async incrementViews(qaId) {
    try {
      const qaRef = doc(db, 'qa', qaId);
      await updateDoc(qaRef, {
        views: increment(1)
      });
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  },

  // Q&A 수정
  async updateQA(qaId, updateData) {
    try {
      const qaRef = doc(db, 'qa', qaId);
      await updateDoc(qaRef, {
        ...updateData,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating QA:', error);
      throw error;
    }
  },

  // Q&A 삭제
  async deleteQA(qaId) {
    try {
      const qaRef = doc(db, 'qa', qaId);
      await deleteDoc(qaRef);
    } catch (error) {
      console.error('Error deleting QA:', error);
      throw error;
    }
  },

  // 좋아요 토글 (완벽 구현)
  async toggleLike(qaId, userId) {
    try {
      const qaRef = doc(db, 'qa', qaId);
      const qaDoc = await getDoc(qaRef);
      
      if (!qaDoc.exists()) {
        throw new Error('QA not found');
      }
      
      const qaData = qaDoc.data();
      const likedBy = qaData.likedBy || [];
      const isLiked = likedBy.includes(userId);
      
      if (isLiked) {
        // 좋아요 취소
        await updateDoc(qaRef, {
          likes: increment(-1),
          likedBy: arrayRemove(userId)
        });
        return false; // 좋아요 취소됨
      } else {
        // 좋아요 추가
        await updateDoc(qaRef, {
          likes: increment(1),
          likedBy: arrayUnion(userId)
        });
        return true; // 좋아요 추가됨
      }
    } catch (error) {
      console.error('Error toggling like:', error);
      throw error;
    }
  },

  // 댓글 추가 (완벽 구현)
  async addComment(qaId, commentData) {
    try {
      // 댓글 추가
      const commentRef = collection(db, 'qa', qaId, 'comments');
      const docRef = await addDoc(commentRef, {
        ...commentData,
        createdAt: serverTimestamp(),
        likes: 0,
        likedBy: []
      });
      
      // Q&A의 댓글 수 증가
      const qaRef = doc(db, 'qa', qaId);
      await updateDoc(qaRef, {
        comments: increment(1)
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },

  // 댓글 목록 가져오기 (완벽 구현)
  async getComments(qaId) {
    try {
      const commentRef = collection(db, 'qa', qaId, 'comments');
      const q = query(commentRef, orderBy('createdAt', 'asc'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      }));
    } catch (error) {
      console.error('Error getting comments:', error);
      throw error;
    }
  },

  // 댓글 삭제
  async deleteComment(qaId, commentId) {
    try {
      // 댓글 삭제
      const commentRef = doc(db, 'qa', qaId, 'comments', commentId);
      await deleteDoc(commentRef);
      
      // Q&A의 댓글 수 감소
      const qaRef = doc(db, 'qa', qaId);
      await updateDoc(qaRef, {
        comments: increment(-1)
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  },

  // 댓글 좋아요 토글
  async toggleCommentLike(qaId, commentId, userId) {
    try {
      const commentRef = doc(db, 'qa', qaId, 'comments', commentId);
      const commentDoc = await getDoc(commentRef);
      
      if (!commentDoc.exists()) {
        throw new Error('Comment not found');
      }
      
      const commentData = commentDoc.data();
      const likedBy = commentData.likedBy || [];
      const isLiked = likedBy.includes(userId);
      
      if (isLiked) {
        // 좋아요 취소
        await updateDoc(commentRef, {
          likes: increment(-1),
          likedBy: arrayRemove(userId)
        });
        return false;
      } else {
        // 좋아요 추가
        await updateDoc(commentRef, {
          likes: increment(1),
          likedBy: arrayUnion(userId)
        });
        return true;
      }
    } catch (error) {
      console.error('Error toggling comment like:', error);
      throw error;
    }
  }
};

// Firebase 연결 테스트 함수 추가
export const testFirebaseConnection = async () => {
  try {
    console.log('Firebase 연결 테스트 시작...');
    const startTime = Date.now();
    
    // 간단한 읽기 테스트
    const testRef = collection(db, 'test');
    const testDoc = await addDoc(testRef, { test: true, timestamp: serverTimestamp() });
    console.log('Firebase 쓰기 테스트 성공:', Date.now() - startTime, 'ms');
    
    // 테스트 문서 삭제
    await deleteDoc(doc(db, 'test', testDoc.id));
    console.log('Firebase 삭제 테스트 성공');
    
    return true;
  } catch (error) {
    console.error('Firebase 연결 테스트 실패:', error);
    return false;
  }
};
