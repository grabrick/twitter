import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { renderFriendsActionCreator, changePageActionCreator, toggleIsFetchingActionCreator } from '../../../redux/friendsReducer'
import { useEffect } from "react";
import axios from 'axios'

const Pagination: FC = () => {
    const dispatch = useAppDispatch();
    const activePage: string = "active__color_page"
    const users = useAppSelector((state) => state.friends.friendsList);
    const currentPage = useAppSelector((state) => state.friends.currentPage)
    const totalUsersCount = useAppSelector((state) => state.friends.totalUsersCount);
    const pagesSize = useAppSelector(state => state.friends.pagesSize);
        

    const onChangePage = (pageNumber: number) => {
        changePage(pageNumber)
        toggleIsFetching(true)
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pagesSize}`)
              .then(res => {
                  renderFriends(res.data.items);
                  toggleIsFetching(false)
              })
    }

    useEffect(() => {
        if(users.length === 0) {
          toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pagesSize}`)
                .then(res => {
                    renderFriends(res.data.items);
                    toggleIsFetching(false)
                })
                
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderFriends = (user: number) => {
        dispatch(renderFriendsActionCreator(user));
    }

    const changePage = (numberPage: number) => {
      dispatch(changePageActionCreator(numberPage))
    }

    const toggleIsFetching = (isFetching: boolean) => {
      dispatch(toggleIsFetchingActionCreator(isFetching))
    }

    const pageCount = Math.ceil(totalUsersCount / pagesSize)
    const pages: any[] = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
        <div className="friends__main_pages">
            {pages.map((p: any) => {
              return <span className={currentPage === p ? activePage : ''} id="number__page" onClick={() => {onChangePage(p)}}>{p}</span>
            })}
        </div>
    );
}

export default Pagination;