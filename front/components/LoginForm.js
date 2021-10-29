import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// styled-component를 쓰는 이유
// CSS inline에서 {} !== {} 로 인해 리렌더링
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const FormWrapper = styled(Form)`
  padding: 18px;
`;

function LoginForm() {
  const { logInLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //1방법. CustomHook - 지저분한 Form으로 인한 상태, 함수를 일시에 정리할 수 있다
  const [email, onChangeEmail] = useInput('');
  //2방법. 컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 써줘야 최적화가 된다
  const [Password, setPassword] = useState('');

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, Password }));
  }, [email, Password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input
          name="user-email"
          value={email}
          onChange={onChangeEmail}
          required
        />
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
          <Button type="primary" htmlType="submit" loading={logInLoading}>
            로그인
          </Button>
          {/* a 말고 Link에 href 넣는다 */}
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
