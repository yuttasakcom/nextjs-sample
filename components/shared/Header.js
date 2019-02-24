import Link from 'next/link'
import './Header.css'

const Header = () => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/todos">
              <a>Todos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
)

export default Header
