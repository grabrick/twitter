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
    switch(action.type) {
        case RENDER_FRIENDS:
            return {
                ...state, users: action.friendsList
            }

        default: 
            return state
    }
}

export const renderFriendsActionCreator = () => ({type: RENDER_FRIENDS})
export default friendsReducer;