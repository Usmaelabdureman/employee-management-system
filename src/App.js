import './App.style'
import AppStyle, {Header} from './App.style';
import EmployeeList from './pages/employeeList';

function App() {
  return (
    <div className='App'>
      <AppStyle />
    <Header>Simple Employee Management System </Header>
    <EmployeeList/>
  
    </div>
  );
}

export default App;
