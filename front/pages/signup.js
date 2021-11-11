import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import { SIGN_UP_REQUEST } from '../reducers/user';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: 'red';
`;

function Signup() {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector(
    (state) => state.user,
  );

  // 1 - CustomHook
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  // 2 - 일일히 만들기
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const [Term, setTerm] = useState(false);

  const [TermError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== PasswordCheck) {
      return setPasswordError(true);
    }
    if (!Term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
    dispatch({ type: SIGN_UP_REQUEST, data: { email, nickname, password } });
  }, [email, password, PasswordCheck, Term]);

  // useEffect(() => {
  //   if (signUpDone) {
  //     Router.push('/');
  //   }
  // }, [signUpDone]);

  useEffect(() => {
    if (me && me.id) {
      //push는 이전 페이지 기록 남음
      //replace는 이전 페이지 기록 삭제하고 들어감
      Router.replace('/');
    }
  });

  useEffect(() => {
    if (signUpDone) {
      alert(signUpDone);
    }
  });

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  return (
    <>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-email">이메일</label>
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
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-Password">패스워드</label>
            <br />
            <Input
              name="user-Password"
              value={password}
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
            <Button type="primary" htmlType="submit" loading={signUpLoading}>
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
