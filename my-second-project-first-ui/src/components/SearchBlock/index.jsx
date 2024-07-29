import React from "react";
import { StyleSearchBlockWrapper } from "../../styles/SearchBlockStyles";
import { IoIosSearch } from "react-icons/io";

const SearchBlock = () => {
  return (
    <>
      <StyleSearchBlockWrapper>
        <div className="middle-part">
          <div className="buttons-container">
            <button className="button-inactive">Stays</button>
            <button className="button-active">Experiences</button>
          </div>
        </div>
        <div className="search-tab-pannel">
          <div className="where-container-left">
            <div>
              <h3>where</h3>
              <span>Search Destination</span>
            </div>
          </div>
          <div className="date-container-middle">
            <div>
              <h3>Date</h3>
              <span>Add dates</span>
            </div>
          </div>
          <div className="who-container-right">
            <div className="content-box">
              <h3>Who</h3>
              <span>Add guests</span>
            </div>
            <div className="search-box">
              <IoIosSearch />
            </div>
          </div>
        </div>
      </StyleSearchBlockWrapper>
    </>
  );
};

export default SearchBlock;
