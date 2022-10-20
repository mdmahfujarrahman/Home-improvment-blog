const useAuth =() => {
    const token = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    let auth = null;
    let user = null;
    if(token && userInfo){
        auth = token;
        user = userInfo;
    }
    return {auth, user};
}
export default useAuth;


