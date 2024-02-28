import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faWind, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Data = (props) => {
  return (
    <div className='pt-6 pl-20'>
      <ul className='' >
        <img src={props.weather} alt="" className='h-60' />
        {/* <li className='text-xl pt-3'>City:{props.city}</li> */}
        <div className='flex gap-4'>
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} className='pt-5' />
          <li className='text-xl pt-3'>Temperature:{props.displayT}</li>
        </div>
        <div className='flex gap-4'>
          <FontAwesomeIcon icon={faWind} className='pt-5' />
          <li className='text-xl pt-3'>Wind:{props.displayW}</li>
        </div>
        <div className='flex gap-4'>
          <FontAwesomeIcon icon={faCircleInfo} className='pt-5' />
          <li className='text-xl pt-3'>Description:{props.displayD}</li>
        </div>
      </ul>
    </div>
  )
}

export default Data