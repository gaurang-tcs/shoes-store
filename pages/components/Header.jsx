import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';

import { IoMdHearEmpty } from "react-icons/io";
import {BsCart} from "react-icons/bs";
import {BiMenuAltRight} from "react-icons/bi";
import { VscchromeClose } from "react-icons/vsc";

const Header = (props) => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState('translate-y-0');
    const [lastScrollY, setLastScrollY] = useState(0)

    return (
        <div className={`w-full h-[50px] md:[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
            <Wrapper className={'flex justify-between items-center'}>
                <Link href='/'>
                    <img src='./logo.svg' className='w-[40px] md:w-[60px]' />
                </Link>
                <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
            </Wrapper>
        </div>
    )
}

export default Header; 