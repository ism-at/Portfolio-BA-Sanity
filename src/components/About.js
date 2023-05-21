// --------- Responsive -----------------//
import React, { useState, useEffect } from "react";
import sanityClient from '../client.js';
import image  from "../imgs/15.jpg";
import imageUrlBuilder  from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}
export default function About(){
  const [author, setAuthor] = useState(null);

  useEffect (() =>{
    sanityClient.fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
    }`)
    .then((data) => setAuthor(data[0]))
    .catch(console.error);
  }, []);
  if(!author) return <div>Loading...</div>;
  return (
    // <main className="relative min-h-screen items-center justify-center">
    <main className="relative min-h-screen"> 
      <img src={image} alt="gitHub" className="absolute w-full h-full object-cover"/>
      <div className="p-4 sm:p-10 lg:pt-48 container mx-auto relative">
        <section className="aboutMe rounded-lg shadow-2xl lg:flex p-4 sm:p-10">
          <img src={urlFor(author.authorImage).url()} className="object-cover rounded w-32 h-32 lg:w-64 lg:h-64 mr-4 lg:mr-8" alt={author.name}/>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-3xl sm:text-4xl lg:text-3xl text-gray-300 mb-4">
              Hi there... I'm{" "}
              <span className="text-gray-300">{author.name}</span>
            </h1>
            <div className="prose sm:prose-lg lg:prose-xl text-white">
              <BlockContent blocks={author.bio} projectId="b2qwd9qn" dataset="production"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
