import React from 'react'
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import MainPage from  '@/components/settings/profile';
function Profile() {
  return (
    <Main
      meta={
        <Meta
          title="Ylvonis"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      title='Profile'
      nested={true}
    >
      <MainPage />

    </Main>
  )
}

export default Profile