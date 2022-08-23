let initialState = {
    ownUsers: [
        {   
            name: 'Davide Biscuso',
            id: '@biscuttu',
            job: 'Product Designer',
            location: 'London',
            hbInfo: 'Joined September 2011',
            following: '569',
            followers: '72'
        }
    ],
    allUsers: [
        {
            name: 'Devon Lane',
            id: '@johndue',
            job: 'Designer',
            location: 'Mexica',
            hbInfo: 'Joined December 2001',
            following: '32',
            followers: '72'
        }
    ]
}


let profileUsersReducer = (state = initialState, action) => {
    return state
}

export default profileUsersReducer 