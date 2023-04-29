import { useState, useEffect } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/SectionMain'
import CardBox from '../../components/CardBox'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { mdiBallotOutline } from '@mdi/js'
import { getPageTitle } from '../../config'
import Head from 'next/head'
import axios from 'axios'
import PrimeDataTable from '../../components/PrimeDataTable'

const Listing = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Packages')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Packages"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <PrimeDataTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

Listing.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Listing
