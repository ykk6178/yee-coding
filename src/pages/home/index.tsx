import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/counterSlice"; // 导入 actions
import type { RootState } from "../../store/store"; // 导入 RootState 类型
import { ExportExcelButton, SheetData } from "../../components/ExportExcelButton";

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
    const downloadData: SheetData[] = [
    {
      sheetName: `工作表1`,
      thead: ["姓名", "年齡", "電話"],
      tbody: [
        ["小明", "20", "0987654321"],
        ["小美", "23", "0912345678"]
      ],
      columnWidths: [
        { number: 1, width: 20 },
        { number: 2, width: 10 },
        { number: 3, width: 40 }
      ]
    },
    {
      sheetName: `工作表2`,
      thead: ["姓名", "座號"],
      tbody: [
        ["小明", "1"],
        ["小美", "2"]
      ],
      columnWidths: [{ number: 1, width: 20 }]
    }
  ];
  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>測試的試算表</p>
      <ExportExcelButton fileName={"測試的試算表"} sheetDatas={downloadData} />

    </div>
  );
};

export default Home;
