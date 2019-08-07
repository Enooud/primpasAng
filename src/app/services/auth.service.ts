export class AuthService {
 isAuth = false;

 signIn(){
     return new Promise (
        executor: (resolve, reject) => {
            setTimeout(
                callback:() => {
                    this.isAuth = true;
                    resolve(true);
                }, ms: 2000
            );
         }
     )
 }
}
