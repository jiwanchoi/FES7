import "./App.css";

function App() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 style={{ color: "red" }}>년: {year}</h1>
      <h2 className="fourth">
        월/일: {month + 1}/{date}
      </h2>
      <h2 className="fifth">
        시간: {hour}시 {minute}분 {second}초
      </h2>
    </div>
  );
}

export default App;
