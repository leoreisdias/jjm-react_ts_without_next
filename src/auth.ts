const isAuthenticated = () => {
    const tokenStoraged = localStorage.getItem('token');
    if (tokenStoraged)
        return true;

    return false;

}

export default isAuthenticated;