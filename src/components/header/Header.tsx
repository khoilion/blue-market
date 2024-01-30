import { Col, Flex, Row } from "antd";
import "./Style.css";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaWallet, FaThList } from "react-icons/fa";
import { Input } from "antd";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import {Link} from "react-router-dom";

const Header = () => {
    const [inputSearch, setInputSearch] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMenuOpenChildren, setIsMenuOpenChildren] = useState<number | null>(null);

    const handleChangeInputSearch = () => {
        setInputSearch((prevInputSearch) => !prevInputSearch);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleMenuChildren = (index:number) => {
        setIsMenuOpenChildren(index === isMenuOpenChildren ? null : index); // Update isMenuOpenChildren state
    };



    const menuItems = [
        {
            name: "Home",
            submenu: ["Explore 01", "Explore 02", "Explore 03", "Explore 04"],
        },
        {
            name: "Explore",
            submenu: ["Explore 01", "Explore 02", "Explore 03", "Explore 04"],
        },
        {
            name: "Activity",
            submenu: ["Explore 01", "Explore 02", "Explore 03", "Explore 04"],
        },
        {
            name: "Community",
            submenu: ["Item Details 01", "Item Details 02"],
        },
        {
            name: "Page",
            submenu: ["Item Details 01", "Item Details 02"],
        },
        {
            name: "Contact",
            submenu: ["Item Details 01", "Item Details 02"],
        },
    ];

    return (
        <div className="container">
            <div id="header" className="position-relative">
                <Row gutter={16} className="align-items-center">
                    <Col span={12}>
                        <img className="w-100" src="/public/img/logoPage.png" alt="" />
                    </Col>
                    <Col span={12}>
                        <Flex align="center" justify="space-evenly">
                            <div className="list-icon">
                                <IoIosSearch
                                    onClick={handleChangeInputSearch}
                                    color="#fff"
                                    size={20}
                                />
                            </div>
                            <Link to={'/connect-wallet'} className="sc-button list-icon">
                                <FaWallet color="#fff" size={20} />
                            </Link>
                            <div className="list-icon">
                                <div onClick={toggleMenu}>
                                    {isMenuOpen ? (
                                        <GrClose color="#fff" size={20} />
                                    ) : (
                                        <FaThList color="#fff" size={20} />
                                    )}
                                </div>
                                <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                                    <nav>
                                        <ul>
                                            {menuItems.map((item, index) => (
                                                <li key={index} className="menu-item">
                                                    <div
                                                        onClick={() => toggleMenuChildren(index)} // Pass index to toggleMenuChildren function
                                                        className="item--menu--items"
                                                    >
                                                        <span>{item.name}</span>
                                                        <span className="ms-2">
                              <IoIosArrowDown />
                            </span>
                                                    </div>
                                                    {isMenuOpenChildren === index && ( // Conditionally render submenu
                                                        <ul>
                                                            {item.submenu && (
                                                                <li className="submenu">
                                                                    {item.submenu.map((subItem, subIndex) => (
                                                                        <div
                                                                            key={subIndex}
                                                                            className="submenu-item"
                                                                        >
                                                                            {subItem}
                                                                        </div>
                                                                    ))}
                                                                </li>
                                                            )}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {inputSearch && (
                                <div className="position--inputSearch">
                                    <Input placeholder="Search..." />
                                </div>
                            )}
                        </Flex>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Header;