import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})