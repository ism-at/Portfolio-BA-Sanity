// export default {
//     name: "project",
//     title: "Project",
//     type: "document",

//     fields: [
//         {
//             name: "title",
//             type: "string",
//         },
//         {
//             name: "date",
//             type: "datetime",
//         },
//         {
//             name: "place",
//             type: "string",
//         },
//         {
//             name: "description",
//             type: "text",
//         },
//         {
//             name: "projectType",
//             title: "Project type",
//             type: "string",
//             options: {
//                 list: [
//                     { value: "persornal", title: "Personal" },
//                     { value: "client", title: "Client" },
//                     { value: "university", title: "University" },
//                 ],
//             },
//         },
//         {
//             name: "link",
//             type: "url",
//         },
//         {
//             name: "tag",
//             type: "array",
//             of: [
//                 {
//                         type: "string",
//                 },
//             ],
//             options: {
//                 layout: "tags",
//             },
//         },
//     ],
    
// };

export default {
    name: "project",
    title: "Project",
    type: "document",

    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "university", title: "University" },
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tag",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
    
};
