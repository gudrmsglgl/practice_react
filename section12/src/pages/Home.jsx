import { useState, useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { DataContext } from "../App";

const getMonthlyData = (privotDate, data) => {

  const beginTime = new Date(
    privotDate.getFullYear(),
    privotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime()

  const endTime = new Date(
    privotDate.getFullYear(),
    privotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime()

  return data.filter((item) => item.createdDate >= beginTime && item.createdDate <= endTime)
}

const Home = () => {
  const data = useContext(DataContext);

  const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const monthlyData = getMonthlyData(pivotDate, data);

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList items={monthlyData} />
    </div>
  );
};

export default Home;
