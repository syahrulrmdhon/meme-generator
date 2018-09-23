export const RECIVE_MEMES = 'RECEVIE_MEMES';

function recevieMemes( json ) {
    const { memes } = json.data;
    
    return {
        type: RECIVE_MEMES,
        memes
    }
}

function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response =>  response.json())
}

export function fetchMemes() {
    return function (dispatch) {
      return fetchMemesJson()
        .then(json => dispatch(reciveMemes(json)))      
    }
}