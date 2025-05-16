import React, { CSSProperties } from "react";
import ExcelJs from "exceljs";

export type SheetData = {
  sheetName: string; // 工作表名稱
  thead: Array<string>; // 欄位標題，例如：['姓名','年齡','電話']
  tbody: Array<Array<string>>;
  // 內容，例如：[['小明','20','0987654321'],['小美','23','0912345678']]
  columnWidths?: Array<{ number: number; width: number }>; //用來指定欄寬的
};

interface ExportExcelButtonProps {
  fileName: string; // 檔案名稱
  sheetDatas: Array<SheetData>; // 要匯出的表格資料
  disabled?: boolean; // 是不是要禁止按鈕動作
  buttonRef?: React.MutableRefObject<any>; // 外面用useRef傳進來
  style?: CSSProperties; // 按鈕的style
}

export function ExportExcelButton(props: ExportExcelButtonProps) {
  function onClick() {
    const workbook = new ExcelJs.Workbook();
    props.sheetDatas.forEach((sheetData: SheetData) => {
      const sheet = workbook.addWorksheet(sheetData.sheetName);
      sheet.addTable({
        name: sheetData.sheetName,
        ref: `A1`, // 從A1開始
        headerRow: true,
        columns: sheetData.thead.map((s) => {
          return { name: s };
        }),
        rows: sheetData.tbody
      });
      if (sheetData.columnWidths) {
        sheetData.columnWidths.forEach((column) => {
          sheet.getColumn(column.number).width = column.width;
        });
      }
    });

    // 表格裡面的資料都填寫完成之後，訂出下載的callback function
    // 異步的等待他處理完之後，創建url與連結，觸發下載
    workbook.xlsx.writeBuffer().then((content: ExcelJs.Buffer) => {
      const link = document.createElement("a");
      const blob = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;"
      });
      link.download = `${props.fileName}.xlsx`;
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  }

  const style: CSSProperties = {
    borderRadius: "5px",
    ...props.style
  };

  return (
    <button
      ref={props.buttonRef}
      disabled={props.disabled}
      onClick={onClick}
      style={style}
    >
      匯出excel
    </button>
  );
}

export default ExportExcelButton;
