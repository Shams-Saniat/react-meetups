import { Link } from 'react-router-dom';
function MainNavigation() {
    return <header>

        <div className="navbar bg-cyan-500 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">React Meetups</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meetup'>Add New Meetup</Link></li>
                    <li><Link to='/favourites'>My Favourites</Link></li>
                </ul>
            </div>
        </div>
    </header>
}

export default MainNavigation;