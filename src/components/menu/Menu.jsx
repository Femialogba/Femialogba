import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#cv">Cv</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
 
        </ul>
    </div>
  )
}
