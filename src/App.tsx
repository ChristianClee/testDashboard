import EmployeesPage from '#archichecture/page/EmployeesPage';
import { useReducer } from 'react';
import { Reduser } from '#reducers/reduser'
import { initialItems } from '#reducers/state'
import { Context } from '#reducers/context'
import Greeting from '#archichecture/ui/greeting/Greeting';



function App() {

  const [state, dispatch] = useReducer(Reduser, initialItems)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <EmployeesPage />
      </div>

      {/* <Greeting/> */}
    </Context.Provider>
  );
}

export default App;
