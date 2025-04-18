import React, { useState } from 'react'
import Header from '../others/Header.jsx'
import BuildingCardDiv from '../others/Property-cards/BuildingCardDiv.jsx'
import { Sidebar, SidebarItem } from '../Nav/Sidebar.jsx'
import { BarChart2, BarChart3, LayoutDashboard, LifeBuoy, Receipt, ReceiptIndianRupee, Settings, Settings2 } from 'lucide-react'
const Owner = ({data}) => {

  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  return (
    <>
      {/* <Header/> */}
      <div className=' h-screen flex '>
       

          <Sidebar>
            <SidebarItem 
              icon={ <LayoutDashboard size={20} /> }
              text={"Dashboard"}  
              active
              
            />

            <SidebarItem 
              icon={ <BarChart3 size={20} /> }
              text={"Statistics"}  
              
            />

            <SidebarItem 
              icon={ <ReceiptIndianRupee size={20} /> }
              text={"Billings"}  
              alert
            />

            <SidebarItem 
              icon={ <Settings size={20} /> }
              text={"Settings"}  
              alert
              
            />

            <SidebarItem 
              icon={ <LifeBuoy size={20} /> }
              text={"Help"}  
                
            />

          </Sidebar>
          
        
        <div className='flex-1 overflow-y-auto'>
          <BuildingCardDiv data={data} />

        </div>
      </div>
        
      
    </>
  )
}

export default Owner


