import Link from 'next/link';
import { logOutUser } from '../../lib/Auth';

const Layout = ({ children, title, auth}) => {
  const { user = {} } = auth || {};
  console.log('layout', user);
  return(
  <>
      <nav>
        {
          user.user_id ? (
          <React.Fragment>
            <Link href="/"><a>Home</a>
            </Link>
            <Link href="/home"><a>Profile</a>
            </Link>
            <button onClick={logOutUser}>Logout
            </button>
          </React.Fragment>
          ) : ( 
            <React.Fragment>
            <h1>AWESOME OS</h1>
            </React.Fragment>
           )
        }
        
      </nav>
      <h1>{user.name}</h1>
      { children }
  </>
)};


export default Layout;
