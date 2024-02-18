import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name: "user",
    initialState: {
        isLoggedin: false,
        videosList: [{
            id: 'd38647f1-30a5-44ef-91da-e71d26700958',
            link: 'https://www.youtube.com/watch?v=rFVpSwgCkCo'
        },
        {
            id: '4e7ef35e-0651-468a-b47e-aa6d071595ae',
            link: 'https://www.youtube.com/watch?v=7JXkKVA5RAA'
        },
        {
            id: 'ac9155c1-e13c-451c-a1c5-e017e73cdfa8',
            link: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        }],
        language: sessionStorage.getItem("language") || "en",
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedin = action.payload
        },
        setVideoList: (state, action) => {
            state.videosList = action.payload
        },
        setAddVideo: (state, action) => {
            state.videosList = [...state.videosList, action.payload]
        },
        setRemoveVideo: (state, action) => {
            const filterData = state.videosList.filter((item) => item.id !== action.payload)
            state.videosList = filterData
        },
        setLanguage: (state, action) => {
            sessionStorage.setItem("language", action.payload)
            state.language = action.payload
        }
    }
})

export const { setLogin, setVideoList, setAddVideo, setRemoveVideo } = user.actions;
export default user.reducer