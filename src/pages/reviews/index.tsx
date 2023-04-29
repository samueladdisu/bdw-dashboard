import { useState, useEffect } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/SectionMain'
import CardBox from '../../components/CardBox'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { mdiBallotOutline, mdiCommentProcessing } from '@mdi/js'
import { getPageTitle } from '../../config'
import Head from 'next/head'
import axios from 'axios'
import PrimeDataTable from '../../components/PrimeDataTable'

const Reviews = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Reviews')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiCommentProcessing}
          title="Reviews"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <PrimeDataTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

Reviews.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Reviews
