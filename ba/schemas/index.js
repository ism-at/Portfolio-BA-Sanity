import blockContent from './blockContent';
import post from './post';
import author from './author';
// New added
import project from './project';

export const schemaTypes = [post, author, project, blockContent]

// export default createSchema({
//     name: "default",
//     types: schemaTypes.concat([
//         post, 
//         author, 
//         project, 
//         blockContent,
//     ]),
// });