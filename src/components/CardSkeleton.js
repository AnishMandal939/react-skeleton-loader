import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((_, idx)=>(
        <div className='card-skeleton' key={idx} >
            <div className="left-col">
                <Skeleton circle width={40} height={40} />
            </div>
            <div className="right-col">
                <Skeleton count={4} style={{marginBottom: ".6rem"}} />
            </div>
        </div>
    ))
       
    )
}

export default CardSkeleton