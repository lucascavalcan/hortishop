import { MainRoutes } from './routes/MainRoutes';
import './App.css';

import {UseAppSelector} from "./redux/hooks/useAppSelector";

const App = () => {

  const card = UseAppSelector(state => state.cart);

  return (
    <div>
      <MainRoutes/>
    </div>
  )
}

export default App;
