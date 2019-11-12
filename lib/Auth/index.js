import fetch from 'isomorphic-unfetch';
import Router from 'next/router';



export const getServerSideToken = req => {
    const { signedCookies } = req;

    if(!signedCookies){
        return {};
    }else if(!signedCookies.token){
        return {};
    }else {
        return { user: signedCookies.token }
    }
}

export const getClientSideToken = () => {
    if(typeof window !== 'undefined'){
        const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
        return { user };
    }
    return { user: {} }
}


const WINDOW_USER_SCRIPT_VARIABLE = '__USER__'

export const getUserScript = user => { 
    return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
}

export const authInitialProps = isProtectedRoute => ({req, res}) => {
    const auth = req ? getServerSideToken(req) : getClientSideToken();
    const currentPath = req ? req.url : window.location.pathname;
    const user = auth.user;
    const isAnonymous = !user || user.type !== 'authenticated';
    if(isProtectedRoute && isAnonymous && currentPath !== '/login') {
        return redirectUser(res, '/login');
    }
    return {auth};
    
}

const redirectUser = (res, path) => {
    if(res){
        res.redirect(302, path);
        res.finished = true;
        return {};
    }
    Router.replace(path);
    return {};
}

export const loginUser = async ( username, password ) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            // Check what headers the API needs. A couple of usuals right below
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Validation data coming from a form usually
            username,
            password
        })
    })
    const user = await response.json()
    if(typeof window !== 'undefined'){
        window[WINDOW_USER_SCRIPT_VARIABLE] = user.userData || {} ;
    }
} 

export const getUserHome = async () => {
    const response  = await fetch('/api/auth/home', {
        method: 'GET',
        credentials: 'same-origin'
    })
    const res = await response.json();
    console.log(res);
    return res;
}

export const logOutUser = async () => {
    if(typeof window !== 'undefined'){
        window[WINDOW_USER_SCRIPT_VARIABLE] = {};
    }
    const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
    })
    if(response){
        Router.push('/login');
    }
    
}

