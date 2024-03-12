import Navigation from './UI/Navigation';
import '../styles/Header.css';

export default function Header() {
  return (
    <Navigation
    // Pass paths and titles to the navigation component
      links={[
        { title: 'About Us', path: '/' },
        { title: 'Music', path: '/music' },
        { title: 'News', path: '/news' },
        { title: 'Sign Up', path: '/signup' },
      ]}
    />
  );
}
