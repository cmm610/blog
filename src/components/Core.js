import React from 'react';
import Link from 'react-router/lib/Link';

/**
 * <Core />
 * Wraps all our child components to provide global navigation.
 * This makes it simple to have a component at the index '/' route
 * of our application.
 */
const Core = ({ children }) =>
  <div>
	<nav className='pure-menu pure-menu-horizontal'>
		<ul className='pure-menu-list border-btm'>
			<li className='pure-menu-item'>
				<Link className='pure-menu-link' to='/'>Home</Link>
			</li>
			<li className='pure-menu-item'>
				<Link className='pure-menu-link' to='/about'>About</Link>
			</li>
			<li className='pure-menu-item'>
				<Link className='pure-menu-link' to='/users'>Users</Link>
			</li>
		</ul>
	</nav>
    <main>
      { children }
    </main>
  </div>;

export default Core;
