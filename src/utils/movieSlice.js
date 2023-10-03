import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovie:null,
        topRatedMovies:null,
        upcommingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies =action.payload;
        },
        addUpcommingMovies:(state,action)=>{
            state.upcommingMovies = action.payload;
        },
    }
})

export const {addNowPlayingMovies,addTrailerVideos,addPopularMovie,addTopRatedMovies,addUpcommingMovies} = movieSlice.actions;

export default movieSlice.reducer;