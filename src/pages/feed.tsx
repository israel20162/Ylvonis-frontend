import React from 'react'
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import MainPage from '@/components/feed/mainpage';

function Feed() {
  return (
    <Main
      meta={
        <Meta
          title="Ylvonis"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      title='Feed'
    >
<MainPage />
    </Main>
  )
}

export default Feed