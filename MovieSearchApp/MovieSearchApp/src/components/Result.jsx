import React from 'react'

function Result(props) {
    const boxes =props.movies.map((item,index)=>{
        return <Box key={index} image={item.poster_path} title={item.original_title} ratings={item.vote_average}/>
    })
    return (
        <div className='w-full grid md:grid-cols-4 gap-5'>
        
         {boxes}
        </div>
    )
}

export default Result


const Box = (props)=>{
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return(
        <div className='shadow min-h-[200px] border mt-3'>
       <img src={IMGPATH+ props.image} className='w-full' alt="" />
        <div className='flex justify-between px-2 items-center'>
            <span className='text-2xl'> {props.title}</span>
            <span className="text-2xl text-yellow-500 font-bold  "> ⭐{props.ratings}</span>
        </div> 
        </div>
    )
}