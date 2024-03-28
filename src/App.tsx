import { useEffect, useState } from "react";
import styled from "styled-components";

interface AdviceTypes {
  slip: {
    id: number;
    advice: string;
  };
}
function App() {
  const [advice, setAdvice] = useState<AdviceTypes>();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.adviceslip.com/advice`);
        const data = await res.json();
        if (!data) throw new Error(`Something went wrong`);
        setAdvice(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [count]);
  return (
    <Container>
      <Heading>ADVICE # {advice?.slip.id}</Heading>
      <Paragraph>"{advice?.slip.advice}"</Paragraph>
      <DivImage>
        <img src="/images/image1.png" alt="iconImage" />
      </DivImage>
      <Div onClick={() => setCount((prev) => prev + 1)}>
        <img src="/images/image2.png" alt="buttonIcon" />
      </Div>
    </Container>
  );
}
const Container = styled.div`
  width: 343px;
  height: 315px;
  background: #313a48;
  border-radius: 10px;
  padding: 30px;
  position: relative;
`;
const Heading = styled.h1`
  font-size: 11px;
  font-weight: 800;
  line-height: 15.03px;
  text-align: center;
  color: #53ffaa;
`;
const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 800;
  line-height: 32.78px;
  letter-spacing: -0.2571428716182709px;
  text-align: center;
  color: #cee3e9;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const DivImage = styled.div`
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  cursor: pointer;
  & :hover {
    box-shadow: 0px 0px 40px 0px #53ffaa;
  }
`;

export default App;
