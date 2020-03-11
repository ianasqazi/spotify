// INSTRUCTIONS
/* */

const timeout = ms => new Promise(res => setTimeout(res, ms));

// a sample image
const sampleImage = "https://picsum.photos/200";

export default async ({ offset, limit, q, }) => {

    await timeout(300);
    console.log ('mocksearch : q = ', q);
    let mapFunc = i => ({ id: i + offset, title: `Song ${q} ${i + offset}`, imageUri: sampleImage });
    return [...Array(limit).keys()].map(mapFunc);

}