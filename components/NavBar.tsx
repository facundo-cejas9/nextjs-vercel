
import { ActiveLink } from "./ActiveLink"
import styles from "./NavBar.module.css"


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Description',
      href: '/description'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];



export const NavBar = () => {
  return (
    <nav className={styles.menu}>
        
    {

      menuItems.map(({ text, href }) => (
        <ActiveLink key={ href } text={text} href={href} />
      ))

    }



        {/*<ActiveLink text={"Home"} href={"/"} />
        <ActiveLink text={"Pricing"} href={"/pricing"} />
        <ActiveLink text={"Description"} href={"/description"} />
        <ActiveLink text={"About"} href={"/about"} />
      */}
    </nav>
  )
}
