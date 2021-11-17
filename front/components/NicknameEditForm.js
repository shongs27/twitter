import React, { useMemo, useCallback } from 'react';
import { Form, Input } from 'antd';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const style = useMemo(() => ({
  marginBottom: '20px',
  border: '1px solid #d9d9d9',
  padding: '20px',
}));

function NicknameEditForm() {
  const { me } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || '');
  const dispatch = useDispatch;

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <Form style={style} onFinish={onSubmit}>
      {/* 쇼핑하듯이 구하는 컴포넌트  */}
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
}

export default NicknameEditForm;
