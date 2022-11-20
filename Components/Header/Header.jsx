import Wheel_order from "../Wheel_order/Order";
import Wheel_index from "../Wheel_indexes/Indexes"

function Header() {
    return (
        <div className="Header">
            <Wheel_order />
            <Wheel_index />

        </div >
    );
}

export default Header;
