import React, { useState } from 'react';
import searchIcon from "./../../assets/search_icon.png";
import mic from "./../../assets/Clear Glyph.png";
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function SelectPeople() {
    const [selectedFriends, setSelectedFriends] = useState([]);
    const friends = [
        {
            id: "1",
            name: "Imran Khan",
            image: "https://picsum.photos/200/300",
        },
        {
            id: "2",
            name: "Sameer Khan",
            image: "https://picsum.photos/200/300",
        },
        {
            id: "3",
            name: "Hamza Khan",
            image: "https://picsum.photos/200/300",
        },
        {
            id: "4",
            name: "Zeb Khan",
            image: "https://picsum.photos/200/300",
        },
    ];

    const toggleFriendSelection = (friendId) => {
        setSelectedFriends((prevSelectedFriends) => {
            if (prevSelectedFriends.includes(friendId)) {
                // Remove friend from the selected list if already selected
                return prevSelectedFriends.filter((id) => id !== friendId);
            } else {
                // Add friend to the selected list if not already selected
                return [...prevSelectedFriends, friendId];
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col mt-2">
            <div className='flex justify-between p-2  items-center'>
                <p className="flex items-center text-blueButtonColor text-center text-lg font-semibold leading-5">
                <MdOutlineArrowBackIosNew/> Back
                </p>
                <p className="text-textColorBlack text-center text-lg font-semibold leading-5">
                    Select People
                </p>
                <Link to=''>
                    <p className='text-blueButtonColor text-center text-lg font-semibold leading-5'>Add</p>
                </Link>
            </div>

            <div className="flex justify-between items-center mt-3 rounded-xl p-2 !ml-2 !mr-2" style={{ background: "rgba(118, 118, 128, 0.12)" }}>
                <div className="flex gap-1 items-center">
                    <div>
                        <img src={searchIcon} alt="" className="" />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex p-3 w-[243px] h-[28px]    items-center bg-transparent"
                            style={{ background: "transparent", outline: "none" }}
                        />
                    </div>
                </div>
                <div>
                    <img src={mic} alt="" />
                </div>
            </div>
            <div className="flex mt-3 mx-2 self-start">
                <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
                    Suggestions
                </h5>
            </div>
            {friends.map((friend) => {
                const isSelected = selectedFriends.includes(friend.id);

                return (
                    <div className="mx-2" key={friend.id}>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center p-2'>
                                <div>
                                    <img
                                        src={friend.image}
                                        alt=""
                                        className="rounded-full   object-cover w-[60px] h-[60px] no-repeat "
                                    />
                                </div>
                                <div>
                                    <p className="text-textColorBlack text-lg font-normal leading-5">
                                        {friend.name}
                                    </p>
                                    <p className="text-[#817F80] text-sm font-normal leading-5">
                                        @username
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center mr-2'>
                                <button
                                    className={`rounded-full bg-${isSelected ? 'blueButtonColor border-[gray]  border-[1px] ' : 'gray border-[gray] rounded-xl border-[1px]'} p-[9px]`}
                                    onClick={() => toggleFriendSelection(friend.id)}
                                >
                                    {/* Display a checkmark or any icon when selected */}
                                    {isSelected ? '' : ''}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SelectPeople;


