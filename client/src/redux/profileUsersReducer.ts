import { IProfile } from "../types/types"
const GET_PROFILE = 'GET-PROFILE'

const initialState: IProfile = {
    users: [
        {
            name: 'Davide Biscuso',
            id: 'biscuttuffffffffffffff',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXoCN9retT9mNF8GnefpqgDctB0ZH0P8g_g&usqp=CAU',
            backImage: '',
            job: 'Product Designer',
            bio: '',
            location: 'London',
            hbInfo: 'Joined September 2011',
            following: 565,
            followers: 72,
            close: undefined
        }
    ]
}


let profileUsersReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case GET_PROFILE:
            return {
                ...state, users: action.users
            }

        default: return state
    }
}

export const getProfileActionCreator = (users: any) => ({type: GET_PROFILE, users: users})
export default profileUsersReducer