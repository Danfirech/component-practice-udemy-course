import FlexBox from "./components/FlexBox";
import "./App.css";

function App() {
  const dansData = [
    {
      id: "1",
      sticks: 11,
      heads: 6,
      headPhones: 9,
      band: "Ponce",
      date: new Date(2020, 1, 19),
    },

    {
      id: "2",
      sticks: 190,
      heads: 60,
      headPhones: 50,
      band: "The Killers",
      date: new Date(2021, 12, 25),
    },

    {
      id: "3",
      sticks: 3403,
      heads: 722,
      headPhones: 855,
      band: "Cran Apple",
      date: new Date(2021, 16, 4),
    },
  ];

  return (
    <div>
      <FlexBox sticks={dansData[1].sticks} heads={dansData[1].heads}></FlexBox>
      <FlexBox sticks={dansData[2].sticks} band={dansData[1].band}></FlexBox>
      <FlexBox></FlexBox>
    </div>
  );
}

export default App;
