import styles from './styles.module.scss'

export function  LoginBox(){
    return(
          <div className={styles.container}>
                <div className={styles.container_login}>
                     <div className={styles.wrap_login}>
                           <form className={styles.login_form}>
                               
                               <span className={styles.title_login_img}>
                                   <img src="/src/image/SGAgro- logo-L.svg" alt="image-logo" />
                               </span>

                               <span className={styles.title_login}>
                                   Login
                               </span>

                               <div className={styles.wrap_input}>
                                   <input className={styles.input} type="email"/>
                                   <span className={styles.fucos_input} data-placeholder= 'Email'></span>
                               </div>

                               <div className={styles.wrap_input}>
                                   <input className={styles.input} type="password"/>
                                   <span className={styles.fucos_input} data-placeholder= 'Password'></span>
                               </div>

                               <div className={styles.container_login_form_btn}>
                                    <button className={styles.login_form_btn}>Entrar</button>
                               </div>

                               <div className={styles.esqueceu_senha_cadastro}>
                                     <a href='#' className={styles.texto_1}>Esqueceu senha?</a>
                               </div>

                           </form>
                     </div>
                </div>
          </div>
    )
}