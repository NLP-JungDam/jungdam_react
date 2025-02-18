import React from "react";
import MainBox from "../components/MainBox";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <header className={styles.header}>
        <h1 className={styles.logo}>
          Edi<span className={styles.highlight}>ció</span>n
        </h1>
      </header>

      {/* 메인 컨텐츠 */}
      <div className={styles.content}>
        <MainBox />
      </div>

      {/* 푸터 */}
      <footer className={styles.footer}>
        <p>© 2025 우리 취업 플랫폼. 모든 권리 보유.</p>
        <p>직업 검색 | AI Edición | 맞춤 직업 추천</p>
        <p>문의: support@ourjobplatform.com</p>
        <p>이용 약관 | 개인정보 처리방침</p>
      </footer>
    </div>
  );
};

export default MainPage;
