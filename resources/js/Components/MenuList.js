import React from "react";
import MenuItem from "./MenuItem";
import {FaTshirt} from 'react-icons/fa';
import {GiSonicShoes} from 'react-icons/gi';

export default function MenuList() {
    const menus = [
        { icon: <FaTshirt />, title: 'Clotes'},
        { icon: <GiSonicShoes />, title: 'Shoes'},
    ]

    return (
        <div className="grid grid-cols-4 my-3 sm:mt-6 md:grid-cols-6 lg:grid-cols-8 gap-5 justify-items-center lg:mt-10">
            {
                menus.map((menu, i) => (
                    <MenuItem menu={menu} key={i} />
                ))
            }
        </div>
    )
}
