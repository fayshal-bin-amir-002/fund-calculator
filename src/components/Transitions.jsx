import Transition from "./Transition";

const Transitions = () => {
    return (
        <div className="px-4 md:px-6 pt-4 overflow-y-auto">
            <h4 className="text-center text-xl font-medium border-b pb-1 mb-3">Transitions</h4>

            <div className="space-y-2">
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
            </div>
        </div>
    );
};

export default Transitions;