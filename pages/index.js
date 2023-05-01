import Hero from '@/components/Hero'
import Head from 'next/head'
import Gallery from '@/components/Gallery'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import ContactUs from '@/components/ContactUs'

import { client } from '../lib/client'

export default function Home({ projects, homePageContent }) {
  return (
    <>
      <Head>
        <title>JAV Contractors App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='JAV Contractors' message='We focus on roofing, remodeling, and general contracting'/>
      <AboutUs homePageContent={homePageContent.length && homePageContent[0]}/>
      <Services />
      <Gallery projects={projects}/>
      <ContactUs />
    </>
  )
}

// The server fetches all content from Sanity.io
export const getServerSideProps = async () => {
  const query = '*[_type == "project"]';
  const projects = await client.fetch(query);
  const homePageQuery = '*[_type == "page" && name == "Home Page"]';
  const homePageContent = await client.fetch(homePageQuery);
  return {
    props: { projects, homePageContent }
  }
}
