import {createContext} from 'react';

//creating context

export const Context = createContext(null);
//init state

//state interface
export interface state {

    token:string | null;

    apiUrl:string;

    services:services;

    currentService:string


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

    SET_CURRENT_SERVICE:string

}

export const ACTIONS:ACTIONS = {

    SETTOKEN:'setToken',

    SET_CURRENT_SERVICE:'setcurrentservice'

}
//reducer

//action interface

export interface action {

    type:string;

    payload:any

}
//reducer function

export const reducer = (state:state,action:action):state => {

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

    }

}