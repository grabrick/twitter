let rerenderEntireTrea = () => {
    console.log('fffgrg');
}

let state = {
    mainTweetData: {
        tweetData: [
            {
                id: '@johndue',
                name: 'Devon Lane',
                text: 'Tom is in a big hurry.',
                tweetImage: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
            }
        ],
        newTweetText: ''
    },
    
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



export const addPost = () => {
    let newPost = {
        id: '@ggrrht',
        name: 'Kirill',
        text: state.mainTweetData.newTweetText,
    };
    state.mainTweetData.tweetData.push(newPost);
    state.mainTweetData.newTweetText = '';
    rerenderEntireTrea(state);
}

export const updateNewTweetText = (newText) => {
    state.mainTweetData.newTweetText = newText;
    rerenderEntireTrea(state);
}

export const subscribe = (observer) => {
   rerenderEntireTrea = observer;
}
export default state