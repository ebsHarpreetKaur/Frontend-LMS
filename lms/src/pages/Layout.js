import Dashboard from '../pages/Dashboard';
import Attendance from '.';
import Leave from '.';
import Employees from '.';
// import Sidebar from './components/Sidebar.jsx';
// import Login from './pages/Login.js';

const Layout = () => {
    return <>
        <Dashboard />
        <Attendance />
        <Employees />
        <Leave />
    </>;
};

export default Layout;