const RENDER_FRIENDS = 'RENDER-FRIENDS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
    friendsList: [
        // {
        //     name: 'kirill',
        //     userId: '@ffsdfsdf',
        //     photos: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg',
            // followed: true,
        // }
    ]
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case RENDER_FRIENDS:
            return {
                ...state, friendsList: action.friendsList
            }
        
        case FOLLOW: 
            return {
                ...state, 
                friendsList: state.friendsList.map(f => {
                    if(f.id === action.userId) {
                        return {...f, followed: true}
                    }
                    return f
                })
            }

        case UNFOLLOW:
            return {...state, 
                friendsList: state.friendsList.map(f => {
                    if(f.id === action.userId) {
                        return {...f, followed: false}
                    }
                    return f
                })}

        default: 
            return state
    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId})
export const renderFriendsActionCreator = (friendsList) => ({type: RENDER_FRIENDS, friendsList: friendsList})
export default friendsReducer;