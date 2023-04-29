import { useState, useEffect } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { mdiBallotOutline } from '@mdi/js';
import { getPageTitle } from '../../config';
import Head from 'next/head';
import axios from 'axios';
import PrimeDataTable from '../../components/PrimeDataTable';



const Listing = () => {

  const [products, setProducts] = useState([])

  const columns = [
    { field: 'userId', header: 'User Id' },
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    { field: 'body', header: 'Body' }
  ];


  const fetchPost = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res.data)

      // const data = res.data.map((item) => {
      //   return {
      //     id: item.id,
      //     title: item.title
      //   }
      // })
      setProducts(res.data)
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <Head>
        <title>{getPageTitle('Listing')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiBallotOutline} title="Buisness Listings" main>
        </SectionTitleLineWithButton>

        <PrimeDataTable />
        <CardBox>
        </CardBox>
      </SectionMain>

    </>
  )
}

Listing.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}


export default Listing