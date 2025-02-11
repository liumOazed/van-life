import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    const vanElements = vans.map(van => (
        <div key={van.id} className='van-tile'>
            <img src={van.imageUrl} alt={van.name} />
            <div className='van-info'>
                <h2>{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            {/* <Link to={`/vans/${van.id}`}>Details</Link> */}
        </div>
    ))

    return (
        <div className='van-list-container'>
            <div className='van-list'>
                {vanElements}
            </div>
        </div>

    )
}