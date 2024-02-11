import EmployeesPage from '#archichecture/page/EmployeesPage';
import { useReducer } from 'react';
import { Reduser } from '#reducers/reduser'
import { initialItems } from '#reducers/state'
import { Context } from '#reducers/context'


function App() {
  const [state, dispatch] = useReducer(Reduser, initialItems)
  return (  
    <Context.Provider value={{state, dispatch}}>
      <div className="App">
        <EmployeesPage/>
      </div>
    </Context.Provider>
  );
}

export default App;
