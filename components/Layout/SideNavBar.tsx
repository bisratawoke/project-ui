import React,{useContext} from 'react'
import {Context,ACTIONS} from '../state/StateMan';

function SideNavBar():React.ReactElement {

    const {state,dispatch} = useContext(Context);

    return (
        <div className="col-start-1 col-end-2 bg-white border-2 border-gray-300">
            <div className="flex gap-5 flex-col">

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-gray-300 mb-10" 
                          
                >
                    <span className="font-sans font-normal text-1xl text-yellow-400">project name</span>

                </div>

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-gray-300 cursor-pointer py-2 border-t-2 bg-gray-100 hover:bg-white" 
                    
                    onClick={e => {

                        e.preventDefault();

                        dispatch({type:ACTIONS.SET_CURRENT_SERVICE,payload:state.services.frontend.name})

                    }}
                
                >
                    <span className="font-sans font-normal text-1xl text-gray-400">Frontend service</span>

                </div>

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-gray-300 cursor-pointer py-2 border-t-2 bg-gray-100 hover:bg-white"

                    onClick={e => {

                        e.preventDefault();

                        dispatch({type:ACTIONS.SET_CURRENT_SERVICE,payload:state.services.backend.name})


                    }}

                >
                    
                    <span className="font-sans font-normal text-1xl text-gray-400">Backend service</span>

                </div>

                <div 
                    
                    className="flex justify-center item-center border-b-2 border-gray-300 cursor-pointer py-2 border-t-2 bg-gray-100 hover:bg-white">
                    <span className="font-sans font-normal text-1xl text-gray-400">Pricing</span>
                
                </div>
                <div className="flex justify-center item-center border-b-2 border-gray-300 cursor-pointer py-2 border-t-2 bg-gray-100 hover:bg-white">
                    <span className="font-sans font-normal text-1xl text-gray-400">Documentation</span>
                </div>
                <div className="flex justify-center item-center border-b-2 border-gray-300 cursor-pointer bg-red-500 py-2 border-t-2 hover:bg-red-400">
                    <span className="font-sans font-normal text-1xl text-white">Logout</span>
                </div>


                
            </div>
           
           

        </div>
    )
}

export default SideNavBar
