const WorkSpace: React.FC = ({ children }) => {
    return <div className="relative w-full flex flex-col h-screen overflow-y-hidden">

        <div>
            {children}
        </div>

    </div>;
};

export default WorkSpace;
