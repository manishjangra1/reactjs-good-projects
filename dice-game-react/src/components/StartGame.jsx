import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img
          src="/images/dices.png"
          alt="dices image"
          className="image_title"
        />
      </div>
      <div className="title">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  maximum-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
