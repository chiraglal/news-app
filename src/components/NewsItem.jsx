import React from 'react'
import image from '../assets/News.jpg'
const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className='grid lg:grid-cols-1 gap-2'>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src={src ? src : image} />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title.slice(0, 50)}</h2>
                <p className="text-base leading-relaxed mt-2">{description ? description.slice(0, 90) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, commodi. Asperiores saepe quaerat incidunt exercitationem qui alias, tempore iste quisquam."}</p>
                <a className="text-indigo-500 inline-flex items-center mt-3" href={url}>Read More
                </a>
            </div>
        </div >
    )
}

export default NewsItem