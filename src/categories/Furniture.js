// import { Link, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const topicsURL = 'http://localhost:8000/topics'

// function Furniture() {
//     const [topics, setTopics] = useState([])
//     const { topicName } = useParams()

//     useEffect(() => {
//         const fetchData = async () => {
//             const { data } = await axios.get(`${topicsURL}/furniture`)
//             setTopics(data)
//         }
//         fetchData()
//     }, [])

//     return (
//         <div className='furniture'>
//             <h4>Furniture</h4>

//             <ul className='furnLinks'>
//                 {topics.map(topic => {
//                     return (
//                         <li key={topic.id}><Link to='/products'>{topic.category}</Link></li>
//                     )
//                 })}
//             </ul>

//             {/* hard coded */}
//             {/* <ul>
//                 <li><Link to='/kitchen'>Kitchen</Link></li>
//                 <li><Link to='/livingRoom'>Living Room</Link></li>
//                 <li><Link to='/bedroom'>Bedroom</Link></li>
//             </ul> */}
//         </div>
//     )
// }

// export default Furniture