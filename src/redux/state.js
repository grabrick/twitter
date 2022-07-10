import { rerenderEntireTrea } from "../render";

let state = {
    tweetData: [
        {
            id: '@johndue',
            name: 'Devon Lane',
            text: 'Tom is in a big hurry.',
            tweetImage: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
        }
    ],
    
    newsData: [
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: '43 Tweets'
        },
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: '43 Tweets'
        },
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: '43 Tweets'
        },
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: '43 Tweets'
        },
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: '43 Tweets'
        },
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: '43 Tweets'
        },
    ]
}



export let addPost = (postMessage, postImage) => {
    let newPost = {
        id: '@ggrrht',
        name: 'Kirill',
        text: postMessage,
        tweetImage: postImage
    };
    state.tweetData.push(newPost);
    rerenderEntireTrea(state)
}

export default state