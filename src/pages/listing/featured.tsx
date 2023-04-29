import React, { useState, useEffect } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { getPageTitle, inputClass, labelClass, formField, buttonClass } from '../../config'
import Head from 'next/head'
import SectionMain from '../../components/SectionMain'
import { mdiBallotOutline } from '@mdi/js'
import CardBox from '../../components/CardBox'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { ProductService } from '../../service/ProductService'

interface Product {
  id: string
  code: string
  name: string
  description: string
  image: string
  price: number
  category: string
  quantity: number
  inventoryStatus: string
  rating: number
}

function Categories() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data))
  }, [])

  const [checkbox1, setCheckbox1] = useState([])

  const showLogs2 = (e) => {
    setCheckbox1(e)
    console.log('checkboxes data', e)
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Featured')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Featured Listings"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <DataTable value={products} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
            <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
            <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
            <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
          </DataTable>
        </CardBox>
      </SectionMain>
    </>
  )
}

Categories.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Categories
