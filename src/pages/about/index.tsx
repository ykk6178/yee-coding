import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store"; // 导入 RootState 类型

const About: React.FC = () => {
    const reduxState = useSelector((state: RootState) => state.counter.reduxState);
  return (
    <div>
      <h2>About Page</h2>
      <p>Welcome to the About Page!</p>
      <p>{reduxState}</p>  
    </div>
  );
};

export default About;
