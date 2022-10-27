import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const topicsURL = 'http://localhost:8000/topics'

function Topics() {
    const [topics, setTopics] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(topicsURL)
            setTopics(data);
        }
        fetchData()
    }, [])

    return (
        <div className='categories'>
            <ul className='categoryLinks'>
                {topics.map(top => {
                    if (top.name === name) {
                        return (
                            <li key={top.id}><Link to={`/products?category=${top.category}`}>{top.category}</Link></li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default Topics