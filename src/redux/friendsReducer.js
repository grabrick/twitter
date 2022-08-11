const RENDER_FRIENDS = 'RENDER-FRIENDS'

const initialState = {
    friendsList: [
        // {
        //     name: 'kirill',
        //     userId: '@ffsdfsdf',
        //     photos: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg',
        //     followed: true,
        // }
    ]
};

const friendsReducer = (state = initialState, action) => {
    // debugger
    switch(action.type) {
        case RENDER_FRIENDS:
            return {
                ...state, friendsList: action.friendsList
            }

        default: 
            return state
    }
}

export const renderFriendsActionCreator = (friendsList) => ({type: RENDER_FRIENDS, friendsList: friendsList})
export default friendsReducer;