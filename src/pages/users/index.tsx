import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/SectionMain'
import CardBox from '../../components/CardBox'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { mdiAccountMultiple } from '@mdi/js'
import { getPageTitle } from '../../config'
import Head from 'next/head'
import PrimeDataTable from '../../components/PrimeDataTable'

const Reviews = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Users')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiAccountMultiple}
          title="Users"
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
