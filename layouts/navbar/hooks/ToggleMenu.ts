import {useState} from 'react';

const ToggleMenu = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false)

    const handleMenuToggle = () => setMenuToggle(prevState => !prevState)

    return {menuToggle, handleMenuToggle}
};

export default ToggleMenu;
