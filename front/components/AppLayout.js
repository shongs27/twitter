import React from "react";
import propTypes from "prop-types";
import Link from "next/link";

function AppLayout({ children }) {
  return (
    <div>
      <div>
        <Link href="/">노드버드</Link>
      </div>
      <div>
        <Link href="/profile">프로필</Link>
      </div>
      <div>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>

      {children}
    </div>
  );
}

AppLayout.propTypes = {
  childeren: propTypes.node.isRequired,
};

export default AppLayout;
