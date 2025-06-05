// 클라이언트에서 API 요청을 보낼 때 도착하는 엔트리 파일 / 노드 js의 진입점이 되는 파일
const express = require('express');
// 절대경로 사용
const path = require('path');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('안녕하세요. 1111')
})

// console.log(path.join(__dirname, '../uploads'));
app.use(express.static(path.join(__dirname, '../uploads')));

app.listen(port, () => {
    console.log(`${port}번에서 실행이 되었습니다.`)
});