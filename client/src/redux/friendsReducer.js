const RENDER_FRIENDS = 'RENDER-FRIENDS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

const initialState = {
    friendsList: [],
    pagesSize: 9,
    totalUsersCount: 40,
    currentPage: 1,
    isFetching: false
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case RENDER_FRIENDS:
            return {
                ...state, friendsList: action.friendsList
            }


            case SET_CURRENT_PAGE:
                return {
                    ...state, currentPage: action.currentPage
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

        case TOGGLE_IS_FETCHING: 
                return {...state, isFetching:  action.isFetching}

        default: 
            return state
    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId})
export const renderFriendsActionCreator = (friendsList) => ({type: RENDER_FRIENDS, friendsList: friendsList})
export const changePageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export default friendsReducer;