import { Link } from 'react-router-dom';
import './Header.css'; 
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

function Header() {
  const { user } = useContext(UserContext); 

  // Default avatar in case user does not have a custom photo
  const defaultAvatar = 'https://via.placeholder.com/30?text=P'; 

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            Product E-Store
          </Link>
          <nav className="nav">
            <Link to="/products" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            
            {user.isLogin ? (
              <div className="user-info">
                {/* Display email as a clickable link */}
                <Link to="/profile" className="nav-link">
                  <h1 style={{ fontSize: '14px', margin: '0 10px' }}>
                    {user.userInfo?.email}
                  </h1>
                </Link> 
                
                {/* Display avatar (use default if none provided) */}
                <img 
                  src={user.userInfo?.photoURL || defaultAvatar}  
                  alt="User Avatar" 
                  className="user-avatar"
                  style={{ borderRadius: '50%', width: '30px', height: '30px', marginLeft: '10px' }}
                />
              </div>
            ) : (
              <>
                <Link to="/signin" className="nav-link">Sign In</Link> 
                <Link to="/signup" className="nav-link">Sign Up</Link> 
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;





