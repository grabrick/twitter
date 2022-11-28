import { INews } from "../types/types"

const initialState: INews = {
    newsData: [
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: '43 Tweets'
        },
        {
            title: 'Politics',
            subtitle: 'Putin',
            tags: '5 Tweets'
        },
        {
            title: 'Trending in Russia',
            subtitle: 'IT',
            tags: '16 Tweets'
        },
        {
            title: 'Music',
            subtitle: '#The Weeknd',
            tags: '23 Tweets'
        },
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Tokaev',
            tags: '3 Tweets'
        },
        {
            title: 'Trending in cars',
            subtitle: 'Lamborghini',
            tags: '29 Tweets'
        },
    ],
}


const newsReducer = (state = initialState, action: any) => {
    return state
}

export default newsReducer 