import { mdiBallotOutline } from '@mdi/js'
import Head from 'next/head'
import { ReactElement } from 'react'
import CardBox from '../../components/CardBox'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/SectionMain'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { getPageTitle, inputClass, labelClass, formField, buttonClass } from '../../config'

const FormsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Add Listing')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Add Listing"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <div className="col-span-2">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold dark:text-white">Business information</h3>
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className={`${formField}`}>
                    <label htmlFor="first-name" className={`${labelClass}`}>
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="first-name"
                      className={`${inputClass}`}
                      placeholder=""
                      required
                    />
                  </div>
                  <div className={`${formField}`}>
                    <label htmlFor="last-name" className={`${labelClass}`}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className={`${inputClass}`}
                      placeholder="Green"
                      required
                    />
                  </div>
                  <div className={`${formField}`}>
                    <label htmlFor="phone-number" className={`${labelClass}`}>
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone-number"
                      id="phone-number"
                      className={`${inputClass}`}
                      placeholder="e.g. +(12)3456 789"
                      required
                    />
                  </div>
                  <div className={`${formField}`}>
                    <label htmlFor="email" className={`${labelClass}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`${inputClass}`}
                      placeholder="example@company.com"
                      required
                    />
                  </div>
                  <div className={`${formField}`}>
                    <label htmlFor="website" className={`${labelClass}`}>
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className={`${inputClass}`}
                      placeholder="https://company.com"
                      required
                    />
                  </div>

                  <div className={`${formField}`}>
                    <label htmlFor="socialMedia" className={`${labelClass}`}>
                      Social Media
                    </label>
                    <input
                      type="text"
                      name="socialMedia"
                      id="socialMedia"
                      className={`${inputClass}`}
                      placeholder="https://facebook.com/yourcompany"
                      required
                    />
                  </div>

                  <div className={`${formField}`}>
                    <label htmlFor="address" className={`${labelClass}`}>
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className={`${inputClass}`}
                      placeholder="e.g. California"
                      required
                    />
                  </div>

                  <div className={`${formField}`}>
                    <label htmlFor="category" className={`${labelClass}`}>
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className={`${inputClass}`}
                      placeholder="React Developer"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-full">
                    <button className={`${buttonClass}`} type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </CardBox>
      </SectionMain>
    </>
  )
}

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage
