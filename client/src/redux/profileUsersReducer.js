const GET_PROFILE = 'GET-PROFILE'

let initialState = {
    users: [
        {   
            name: 'Davide Biscuso',
            id: 'biscuttааuffffffffffffff',
            photo: 'https://sun3-9.userapi.com/impg/T8ZcmBxIb6STSCuvncXig3ZWNqLYd-Au4VJEgA/SrEgfaC4Ixo.jpg?size=1279x1920&quality=95&sign=9746aa66c48ba6156c7f61b78c8e81e5&type=album',
            backImage: '',
            job: 'Product Designer',
            bio: '',
            location: 'London',
            hbInfo: 'Joined September 2011',
            following: '569',
            followers: '72'
        },
    ],
}


let profileUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {
                ...state, users: action.users
            }

        default: return state
    }
}

export const getProfileActionCreator = (users) => ({type: GET_PROFILE, users: users})
export default profileUsersReducer