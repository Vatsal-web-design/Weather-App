import React, { useState } from 'react'

const SearchCity = ({ searchinp }) => {
  const [inp, setInp] = useState('')

  const searchInp = (e) => {
    searchinp(inp)
  }
  return (
    <div className='flex gap-3 justify-center items-center'>
      <input onChange={(e) => setInp(e.target.value)} type="text" placeholder='Enter City' className='border-red-500 rounded-lg pr-32 pl-2 py-2' />
      <button onClick={searchInp} className='bg-black text-white py-1  px-3 rounded-lg'>Submit</button>
    </div>
  )
}

export default SearchCity