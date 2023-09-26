import React, { useState } from 'react'
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md"
import { MenuData } from '../Navbar/MenuData';
import { hasChildren } from '../../utils'; 
import { Link } from "react-router-dom";

export default function SideMenu() {
    return MenuData.map((item, key) => <MenuItem key={key} item={item}/>);
}


const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item}/>;
}

const SingleLevel = ({ item }) => {
    return (
        <li>
            {/* <Link to={item.path}> */}
                <span>{item.title}</span>
            {/* </Link> */}
        </li>
    )
}

const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <li onClick={handleClick}>
                {/* <Link to={item.path}> */}
                    <span>{item.title}</span>
                {/* </Link> */}
                {open ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </li>
            <div>
                <li>
                    {children.map((child, key) => (
                        <MenuItem key={key} item={child}/>
                    ))}
                </li>
            </div>
        </>
    )
}



// {MenuData.map((item, index) => {
//     return (
//       <li key={index} className={item.cName}>
//         <Link to={item.path}>
//           <span>{item.title}</span>
//         </Link>
//       </li>
//     );
//   })}
