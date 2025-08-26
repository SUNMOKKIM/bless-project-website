# Bless Project 웹사이트

선교지 교회학교와 함께 성장하는 청년 선교 동역 모임 Bless Project의 공식 웹사이트입니다.

## 🌟 프로젝트 소개

Bless Project는 선교지의 필요한 부분을 동역하고자 모인 청년 선교 동역 모임입니다. 선교지에 있는 교회학교의 성장과 자립에 동역하고자 다양한 콘텐츠를 제작하고 있으며, 이 웹사이트를 통해 누구든지 콘텐츠를 업로드하고 다운로드할 수 있는 플랫폼 역할을 합니다.

## ✨ 주요 기능

### 🏠 메인 페이지
- **Hero Section**: 임팩트 있는 메인 비주얼과 핵심 메시지
- **Vision & Mission**: Bless Project의 비전과 사명 소개
- **주요 사역 영역**: 교육 콘텐츠 제작, 교회학교 커리큘럼 개발 등
- **성과 통계**: 동역 교회 수, 제작 콘텐츠 수 등

### 📚 콘텐츠 플랫폼
- **구글 로그인**: 사용자 인증 및 개인화 서비스
- **콘텐츠 업로드/다운로드**: 다양한 교육 자료 공유
- **카테고리별 분류**: 교재, 게임, 찬양, 프로그램 등
- **검색 및 필터링**: 효율적인 콘텐츠 검색
- **평점 및 후기**: 사용자 피드백 시스템

### 🌐 추가 페이지
- **About Us**: 팀 소개 및 핵심 가치
- **선교지 스토리**: 현재 동역 중인 선교지 소개
- **참여하기**: 자원봉사 신청, 후원 안내
- **연락처**: 문의 및 뉴스레터 구독

## 🎨 디자인 특징

- **컬러 팔레트**: 따뜻하고 희망적인 오렌지, 신뢰감 있는 네이비
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **모던한 UI/UX**: 직관적인 네비게이션과 부드러운 애니메이션
- **문화적 감수성**: 다양한 문화권을 고려한 디자인

## 🚀 기술 스택

- **Frontend**: React 18, React Router DOM
- **Styling**: Styled Components
- **Animation**: Framer Motion
- **Icons**: React Icons
- **SEO**: React Helmet
- **Authentication**: Google OAuth (Firebase 준비)
- **Build Tool**: Create React App

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 방법

1. 저장소 클론
```bash
git clone [repository-url]
cd bless-project-website
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

4. 브라우저에서 `http://localhost:3000` 접속

### 빌드 방법

```bash
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

## 🔧 환경 설정

### Firebase 설정 (Google 로그인용)

1. Firebase 프로젝트 생성
2. Authentication에서 Google 로그인 활성화
3. 환경 변수 설정

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

## 📱 반응형 지원

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

모든 디바이스에서 최적화된 사용자 경험을 제공합니다.

## 🌍 다국어 지원

현재 한국어로 구현되어 있으며, 향후 다국어 지원을 위한 구조가 준비되어 있습니다.

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.js      # 네비게이션 헤더
│   └── Footer.js      # 푸터
├── pages/              # 페이지 컴포넌트
│   ├── Home.js        # 메인 페이지
│   ├── About.js       # 소개 페이지
│   ├── Content.js     # 콘텐츠 플랫폼
│   ├── Mission.js     # 선교지 현황
│   └── Contact.js     # 연락처
├── App.js              # 메인 앱 컴포넌트
├── index.js            # 진입점
└── index.css           # 전역 스타일
```

## 🔐 보안 고려사항

- HTTPS 강제 적용
- XSS 방지
- CSRF 토큰 사용
- 입력값 검증 및 sanitization

## 📈 성능 최적화

- 코드 스플리팅
- 이미지 최적화
- Lazy loading
- Bundle 분석 및 최적화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: info@blessproject.org
- **전화**: +82-2-1234-5678
- **주소**: 서울특별시 강남구 테헤란로 123
- **YouTube**: [@BlessProject](https://www.youtube.com/@BlessProject)

## 🙏 감사의 말

이 프로젝트는 많은 분들의 기도와 후원, 그리고 헌신적인 노력으로 만들어졌습니다. 함께 선교지 교회학교의 성장을 돕고, 하나님의 사랑을 전할 수 있도록 도와주셔서 감사합니다.

---

**Bless Project** - 선교지 교회학교와 함께 성장하는 청년 선교 동역 모임
