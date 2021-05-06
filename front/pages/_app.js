//페이지 공통된 것들 제어

import React from "react";
import propTypes from "prop-types";
import Head from "next/head"; //next에서 지원
import "antd/dist/antd.css";

//Component는 일괄적용
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <div>공통 메뉴</div>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default NodeBird;
