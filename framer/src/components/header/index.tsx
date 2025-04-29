import * as S from './style.ts';
import Logo from '../../assets/home/logo.png'
import {useNavigate} from "react-router-dom";
import Menu from "./menu";
import {useState} from "react";

interface Menu{
    id : number,
    strong : string,
    p : string
}
interface NavBar{
    id : number,
    name : string
    path : string
    menu : Menu[],
}

export default function Header() {
    const navigate = useNavigate()
    const handleNavigate = (path: string) =>{
        navigate(path)
    }
    const nav: NavBar[] = [
        {id : 0, name : 'Home', path : '/', menu : [{id : 1, strong : 'Features', p : 'Features'}]},
        {id : 1, name : 'Resources', path : '/', menu : [{id : 3, strong : 'Resources', p : 'Resources'}]},
        {id : 2, name : 'Help', path : '/', menu : [{id : 4, strong : 'Help', p : 'Help'}]},
        {id : 3, name : 'Teams', path : '/', menu : [{id : 5, strong : 'Teams', p : 'Teams'}]},
        {id : 4, name : 'Pricing', path : '/pricing', menu : [{id : 2, strong : 'Pricing', p : 'Pricing'}]},
    ]
    const [hover, setHover] = useState<boolean[]>([
        false,
        false,
        false,
        false,
        false
    ])
    const enterEffect = (id : number) => {
        const newHover = [...hover];
        newHover[id] = true;
        setHover(newHover);
    }
    return (
        <S.fixBox>
            <S.Header>
                <img src={Logo} alt={'logo'}/>
                <S.nav>
                    <ul>
                        {nav.map(item=>{
                            return(
                                <li key={item.id}>
                                    <p
                                        onMouseEnter={()=>enterEffect(item.id)}
                                        onMouseLeave={() => setHover(hover.map(() => false))}
                                        onClick={()=>handleNavigate(item.path)}
                                    >
                                        {item.name}
                                    </p>
                                    {hover[item.id] && <Menu />}
                                </li>
                            )
                        })}
                    </ul>
                </S.nav>
                <S.BtnBox>
                    <button>Login</button>
                    <button>Sign up</button>
                </S.BtnBox>
            </S.Header>
        </S.fixBox>
    )
}