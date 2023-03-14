import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import More from "../../../images/more-line.svg";
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import './MenuPopupState.css'
import { useDispatch } from "react-redux";
import { getTweets } from '../../../redux/tweetReducer'
import axios from "axios";
import { TweetItem } from "../../../types/types";

export const MenuPopupState = (id: any) => {
  const dispatch = useDispatch()
  const getTweet = (tweet: TweetItem) => {
    dispatch(getTweets(tweet))
  }

  const onClickDeleteTweet = (id: any) => {
    try {
      axios.delete(`http://localhost:3000/api/post/delete/${id.id}`)
        .then((item) => {
          console.log(item)
          // updateState(item)
        })
    } catch (e) {
      console.log({ message: e })
    } finally {
      axios.get('http://localhost:3000/api/posts')
        .then((items) => {
          getTweet(items.data.candidate)
        }).catch((e) => {
          console.log(e)
        })
    }
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button sx={{ borderRadius: 50 }} {...bindTrigger(popupState)}>
            <img src={More} alt="" />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <div className="fgfg" onClick={() => { onClickDeleteTweet(id) }}>
                <SentimentDissatisfiedOutlinedIcon />
                <p className="popup__title_more">
                  Not interested in this tweet
                </p>
              </div>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
