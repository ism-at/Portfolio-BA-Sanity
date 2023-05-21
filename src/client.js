// import  sanityClient  from '@sanity/client'

// export default sanityClient({
//     projectId: 'b2qwd9qn',
//     dataset: 'production'
// })

import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'b2qwd9qn',
    dataset: 'production',
    useCdn: false, // Fetch data from the Sanity CDN
});
