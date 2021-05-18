import React, { useState, useCallback } from "react";

//custom Hook으로 만들기
export default function (initialValue = null) {
  const [Value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [Value, handler, setValue];
}
