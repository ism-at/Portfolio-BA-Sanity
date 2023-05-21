import React, { useState, useEffect } from "react";
import sanityClient from '../client.js'

export default function Project(){

    const [projectData, setProjectData] = useState(null);

    useEffect (() =>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

// Note: I can chnage lg with md and manipulate!
    return (
        <main className="bg-gray-100 min-h-screen p-4 lg:p-12">
            <section className="container mx-auto">
                <h1 className="text-2xl lg:text-3xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-sm lg:text-lg text-gray-600 flex justify-center mb-6 lg:mb-12">Welcome to my projects page</h2>
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* <!----- Mapping ------> */}
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-gray-900 p-16">
                        <h3 className="text-gray-500 text-2xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-3">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                            <strong className="font-bold">Place</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                            <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
                                <span role="img" aria-label="right-label">👉</span>
                                &#160; View The Source Code On GitHub{" "}
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
};
