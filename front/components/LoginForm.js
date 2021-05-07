import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../reducers/user";

// styled-component를 쓰는 이유
// CSS inline에서 {} !== {} 로 인해 리렌더링
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const FormWrapper = styled(Form)`
  padding: 18px;
`;

function LoginForm() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //1방법. CustomHook - 지저분한 Form으로 인한 상태, 함수를 일시에 정리할 수 있다
  const [Id, onChangeId] = useInput("");
  //2방법. 컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 써줘야 최적화가 된다
  const [Password, setPassword] = useState("");

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onSubmitForm = useCallback(() => {
    console.log(Id, Password);
    dispatch(loginAction({ Id, Password }));
  }, [Id, Password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={Id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={Password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={false}>
            {/* Link에 href 넣고 a에는 안넣는게 좋다  */}로그인
          </Button>

          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </div>
    </FormWrapper>
  );
}

export default LoginForm;
