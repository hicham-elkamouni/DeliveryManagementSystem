
import { Outlet } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar'
import WorkSpace from '../layouts/WorkSpace'
const Dashboard = () => {
    return <div className="bg-gray-100 font-family-karla flex">

        <>
            <Sidebar />
        </>
        <>
            <WorkSpace >
                <Outlet/>
            </WorkSpace>
        </>


    </div>
        ;
};

export default Dashboard;
