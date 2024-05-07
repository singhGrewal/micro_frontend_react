import {Link} from "react-router-dom"

export default ({options}) => {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
            {options.map((option, index) =>
                    <div key={index}>
                        <Link to="/"
                              className="hover:underline hover:text-gray-600">
                            {option}
                        </Link>
                        <span>
        <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </span>
                    </div>
            )}
        </div>
    </div>
}
