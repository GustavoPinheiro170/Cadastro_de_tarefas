export const isAuthenticated = () => {

    
        const Loginemail = localStorage.getItem('emailLogin');
        const LoginStorage = localStorage.getItem('email');
        const senhaLogin = localStorage.getItem("senhaLogin");
        const senhaStorage = localStorage.getItem('senha');


        if(localStorage.length === 0){
            return false
            }

        if(Loginemail !== LoginStorage || senhaLogin !== senhaStorage ){
            alert('Verifique suas credencias');
            return false;
        }
            else return true;
        
};