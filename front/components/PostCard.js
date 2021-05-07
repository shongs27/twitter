import React from "react";
import { Card, Popover, Button, Avatar, Image } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import PostImages from "./PostImages";

function PostCard({ post }) {
  const id = useSelector((state) => state.user.me?.id);
  return (
    <div style={{ marginBottom: 10 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="comment" />,
          <Popover
            key="more"
            content={
              <ButtonGroup>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </ButtonGroup>
            }
          >
            ,
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
        {/* <Image /> */}
        {/* <Content /> */}
        <Button></Button>
      </Card>
      {/* <CommentForm /> */}
      {/* <Comments /> */}
    </div>
  );
}

PostCard.PropTypes = {};

export default PostCard;
