import React from 'react'
import './Card.css'
import { cardData } from '../../DataForPage/dummyData'
import googlePlay from '../../assets/images/google-play.svg'
import appleStore from '../../assets/images/apple-store.svg'
import star from '../../assets/images/star.svg'
import starWhite from '../../assets/images/starWhite.svg'
import {motion} from 'framer-motion';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


const Cards = () => {
    const starlist = [1,2,3,4,5]
  return (
    <div>
        <div id='demo'>
            <div className='card-conatiner'>
                <h2>Request Demo App</h2>
                <p>Explore all the Proucts available in ThroneCraft and more..</p>
                <div className='card-image-container'>
                    <div className='store-icon'>
                        <img src={googlePlay} alt="Google App" />
                    </div>
                    <div className='store-icon'>
                        <img src={appleStore} alt="applestore" />
                    </div>

                </div>
            </div>
        </div>
        <div className='card-grid-container'>
            {cardData.map((item)=>{
                return <motion.div className='cards-content' key={item.id} initial='hidden' whileInView="visible"
                        viewport={{once:true}}
                        transition={{duration:1.5}}
                        variants={{visible: {opacity:1, scale:1}, hidden: {opacity:0, scale:1}}}
                        >
                    <Card className="mt-6 w-96">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                            {item.title}
                            </Typography>
                            <Typography>
                            {item.text}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button>Read More</Button>

                        </CardFooter>
                </Card>
                </motion.div>
            })}

        </div>
    </div>
  )
}

export default Cards