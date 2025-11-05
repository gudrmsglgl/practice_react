// aysnc
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로머시를 반환하도록 반환해주는 키워드
async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Mike",
        age: 30,
      });
    }, 1500);
  });
}
console.log(getData());

// await
// async 함수 안에서만 사용 가능
// 프로미스가 처리될 때까지 기다렸다가 처리된 값을 반환
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
