import React from 'react'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { store } from '../stores/store'
import { Provider } from 'react-redux'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.css' // icons
import 'primeflex/primeflex.css'
import '../css/main.css'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Component {...pageProps} />
        </>
      )}
    </Provider>
  )
}

export default MyApp
