import fs from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {

    const docsDir = './src/routes/docs';
    const dirList = ['actions', 'components', 'plugins'];

    let menu = [];

	const dirs = fs.readdirSync(docsDir);
    dirs.forEach(dir => {
        if (dirList.includes(dir)) {

            let item = {
                route: `/docs/${dir}`,
                label: dir,
                submenu: []
            };

            const files = fs.readdirSync(`${docsDir}/${dir}`);
            files.forEach(file => {
                let fileName = file.split('.')[0];
                item.submenu = [...item.submenu, {
                    route: `/docs/${dir}/${fileName}`,
                    label: fileName
                }]
            });

            menu = [...menu, item];
        }
    })

    

	return {
        body: menu
    };
}