import sanityClient from '@sanity/client'

export const client = function (token: string = '') {
    return sanityClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: '2022-08-06', // use current UTC date - see "specifying API version"!
        token: token, // or leave blank for unauthenticated usage
        useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
    })
}