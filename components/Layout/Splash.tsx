import React from 'react'

function Splash():React.ReactElement {
    return (

        <div className="col-start-1 col-end-13 grid grid-cols-12 grid-rows-3 grid-auto-min">
            <div className="col-start-1 col-end-13 bg-blue-500 grid grid-cols-12 grid-rows-1 grid-auto-max">
                <div className="col-start-2 col-end-6  flex  flex-col justify-center items-center gap-1">

                    <span className="text-4xl text-white font-sans font-bold">Get started</span>
                    <span className="text-sm text-white font-sans font-bold"> read up on how to work with swiftbase</span>

                    <button className="bg-gray-100 rounded-lg text-lg font-sans font-normal text-gray-400 px-2 py-1">Get started</button>
                </div>

            </div>
            <div className="col-start-1 col-end-13  row-start-2 row-span-full grid grid-cols-12 grid-rows-1 grid-auto-max">

                <div className="col-start-3 col-end-11 bg-white grid grid-cols-4 grid-rows-6 auto-rows-max gap-5"> 

                    <div 
                        className="flex flex-col justify-center items-center flex-coltransition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 row-start-2  row-end-6  border-2 border-gray-300 rounded-lg bg-gradient-to-b  cursor-pointer from-yellow-500  to-yellow-300  "
                        
                    >
                         <span className="text-lg text-white font-sans font-bold">Deploy frontend appication</span>
                        <span className="text-sm text-white font-sans font-bold"> read up on how to work with swiftbase</span>

                        <button className="bg-gray-100 rounded-lg text-lg font-sans font-normal text-gray-400 px-2 py-1">Get started</button>

                    </div>
                    <div className="transition flex flex-col justify-center items-center duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 bg-gradient-to-t from-purple-400 via-pink-500 to-red-500 row-start-2 row-end-6  border-2 border-gray-300 rounded-lg">
                        
                        <span className="text-lg text-white font-sans font-bold">Deploy backend appication</span>
                        <span className="text-sm text-white font-sans font-bold"> read up on how to work with swiftbase</span>

                        <button className="bg-gray-100 rounded-lg text-lg font-sans font-normal text-gray-400 px-2 py-1">Get started</button>
                    </div>            
                    <div className="row-start-2 flex flex-col justify-center items-center bg-gray-400 text-white row-end-6  border-2 border-gray-300 rounded-lg">
                        comming soon
                    </div>
                    <div className="row-start-2 row-end-6  flex flex-col justify-center items-center bg-gray-400 text-white border-2 border-gray-300 rounded-lg">

                        comming soon

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Splash
