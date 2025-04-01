import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/counterSlice"; // 导入 actions
import type { RootState } from "../../store/store"; // 导入 RootState 类型

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
