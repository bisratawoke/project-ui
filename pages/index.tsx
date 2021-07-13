import Footer from '../components/Layout/Footer';
import NavBar,{navItemType,positionType} from '../components/Layout/NavBar';
import {FaPlus} from 'react-icons/fa';
import Link from 'next/link';
import {useEffect,useContext} from 'react';
import {Context} from '../components/state/StateMan';

//navItems
const NavItems:Array<navItemType> = [

  {name:'Documentation',bgcolor:'gray',path:'/',hoverBg:'gray',textColor:'gray'},

  {name:'pricing',bgcolor:'gray',path:'/',hoverBg:'gray',textColor:'gray'},
  
  {name:'logout',bgcolor:'green',path:'/',hoverBg:'green',textColor:'gray'}



];

//position of nav items
const position:positionType = {

  colStart:7,

  colCount:3

}
export default function Home() {
  const {state,dispatch} = useContext(Context);

  useEffect(() => {
    
    console.log(state);

    let token = window.localStorage.getItem('swiftbasetoken') || null ;

    console.log(token);

    if(token) {

      console.log('setting token');
    }
    else {

      //window.location.assign('http://swiftbase.com');

    }
  }, [])
  return (
    <div className="h-screen flex flex-col">
        <NavBar navItems={NavItems} position={position} />
        <div className="flex-grow  flex border-2 flex-col">
          <div className="border-b-2 flex justify-center items-center h-10">

              <span className="font-sans font-normal text-lg text-gray-400">projects</span>

          </div>

          <div className="flex-grow grid grid-cols-12">

              <div className="col-start-3 col-end-11 grid grid-rows-4 grid-cols-4 auto-rows-max pt-5">
                <Link href="/createProject">
                  <div className="border-2 border-gray-300 hover:border-blue-400  cursor-pointer flex justify-center items-center flex-col">

                      <FaPlus />
                      <span className="font-sans font-normal text-lg text-gray-400">create project</span>
                     
                  </div>
                </Link>

              </div>
          </div>

        </div>
        <Footer />
    </div>
  )
}
