import React from 'react'
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

function Notifications() {
  return (
    <Main
      meta={
        <Meta
          title="Ylvonis"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      title='Notifications'
      nested={true}
    >
      <h1 className='text-2xl p-4 hidden md:block'>Notifications</h1>
      {/* <MainPage /> */}

    </Main>
  )
}

export default Notifications