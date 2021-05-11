import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";

function CommentForm({ post }) {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, setChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    // 클릭해도 안되는 문제 ? (기술부채)
    console.log("클릭 안되는 데스웅?");
    console.log(post.id, commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={setChangeCommentText}
          rows={4}
        />
        <Button
          style={{ position: "absolute", right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
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
