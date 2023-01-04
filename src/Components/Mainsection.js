import React from 'react'

export const Mainsection = () => {
  return (
    <div className='main-div'>
      <p className='funfacts'> Fun Facts About React </p>
      {/* <ul className='list-of-facts'>
        <li> Was First Released in 2013</li>
        <li> Was originally created by Jordan Walke</li>
        <li>has well over 100K stars on Github </li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul> */}

      <div className='circle'>

        <div className='outer-circle-1'>
        <p className='para-styling'>
           React Was originally created <br/> by Jordan Walke
          </p>
        </div>

        <div className='inside-circle-1'>
          <p className='para-styling'>
           React Was First Released <br/> in 2013
          </p>
        </div>


        <div className='outer-circle-2'>

        <p className='para-styling'>
          React Is maintained <br/> by Facebook
          </p>

        </div>

        <div className='inside-circle-2'>
          <p className='para-styling'>
           React has well over <br/> 100K stars on Github
          </p>
        
        </div>

        <div className='outer-circle-3'>

        <p className='para-styling'>
            Powers thousands of enterprise apps,<br/> including mobile apps
          </p>

        </div>


      </div>

    </div>
  )
}
