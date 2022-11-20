import Input from "../Input/Input";
import Output from "../Output/Output";
import Letters from "../Letters/Letters";
import Wheel_Indexes from "../Wheel_indexes/Indexes";
import Wheel_order from "../Wheel_order/Order";

function Main() {
    return (
        <div className="Main">
            xcvה
            <Letters />
            <Wheel_Indexes />
            <Wheel_order />
            <div className="in-out">
                xcv
                <Input />
                <Output />
            </div>
        </div>
    );
}

export default Main;
