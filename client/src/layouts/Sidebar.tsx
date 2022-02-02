import { FC } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Sidebar: FC = () => {

    return <aside className="relative bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-4 mb-8">
            <a href="" className="text-white text-cener text-2xl font-semibold uppercase hover:text-gray-300">Admin Center</a>
            <FontAwesomeIcon icon="check-square" />
            
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 bg-blue-800">
                <i className="fas fa-sticky-note mr-3"></i>
                <FontAwesomeIcon icon={["fal", "coffee"]}/>
                Managers
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 ">
                <i className="fas fa-align-left mr-3"></i>
                Statistics
            </a>
        </nav>

    </aside>
;
};

export default Sidebar;
