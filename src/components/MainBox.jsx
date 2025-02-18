import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainBox.module.css";

const MainBox = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>직업 검색은 쉽게!</h1>
      <p className={styles.subtitle}>직업 분류, 이력서 작성</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => navigate("/jobchatbot")}>
          직업 검색하기
        </button>
        <button className={styles.button} onClick={() => navigate("/resumechatbot")}>
          이력서 작성하러 가기
        </button>
      </div>
    </div>
  );
};

export default MainBox;
