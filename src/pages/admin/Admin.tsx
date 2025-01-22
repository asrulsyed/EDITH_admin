import React, { useState } from "react";

const Admin = () => {
    const [tabValue, setTabValue] = useState<string>("profile");
    const [profileData, setProfileData] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const [chatData, setChatData] = useState({
        endPoint: '',
        apiKey: "",
        systemPrompt: '',
    })

    const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        })
    }
    const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setChatData({
            ...chatData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className="flex flex-col items-center justify-center text-[#E2E2E2] text-base h-screen w-screen" >
            <div className="max-w-[900px] w-full max-h-[620px] h-full p-[74px] border border-[#FFFFFF]/20 bg-[#FFFFFF05] rounded-lg">
                <div className="flex gap-10">
                    <button
                        disabled={tabValue === "profile" ? true : false}
                        onClick={() => setTabValue("profile")}
                        className={`${tabValue === "profile" ? 'border-[#FFFFFF] text-[#FFFFFF]' : 'border-transparent text-[#FFFFFF]/60'} pb-1 border-0 border-b-2 font-medium text-2xl  rounded-none hover:border-[#FFFFFF] hover:text-[#FFFFFF] focus:outline-none`}
                    >
                        Profile
                    </button>
                    <button
                        disabled={tabValue === "chat" ? true : false}
                        onClick={() => setTabValue("chat")}
                        className={`${tabValue === "chat" ? 'border-[#FFFFFF] text-[#FFFFFF]' : 'border-transparent text-[#FFFFFF]/60'} pb-1 border-0 border-b-2 font-medium text-2xl  rounded-none hover:border-[#FFFFFF] hover:text-[#FFFFFF] focus:outline-none`}
                    >
                        E.Chat
                    </button>
                </div>
                {tabValue === 'profile' ? (
                    <form onSubmit={handleSubmit} className="my-8 grid grid-cols-2 gap-y-7 gap-x-5">
                        <div className="flex flex-col items-start gap-5 w-full">
                            <label className="text-[18px]" htmlFor="email">Admin Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={profileData.email}
                                onChange={handleProfileInputChange}
                                className="w-full h-12 px-4 py-2 bg-[#000000] border border-[#FFFFFF]/20 rounded-lg text-[#E2E2E2] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-5 w-full col-start-1">
                            <label className="text-[18px]" htmlFor="old_password">Old Password</label>
                            <input
                                type="password"
                                pattern="*"
                                placeholder="********"
                                name="old_password"
                                id="old_password"
                                className="w-full h-12 px-4 py-2 bg-[#000000] border border-[#FFFFFF]/20 rounded-lg text-[#E2E2E2] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-5 w-full col-start-1">
                            <label className="text-[18px]" htmlFor="new_password">New Password</label>
                            <input
                                type="password"
                                pattern="*"
                                placeholder="********"
                                name="new_password"
                                id="new_password"
                                className="w-full h-12 px-4 py-2 bg-[#000000] border border-[#FFFFFF]/20 rounded-lg text-[#E2E2E2] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-5 w-full">
                            <label className="text-[18px]" htmlFor="confirm_password">Confirm Password</label>
                            <input
                                type="password"
                                pattern="*"
                                placeholder="********"
                                name="confirm_password"
                                id="confirm_password"
                                className="w-full h-12 px-4 py-2 bg-[#000000] border border-[#FFFFFF]/20 rounded-lg text-[#E2E2E2] focus:outline-none"
                            />
                        </div>
                        <div className="flex justify-end gap-5 col-span-2">
                            <button
                                type="button"
                                className="bg-[#000000] border border-[#FAFAFA]/80 rounded-lg h-12 w-[140px] flex flex-col justify-center items-center text-[#FAFAFA]/80 text-xl font-medium hover:border-[#FAFAFA]/80 focus:outline-none hover:scale-105 transition-transform duration-100 ease-in"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-[#FAFAFA]/80 border border-transparent rounded-lg h-12 w-[140px] flex flex-col justify-center items-center text-[#000000] text-xl font-medium hover:border-[#FAFAFA]/80 focus:outline-none hover:scale-105 transition-transform duration-100 ease-in"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit} className="my-8 grid grid-cols-2 gap-y-7 gap-x-5">
                        <div className="flex flex-col items-start gap-5 w-full">
                            <label className="text-[18px]" htmlFor="endpoint">API Endpoint</label>
                            <input
                                type="name"
                                name="endpoint"
                                id="endpoint"
                                value={chatData.endPoint}
                                onChange={handleChatInputChange}
                                className="w-full h-12 px-4 py-2 bg-[#000000] border border-[#FFFFFF]/20 rounded-lg text-[#E2E2E2] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-5 w-full">
                            <label className="text-[18px]" htmlFor="apikey">API KEY</label>
                            <input
                                type="text"
                                name="apiKey"
                                id="apikey"
                                value={chatData.apiKey}
                                onChange={handleChatInputChange}
                                className="w-full h-12 px-4 py-2 bg-[#000000] border border-[#FFFFFF]/20 rounded-lg text-[#E2E2E2] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-5 w-full col-span-2">
                            <label className="text-[18px]" htmlFor="system_prompt">Chatbot System Prompt</label>
                            <textarea
                                name="system_prompt"
                                id="system_prompt"
                                value={chatData.systemPrompt}
                                onChange={handleChatInputChange}
                                rows={6}
                                className="w-full bg-[#000000] border border-[#FFFFFF]/20 rounded-lg p-3 text-white resize-none"
                            />
                        </div>

                        <div className="flex justify-end gap-5 col-span-2">
                            <button
                                type="button"
                                className="bg-[#000000] border border-[#FAFAFA]/80 rounded-lg h-12 w-[140px] flex flex-col justify-center items-center text-[#FAFAFA]/80 text-xl font-medium hover:border-[#FAFAFA]/80 focus:outline-none hover:scale-105 transition-transform duration-100 ease-in"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-[#FAFAFA]/80 border border-transparent rounded-lg h-12 w-[140px] flex flex-col justify-center items-center text-[#000000] text-xl font-medium hover:border-[#FAFAFA]/80 focus:outline-none hover:scale-105 transition-transform duration-100 ease-in"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Admin