import React, { useCallback, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const ErrorMessage = styled.div`
  color: 'red';
`;

function Signup({ setIsLoggedIn }) {
  // 1 - CustomHook
  const [email, onChangeEmail] = useInput('');
  const [Nickname, onChangeNickname] = useInput('');
  const [Password, onChangePassword] = useInput('');

  // 2 - 일일히 만들기
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== Password);
    },
    [Password],
  );

  const [Term, setTerm] = useState(false);

  const [TermError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (Password !== PasswordCheck) {
      return setPasswordError(true);
    }
    if (!Term) {
      return setTermError(true);
    }
    console.log(email, Nickname, Password);
    // dispatch;
  }, [email, Password, PasswordCheck, Term]);
  // 3 - 폼 라이브러리 이용하기
  return (
    <>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input
              name="user-id"
              value={email}
              required
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={Nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-Password">패스워드</label>
            <br />
            <Input
              name="user-Password"
              value={Password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-PasswordCheck">패스워드 확인</label>
            <br />
            <Input
              name="user-PasswordCheck"
              value={PasswordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {PasswordError && (
              <ErrorMessage> 비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={Term} onChange={onChangeTerm}>
              홍쓰 잘 하고 있는지 체크
            </Checkbox>
            {TermError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
}

LoginForm.PropTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Signup;
