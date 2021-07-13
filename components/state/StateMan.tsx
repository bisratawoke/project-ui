import {createContext} from 'react';

//creating context

export const Context = createContext(null);
//init state

//state interface
export interface state {

    token:string | null;

    apiUrl:string;

    services:services;

    currentService:string;

    proj_pub_id:string;

    proj_name:string;


}
//services interface

export interface services{

    frontend:service;
    
    backend:service;

}

//service interface

export interface service {
    
    name:string;
    
    active:boolean;
    
    live:boolean;

}

export const init:state = {

    token:null,

    apiUrl:'http://swiftbase.com/api/project',

    proj_pub_id:null,

    proj_name:null,

    services:{

        frontend:{

            name:'Frontend',

            active:false,

            live:false

        },

        backend:{

            name:'Backend',

            active:false,

            live:false
        },

    },

    currentService:'splash'

}

//allowed actions

//allowed actions interface
export interface ACTIONS {

    SETTOKEN:string;

    SET_CURRENT_SERVICE:string;

    SET_PROJECT_INFO:string;

}

export const ACTIONS:ACTIONS = {

    SETTOKEN:'setToken',

    SET_CURRENT_SERVICE:'setcurrentservice',

    SET_PROJECT_INFO:'SET_PROJECT_INFO'

}

//project interface

export interface project{
    proj_name:string;
    description:string;
    proj_pub_id:string;
    owner:string;
}

export type projList = Array<project>;
//reducer

//action interface

export interface action {

    type:string;

    payload:any

}

//SET_PROJECT_INFO action type

export interface SETPROJECTACTION {

    type:string;

    payload: project

}
//reducer function

export const reducer = (state:state,action:action | SETPROJECTACTION):state => {

    switch(action.type){
        
        case ACTIONS.SETTOKEN:
            
            return {
                
                ...state,

                token:action.payload
                
            }
        
        case ACTIONS.SET_CURRENT_SERVICE:
            
            return {

                ...state,

                currentService:action.payload
            }
        
        case ACTIONS.SET_PROJECT_INFO:

            return {

                ...state,

                proj_pub_id:action.payload.proj_pub_id,

                proj_name:action.payload.proj_name


            }
    }

}