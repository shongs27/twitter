import React, { useMemo } from "react";
import { Form, Input } from "antd";

function NicknameEditForm() {
  const style = useMemo(() => ({
    marginBottom: "20px",
    border: "1px solid #d9d9d9",
    padding: "20px",
  }));

  return (
    <Form style={style}>
      {/* 쇼핑하듯이 구하는 컴포넌트  */}
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
}

export default NicknameEditForm;
