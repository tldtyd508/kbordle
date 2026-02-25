import csvFile from './test.csv'

// TODO 읽어야 하는 외부 파일이 있을 때마다 이런 식으로 function 혹은 class를 생성하는 것이 바람직한가.
// 이번 플젝의 경우 읽어야 할 파일의 수가 한정적이라 추상화 하지 않고 가성비 있게 빠르게 적용할 수 있는 방법 적용
export default function ReadCsv() {
    fetch(csvFile)
    .then(row => row.text())
    .then(text => {
        console.log(text);
    });
}