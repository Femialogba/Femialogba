import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Cv</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#work">Projects</a>
            </li>
 
        </ul>
    </div>
  )
}
