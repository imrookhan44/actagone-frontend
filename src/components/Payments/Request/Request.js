import React from 'react'
import calender from '../../../assets/calender.png'
function Request() {
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
    return (
        <div className="min-h-screen flex flex-col mt-2 ">
            <div className='px-2 flex items-center'>
                <p className="text-blueButtonColor  flex justify-start text-center text-lg font-semibold leading-5">
                    Cancel
                </p>
                <p className="text-textColorBlack w-full mr-12 flex justify-center items-center text-center text-lg font-semibold leading-5">
                    Request from
                </p>

            </div>
            <div
                className="flex justify-between items-center   mt-5 rounded-xl p-2 !ml-2 !mr-2"
                style={{ background: "rgba(118, 118, 128, 0.12)" }}
            >
                <div className="flex gap-1 items-center">
                    <div>
                        <input
                            type="text"
                            placeholder="Name:"
                            className="flex p-3 w-full h-[30px] items-center bg-transparent	"
                            style={{ background: "transparent", outline: "none" }}
                        />
                    </div>
                </div>

            </div>
            <div className="flex  self-start">
                <h5 className="text-textColorBlack text-base font-semibold leading-5 p-2">
                    Suggestions
                </h5>
            </div>
            {friends.map((friend) => {
                return (
                    <div className="flex gap-5 items-center p-2" key={friend.id}>
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
                );
            })}
        </div>
    )
}

export default Request