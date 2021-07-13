import Link from 'next/link';

//navitem props

interface navItemProps {


	navItems:Array<navItemType>;
	
	position:positionType;
}

//nav item type 

export interface navItemType{
	name:string;
	bgcolor:string;
	path:string;
	hoverBg:string;
	textColor:string;
	
}

//position inteface 

export interface positionType{

	colStart:number;
	
	colCount:number;
	
}
const NavBar = ({navItems,position}:navItemProps) => {


	return (
	
			<div className="h-10 grid grid-cols-12">
				
				<div className="col-start-1 col-end-3 pl-5 pt-2">
					<div className="flex gap-2 items-center">
						<img src="/fwind.png" style={{height:'20px'}} />
						<span className="font-serif font-normal text-lg text-gray-400">Swiftbase</span>
					</div>
					
				</div>

				<div className={`col-start-9 col-end-13  grid grid-cols-3`}>

				{navItems.map((item) => (
						
							<div key={item.name} className={`border-1 bg-${item.bgcolor}-100 cursor-pointer hover:bg-white flex items-center justify-center font-sans font-normal text-${item.textColor}`}>
								<Link href={`${item.path}`}>{item.name}</Link>
							</div>
					
						
					))}

					
				</div>
                  
              </div>
	
	
	
	
	)


}






export default NavBar;