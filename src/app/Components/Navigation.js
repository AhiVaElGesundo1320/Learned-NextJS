import Link from "next/link";
import styles from '../Components/Navigation.module.css'
const Links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "Post",
    route: "/posts",
  },
  
];

export function Navigation () {
  return(
    <header>
      <nav>
        <ul className={styles.navigation}>
          {
            Links.map(({ label, route}) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

