import axios from 'axios'
import React, { useState } from 'react'

const topicsURL = 'http://localhost:8000/topics'

function Topics() {
    const [topics, setTopics] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(topicsURL)
            console.log(data);
        }
        fetchData()
    }, [])



    return (
        <div>
            {/* <ul>
                
            </ul> */}
        </div>
    )
}

export default Topics