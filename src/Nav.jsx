import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="Search">
                    Search Post
                </label>
                <input type="text" id='search' placeholder='Search Posts' value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>

            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/post'>Post</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
