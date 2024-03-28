import styled from "styled-components";
function App() {
  return (
    <Container>
      <Heading>ADVICE # 117</Heading>
      <Paragraph>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </Paragraph>
      <Div>
        <img src="/images/image1.png" alt="iconImage" />
      </Div>
      <Div>
        <img src="/images/image2.png" alt="buttonIcon" className="Image" />
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
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export default App;
