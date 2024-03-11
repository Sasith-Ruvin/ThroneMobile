import React, { useState, useEffect } from 'react';
import "./MidSection.css";
import MidButton from './MidButton';
import { sliderData } from '../../DataForPage/dummyData';
import MidChild from './MidChild';
import {motion} from 'framer-motion';

const MidFilterSection = () => {
    const buttons = [
        {
            id: "1",
            name: "Room1"
        },
        {
            id: "2",
            name: "Room2"
        },
        {
            id: "3",
            name: "Room3"
        },
    ];
    const [selected, setSelected] = useState("1");
    const [click, setClick] = useState(false);
    const [data, setData] = useState([]);

    const filterData = (button) => { // Rename the parameter to avoid shadowing the filter function
        const filter = sliderData.filter((item) => item.id === button);
        setData(filter);
        setSelected(button);
        setClick(true);
    };

    useEffect(() => {
        const putData = (data) => {
            setData(data.filter((item) => item.id === "1"));
        };
        putData(sliderData);
    }, []);

    return (
        <div>
            <div className='midesection-body' id='news'></div>
            <div className='midesection-body-container'>
                <motion.div className='midsection-body-contents'initial="hidden" whileInView='visible' viewport={{once: true}}
                transition={{duration:1.5}}
                variants={{visible:{opacity:1, scale:1},hidden:{opacity:0, scale:0}}}>
                    <h2>Check out our Latest Items </h2>
                    <MidButton buttons={buttons} filter={filterData} selected={selected}></MidButton>
                </motion.div>
                <div className='midchildcontainer'>
                    <MidChild data={data} click={click}></MidChild>
                </div>
            </div>
        </div>
    );
}

export default MidFilterSection;
