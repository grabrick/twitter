import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import More from "../../../images/more-line.svg";
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import './MenuPopupState.css'
import { useDispatch } from "react-redux";
import {deleteTweetCreator} from '../../../redux/tweetReducer'

export const MenuPopupState = () => {
  const dispatch = useDispatch()

  const onClickDeleteTweet = (id: any) => {
    dispatch(deleteTweetCreator(id))
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
              <div className="fgfg" onClick={(id) => {onClickDeleteTweet(id)}}>
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
