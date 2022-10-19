import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const topicsURL = 'http://localhost:8000/topics'

const [topics, setTopics] = useState([])
const { name } = useParams()
console.log(name);

useEffect(() => {
    const fetchData = async () => {
        const { data } = await axios.get(`${topicsURL}/${name}`)
        setTopics(data)
    }
    fetchData()
}, [])

function Topics() {
    return (
        <div>
            <h4>Furniture</h4>

            <ul className='furnLinks'>
                {topics.map(topic => {
                    return (
                        <li key={topic.id}><Link to='{topic.category}'>{topic.category}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Topics