import Avatar from '../../src/image/header_avatar.svg'
import Notificacao from '../../src/image/notificacao.svg'
import Sol from '../../src/image/sol.svg'
import En from '../../src/image/EN.svg'
import { FaChevronDown } from "react-icons/fa";

export function Header() {
    return (
        <>
            <header className="home">
                <div >
                    <input type="search" class="input-search" placeholder="insira a palavra-chave" />
                </div>
                <main>
                    <img src={En} style={{ padding: '13px' }} alt="" /><FaChevronDown style={{ color: '#bdc1cc', margin: '20px 20px 10px 0px' }} />
                    <img src={Sol} style={{ background: '#eff0f6', borderRadius: '50%', padding: '7px' }} alt="sd" />
                    <img src={Notificacao} style={{ background: '#eff0f6', borderRadius: '50%', padding: '7px', margin: '0 0 0 15px' }} alt="sd" />
                    <img src={Avatar} style={{ margin: '0 0 0 15px' }} alt="sd" />
                </main>
            </header >
        </>
    )
}