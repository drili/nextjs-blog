import headerStyles from '../styles/Header.module.css'

const Header = () => {
     return(
          <div>
               <h1 className={headerStyles.title}>
                    <span>Test</span> News
               </h1>
               <p className={headerStyles.description}>Lorem ipsum dolor sit amet, obcaecati.</p>
          </div>
     )
}

export default Header
