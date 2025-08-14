import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavouritesContext from '../../store/favourite-context';
// import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext);
    return <header>

        <div className="navbar bg-cyan-500 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">React Meetups</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meetup'>Add New Meetup</Link></li>
                    <li><Link to='/favourites'>
                        My Favourites
                        {/* <span className={classes.badge}>{favouritesCtx.totalFavourites}</span> */}
                    </Link></li>
                </ul>
            </div>
        </div>
    </header>
}

export default MainNavigation;