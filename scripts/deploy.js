import fs from 'fs-extra';

fs.rename('./build', './docs');

// import fs from 'fs-extra';
// import replace from 'replace-in-file';

// const options = {
//     //Glob(s) 
//     files: [
//         './build/**/*.html',
//     ],
//     //Replacement to make (string or regex) 
//     from: /\/_app/g,
//     to: '_app'
// };

// // try {
// //     let changedFiles = replace.sync(options);
// //     console.log('Modified files:', changedFiles.join(', '));
// // }
// //     catch (error) {
// //     console.error('Error occurred:', error);
// // }

// const dir = fs.readdirSync('./build');
// console.log('BUILDING FOR PRODUCTION');
// dir.forEach(item => {
//     console.log(`Moving ./build/${item}`);
//     fs.move('./build/'+item, './'+item, {
//         overwrite: true
//     });
// });
// console.log('✅ FINISHED');