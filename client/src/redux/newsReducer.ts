import { INews } from "../types/types"

const initialState: INews = {
    newsData: [
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Kazakhstan',
            tags: 43
        },
        {
            title: 'Politics',
            subtitle: 'Putin',
            tags: 5
        },
        {
            title: 'Trending in Russia',
            subtitle: 'IT',
            tags: 16
        },
        {
            title: 'Music',
            subtitle: '#The Weeknd',
            tags: 23
        },
        {
            title: 'Trending in Kazakhstan',
            subtitle: 'Tokaev',
            tags: 3
        },
        {
            title: 'Trending in cars',
            subtitle: 'Lamborghini',
            tags: 29
        },
        {
            title: 'Trending in cars',
            subtitle: 'Lamborghini',
            tags: 29
        },
    ]
}


const newsReducer = (state = initialState, action: any) => {
    return state
}

export default newsReducer 