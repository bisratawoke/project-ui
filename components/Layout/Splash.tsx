import React from 'react'

function Splash():React.ReactElement {
    return (

        <div className="col-start-1 col-end-13 grid grid-cols-12 grid-rows-3 grid-auto-min">
            <div className="col-start-1 col-end-13 bg-blue-400 grid grid-cols-12 grid-rows-1 grid-auto-max">
                <div className="col-start-2 col-end-6  flex  flex-col justify-center items-center gap-1">

                    <span className="text-4xl text-white font-sans font-bold">Get started</span>
                    <span className="text-sm text-white font-sans font-bold"> read up on how to work with swiftbase</span>

                    <button className="bg-gray-100 rounded-lg text-lg font-sans font-normal text-gray-400 px-2 py-1">Get started</button>
                </div>

            </div>
            <div className="col-start-1 col-end-13  row-start-2 row-span-full grid grid-cols-12 grid-rows-1 grid-auto-max">

                <div className="col-start-3 col-end-11 bg-white grid grid-cols-4 grid-rows-6 auto-rows-max gap-5"> 

                    <div className="row-start-2  row-end-6  border-2 border-gray-300 rounded-lg"></div>
                    <div className="row-start-2 row-end-6  border-2 border-gray-300 rounded-lg"></div>            
                    <div className="row-start-2 row-end-6  border-2 border-gray-300 rounded-lg">
                        comming soon
                    </div>
                    <div className="row-start-2 row-end-6  border-2 border-gray-300 rounded-lg">

                        comming soon

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Splash
