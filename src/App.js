import styled from "styled-components";
import Card from "./components/Card";

import recetas from "./data";

const Wrapper = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 6rem;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      {recetas.map((a) => (
        <Card
          imagen={a.imagen}
          title={a.title}
          description={a.description}
          receta={a.receta}
        />
      ))}
    </Wrapper>
  );
}

export default App;
