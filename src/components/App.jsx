import { createElement } from '../../Code.js/Code';
import './style.css';

const App = (
  <div
    class='container'
    onClick={() => console.log('hi')}
    onMouseOver={() => console.log('bye')}
  >
    <div>Hi</div>
  </div>
);

export default App;
