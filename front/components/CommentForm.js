import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { addComment } from '../reducers/post';

function CommentForm({ post }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone, addCommentLoading } = useSelector(
    (state) => state.post,
  );

  const [commentText, setChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentDone) setCommentText('');
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch(addComment(commentText, post.id, id));
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={setChangeCommentText}
          rows={4}
        />
        <Button
          style={{
            position: 'absolute',
            right: 0,
            bottom: -40,
            // zindex할 정도로 button이 뒤에 있는가?
            zIndex: 1,
          }}
          type="primary"
          htmlType="submit"
          loading={addCommentLoading}
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
