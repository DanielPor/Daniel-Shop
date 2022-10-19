import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const topicsURL = 'http://localhost:8000/topics'

function Clothes() {
    const [clothes, setClothes] = useState([])
    const { topicName } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${topicsURL}/clothes`)
            setClothes(data)
        }
        fetchData()
    }, [])

    return (
        <div className='clothes'>
            <h4>Clothes</h4>

            <ul className='clothesLinks'>
                {clothes.map(cloth => {
                    return (
                        <li key={cloth.id}><Link>{cloth.category}</Link></li>
                    )
                })}
            </ul>



            {/* <ul>
                <li><Link to='/pants'>Pants</Link></li>
                <li><Link to='/shirts'>Shirts</Link></li>
                <li><Link to='/shoes'>Shoes</Link></li>
            </ul> */}
        </div >
    )
}

export default Clothes