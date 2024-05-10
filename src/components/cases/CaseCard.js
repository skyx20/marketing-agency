import { Link } from "react-router-dom"

function CaseCard({ data, index }) {

  return (
    <Link
      to='/cases/id'
      onMouseEnter={() => {
        const title_element = document.getElementById(index)
        title_element.classList.add('text-myRed')
        const img = document.getElementById(data.id)
        // img.classList.add('object-scale-down')
      }}
      onMouseLeave={() => {
        const title_element = document.getElementById(index)
        title_element.classList.remove('text-black')
        const img = document.getElementById(data.id)
        // img.classList.remove('object-scale-down')
      }}

      className="flex flex-col overflow-hidden group rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img id={data.id} className="h-44 sm:h-96 w-full transition duration-900 ease-in-out object-cover" src={data.imageUrl} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-md sm:text-xl font-medium text-gray-800">
            <a href={data.category.href} className="hover:underline hover:underline-offset-4">
              {data.category.name}
            </a>
          </p>
          <a href={data.href} className="mt-2 block">
            <p id={index} className="group-hover:text-myRed lg:text-4xl pt-4 pb-6 sm:text-2xl text-xl font-semibold transition duration-400 ease-linear text-gray-900">{data.title}</p>
            <p className="mt-3 text-md sm:text-2xl space-y-2 leading-2 sm:leading-6 text-gray-500">{data.description}</p>
          </a>
        </div>
      </div>
    </Link>
  )
}

export default CaseCard