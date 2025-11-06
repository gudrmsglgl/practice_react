import { useEffect, useState } from "react";

export const useLocalStorageDiaryEffect = (mockData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const localDiaryList = localStorage.getItem("diaryList");
    let parsedData = [];
    if (localDiaryList) {
      try {
        parsedData = JSON.parse(localDiaryList);
        if (!Array.isArray(parsedData) || parsedData.length === 0) {
          parsedData = [];
        }
      } catch (e) {
        console.error("Failed to parse local storage data:", e);
        parsedData = [];
      }
    }

    const initialData = parsedData.length > 0 ? parsedData : mockData;

    setData(initialData);
  }, [mockData]);

  return data;
};
