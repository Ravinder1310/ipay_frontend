import { Button } from '@chakra-ui/react'
import React from 'react'
import Layout from '../Layout/Layout'

function Pdf_Video() {
  return (
    <Layout>
      <div className='flex pt-24 justify-around '>
        <Button className='p-4 border-2 font-bold hover:text-white hover:border-b-2 duration-300   w-[40%] rounded-lg'>PDF</Button>
        <Button className='p-4 border-2 font-bold hover:text-white hover:border-b-2 duration-300   w-[40%] rounded-lg'>Videos</Button>
      </div>
      
    </Layout>
  )
}

export default Pdf_Video
