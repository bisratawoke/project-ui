import Footer from '../components/Layout/Footer';
import NavBar,{navItemType,positionType} from '../components/Layout/NavBar';
import {FaPlus, FaProjectDiagram} from 'react-icons/fa';
import Link from 'next/link';
import {useEffect,useContext,useState} from 'react';
import {Context,projList,project} from '../components/state/StateMan';
import ProjectListItem from '../components/Layout/ProjectListItem';
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
//project list interface


export default function Home() {

  const {state,dispatch} = useContext(Context);

  const [projArray,setProjArray] = useState<projList | null>(null);

  useEffect(() => {
    
    console.log(state);
    
    let params = new URLSearchParams(window.location.href);
    
    let token = null;
    
    params.forEach(p => token = p);
  
    if(token) {

      //making api call to get list of projects for an authorized user

      const opt = {

          headers:{

            'authorization':`token ${token}`

          },
        
          method: 'GET'

      
        }

      fetch(`${state.apiUrl}/find`,opt)
       
      .then(response => {
        
        if(response.status === 200){

          return response.json();

        }

        else {

          return response.json();
        }
         
       })
       .then(result => {

        console.log(`this is the result ${result}`);

        setProjArray(result.message);

       })
       .catch(err => {

        console.log(err);

       })
    }
    else {

      console.log('no token');

      window.location.assign('http://swiftbase.com');

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

              <div className="col-start-3 col-end-11 grid grid-rows-4 grid-cols-4 auto-rows-max pt-5 gap-x-3">
                <Link href="/createProject">
                  <div className="border-2 border-gray-300 hover:border-blue-400  cursor-pointer flex justify-center items-center flex-col">

                      <FaPlus />
                      <span className="font-sans font-normal text-lg text-gray-400">create project</span>
                     
                  </div>
                </Link>

                {

                  projArray && projArray.map((project:project) => (

                      <ProjectListItem
                        
                        proj_name={project.proj_name} 
                        
                        description={project.description} 
                        
                        owner={project.owner}

                        proj_pub_id={project.proj_pub_id}

                        key={project.proj_pub_id}

                      />
                  ))

                }

              </div>
          </div>

        </div>
        <Footer />
    </div>
  )
}
