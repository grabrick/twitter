function FriendsComponent(state) {
    return (
        <div className="friends__item">
            <div className="friends__item_photos-wrapper">
                <img src={state.photos} alt="" className='friends__item_photos' />
                <div className="friends__item_status"></div>
            </div>
            <div className="friends__item_wrapper-wrapper">
                <div className="friends__item_wrapper">
                    <h4 className="friends__item__name">{state.name}<span className='friends__item_name-id'>{state.userId}</span></h4>
                </div>
                <button className="friends__item_btn" value='lolo'></button>
            </div>
        </div>
    );
}

export default FriendsComponent;