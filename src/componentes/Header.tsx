import './Header.css'

function Header(){
    return (
        <header>
            <div className='logo'></div>
            <nav>
                <li>
                    <a href='http://'>Home</a>
                </li>
                <li>
                    <a href='http://'>Listagem</a>
                </li>
                <li>
                    <a href='http://'>Informações</a>
                </li>
            </nav>
        </header>
    )
}

export default Header