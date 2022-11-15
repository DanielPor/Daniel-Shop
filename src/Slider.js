import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import images from './images/Imgs.js'

function Slider() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <motion.div ref={carousel} className='slider-container' whileTap={{
            cursor: 'grabbing'
        }}>
            < motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-slider' >
                {/* <span className='arrow'>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </span> */}
                {images.map((image, index) => {
                    return (
                        <motion.div key={index} className='photo'>
                            <img src={image} alt='photo' />
                        </motion.div>
                    )
                })}
                {/* <span className='arrow'>
                    <FontAwesomeIcon icon={faCaretRight} />
                </span> */}
            </motion.div >
        </motion.div >
    )
}

export default Slider


