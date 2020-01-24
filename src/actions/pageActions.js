import axios from "axios";

export const LOAD_PAGE = 'LOAD_PAGE';

export function loadPages(pages, users){
    return {
        type: LOAD_PAGE,
        pages,
        users
    }
}


// async example.
export function loadPagesAsync(username, password, socket){
    return async (dispatch) => {
        try{
            const url = `http://api.wwc.com/api/pages`;
            const response = await axios.get(url);
            dispatch(loadPages(response.data));
        }
        catch(err){
            console.log('ERROR', err);
        }
    }
}
