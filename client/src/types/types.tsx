type FPhoto = {
    large?: string,
    small?: string  
}

export type close = {
    close: () => void
}

export type TweetItem = {
    avatar: string,
    name: string,
    _id: string,
    text: string,
    image?: string
}

export type CatalogItem = {
    name: string,
    userId: string,
    lastMessage: string,
}

export type SmallPopup = {
    name: string, 
    photo: string, 
    id: string
    close?: close
}

type DialogItem = {
    message: string
}
 
export type newsItem = {
    title: string,
    subtitle: string,
    tags: number
}
 
export type ProfileItem = {
    name: string,
    id: string,
    photo: string,
    backImage: string,
    job: string,
    bio: string,
    location: string,
    hbInfo: string,
    following: number,
    followers: number,
    close?: close
}

export type NavPopup = {
    close?: close
}

export interface INews {
    newsData: newsItem[]
}

export interface ITweet {
    tweetData: TweetItem[],
    newTweetText: string
}

export interface IFriends {
    name: string,
    id: number,
    followed: boolean,
    photo: FPhoto,
}

export interface IMessage {
    messageCatalog: CatalogItem[]
    messageDialog: DialogItem[]
    newMessageBody: string
}

export interface ISFriends {
    friendsList: [],
    pagesSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

export interface IProfile {
    users: ProfileItem[]
}