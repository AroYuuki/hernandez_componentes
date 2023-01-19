import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
 <div>
        <h1>FERNANDO HERNANDEZ PRACTICA COMPONENTES</h1>
        <Button><a href="https://utd.edu.mx">UTD</a></Button>
        <Button primary><a href="https://www.instagram.com/aroyuuki/">instagram</a></Button>
        

      </div>
      
  );
}

export default App;
