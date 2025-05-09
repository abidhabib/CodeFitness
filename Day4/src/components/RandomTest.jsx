import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const rollAnimation = keyframes`
  0% { transform: rotate(0deg) rotateX(0deg) rotateY(0deg); }
  100% { transform: rotate(720deg) rotateX(1080deg) rotateY(720deg); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2c3e50, #3498db);
  font-family: 'Roboto', sans-serif;
`;

const DiceBox = styled.div`
  perspective: 1000px;
  margin: 2rem;
`;

const Dice = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-out;
  transform: ${({ result }) => getFaceRotation(result)};
  animation: ${({ rolling }) => (rolling ? rollAnimation : "none")} 1.5s ease-out;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  border: 2px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  backface-visibility: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(230,230,230,0.9));
  }
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background: #2c3e50;
  border-radius: 50%;
  position: absolute;
`;

const positions = {
  1: [{ top: '50%', left: '50%' }],
  2: [{ top: '25%', left: '25%' }, { bottom: '25%', right: '25%' }],
  3: [{ top: '25%', left: '25%' }, { top: '50%', left: '50%' }, { bottom: '25%', right: '25%' }],
  4: [
    { top: '25%', left: '25%' },
    { top: '25%', right: '25%' },
    { bottom: '25%', left: '25%' },
    { bottom: '25%', right: '25%' }
  ],
  5: [
    { top: '25%', left: '25%' },
    { top: '25%', right: '25%' },
    { top: '50%', left: '50%' },
    { bottom: '25%', left: '25%' },
    { bottom: '25%', right: '25%' }
  ],
  6: [
    { top: '25%', left: '25%' },
    { top: '25%', right: '25%' },
    { top: '50%', left: '25%' },
    { top: '50%', right: '25%' },
    { bottom: '25%', left: '25%' },
    { bottom: '25%', right: '25%' }
  ]
};

const getFaceRotation = (num) => {
  const rotations = {
    1: 'rotateX(0deg) rotateY(0deg)',
    2: 'rotateX(-90deg) rotateY(0deg)',
    3: 'rotateX(0deg) rotateY(90deg)',
    4: 'rotateX(0deg) rotateY(-90deg)',
    5: 'rotateX(90deg) rotateY(0deg)',
    6: 'rotateX(180deg) rotateY(0deg)'
  };
  return rotations[num] || rotations[1];
};

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(231,76,60,0.3);

  &:hover {
    transform: translateY(-2px);
    background: #c0392b;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const DiceRoller = () => {
  const [result, setResult] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      setTimeout(() => {
        setResult(Math.floor(Math.random() * 6) + 1);
        setRolling(false);
      }, 1500);
    }
  };

  return (
    <Container>
      <DiceBox>
        <Dice result={result} rolling={rolling}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Face key={num}>
              {positions[num].map((pos, i) => (
                <Dot key={i} style={pos} />
              ))}
            </Face>
          ))}
        </Dice>
      </DiceBox>
      <Button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </Button>
    </Container>
  );
};

export default DiceRoller;