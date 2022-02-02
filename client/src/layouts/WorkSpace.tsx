import Header from './Header'
const WorkSpace: React.FC = ({ children }) => {
    return <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <Header/>
        <h1>before</h1>
        <div>
            {children}
        </div>
        <h1>after</h1>
    </div>;
};

export default WorkSpace;
