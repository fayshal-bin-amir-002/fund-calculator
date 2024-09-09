import Transition from "./Transition";

const Transitions = () => {
    return (
        <div className="p-4 md:p-6">
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