export interface IFPhoto {
    large?: string,
    small?: string  
}

export interface IFriends {
    name: string,
    id: number,
    followed: boolean,
    photo: IFPhoto,
}

export interface ITweet {
    tweetData: [
        {
            avatar: string,
            name: string,
            id: string,
            text: string,
            image: string
        }
    ],
    newTweetText: string
}

export interface IMessage {
    messageCatalog: [
        {
            name: string,
            userId: string,
            lastMessage: string,

        }
    ],
    messageDialog: [
        {
            message: string,

        }
    ],
    newMessageBody: string
}

export interface ISFriends {
    friendsList: [],
    pagesSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
