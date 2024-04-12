function ServiceCard({data,index}){
    return(
        <div
        onMouseEnter={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-myRed')
            title_element.classList.remove('text-myRed')
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.remove('text-myRed')
            title_element.classList.add('text-myRed')
        }} 
        className="w-full relative p-8 h-96 lg:h-[200pm] bg-white hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full ">
                <img alt="" src={data.img} className='w-10 h-10'/>
                <h2 className="text-xl font-semibold text-myRed pt-8">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.title}</p>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
                <h2 id={index} className="items-end text-xl font-semibold text-gray-900 pt-8">learn More</h2>
            </div>
        </div>
    )
}
export default ServiceCard