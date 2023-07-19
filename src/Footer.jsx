import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div>
    
                    <h5  className='text-center mt-4'>Copyright @{year}</h5>
               
          
   </div>
  )
}

export default Footer
