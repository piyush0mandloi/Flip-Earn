import React from 'react'
import Title from './Title'
import {useSelector} from 'react-redux'

const LatestListings = () => {
    const {listings} = useSelector(state=> state.listings)
  return (
    <div className='mt-20 mb-8'>
      <Title title="Latest Listings" description="Discover the hottest social profiles available right now." />
      <div>
        {listings.slice(0,4).map((listing, index)=>(
            <div key={index}>
                <h1>{listing.title}</h1>
                <h2>{listing.username}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default LatestListings
