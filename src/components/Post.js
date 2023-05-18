// import React, { useState, useEffect } from "react";
// import  { Link }  from "react-router-dom";
// import sanityClient from '../client.js'


// export default function Post(){

//     // Hier we are using reactHooks setSate --> useState/useEffect {fetching Date} --> setState { newData }

//     // setSate
//     const [postData, setPost] = useState(null);

//     useEffect (() =>{
//         sanityClient.fetch(`*[_type == "post"]{
//             title,
//             slug,
//             mainImage{
//                 asset->{
//                     _id,
//                     url
//                 },
//                 alt
//             }
//         }`
//         )
//         .then((data) => setPost(data))
//         .catch(console.error);
//     }, []);
// //<main className="bg-gray-900 min-h-screen p-12">
//     return(
//         <main className="h-screen w-screen bg-gray-300"> 
//         {/* <img src={image} alt="Background" className="absolute object-cover w-full h-full"/> */}
//             <section className="container mx-auto">
//                 <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>
//                 <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome</h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {postData && postData.map((post, index) => (
//                     <article>
//                         <Link to={"/post/" + post.slug.current} key={post.slug.current}>
//                         <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-800"
//                         key={index}>
//                             <img
//                             src={post.mainImage.asset.url}
//                             alt={post.mainImage.alt}
//                             className="w-full h-full rounded-r object-cover absolute"
//                             />
//                             <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
//                                 <h3  className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
//                                     {post.title}
//                                 </h3>
//                             </span>
//                         </span>
//                         </Link>
//                     </article>
//                     ))}
//                 </div>
//             </section>
//         </main>
//     )

    
// }


import React, { useState, useEffect } from "react";
import  { Link }  from "react-router-dom";
import sanityClient from '../client.js'
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  marks: {
    link: ({mark, children}) => {
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

export default function Post(){
    // setSate
    const [postData, setPost] = useState(null);

    useEffect (() =>{
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            body
        }`
        )
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    return(
        <main className="h-screen w-screen bg-gray-300"> 
            <section className="container mx-auto">
                <h1 className="text-4xl pt-3 flex justify-center cursive">Blog Posts Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-800"
                        key={index}>
                            <img
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt}
                            className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3  className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    {post.title}
                                </h3>
                                <div className="prose prose-sm max-w-none">
                                    <BlockContent blocks={post.body} serializers={serializers} />
                                </div>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
