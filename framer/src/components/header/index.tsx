import * as S from './style.ts';
import Logo from '../../assets/home/logo.png'
import {useNavigate} from "react-router-dom";
import Menu from "./menu";
import {useState} from "react";

export interface Menu{
    id : number,
    strong : string,
    p : string,
    img : string
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
        {id : 0, name : 'Features', path : '/', menu : [
                {id : 1, strong : 'Design', p : 'Create with ease ', img : '/header/1.svg'},
                {id : 2, strong : 'Collaborate', p : 'Build together', img : '/header/2.svg'},
                {id : 3, strong : 'Publish', p : 'Launch your app', img : '/header/3.svg'},
                {id : 4, strong : 'Scale', p : 'Grow your reach', img : '/header/4.svg'},
            ]},
        {id : 1, name : 'Resources', path : '/', menu : [
                {id : 1, strong : 'Academy', p : 'Learn the basics', img : '/header/5.svg' },
                {id : 2, strong : 'Marketplace', p : 'Templates and plugins', img : '/header/6.svg'},
                {id : 3, strong : 'Updates', p : 'See what\'s new', img : '/header/7.svg'},
                {id : 4, strong : 'Gallery', p : 'Get inspired', img : '/header/8.svg'},

            ]},
        {id : 2, name : 'Help', path : '/', menu : [
                {id : 1, strong : 'Contact', p : 'Get support', img : '/header/9.svg'},
                {id : 2, strong : 'Experts', p : 'Hire trusted pros', img : '/header/10.svg'},
                {id : 3, strong : 'Articles', p : 'Browse by category', img : '/header/11.svg'},
                {id : 4, strong : 'Developers', p : 'API documentation', img : '/header/12.svg'},

            ]},
        {id : 3, name : 'Teams', path : '/', menu : [
                {id : 1, strong : 'Startups', p : 'Zero to one', img : '/header/13.svg'},
                {id : 2, strong : 'Enterprise', p : 'Operate at scale', img : '/header/14.svg'},
                {id : 3, strong : 'Stories', p : 'Build to publish', img : '/header/15.svg'},
                {id : 4, strong : 'Scales', p : 'Let\'s chat', img : '/header/16.svg'},

            ]},
        {id : 4, name : 'Pricing', path : '/pricing', menu : [
            ]},
    ]
    const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

    return (
        <S.fixBox>
            <S.Header>
                <img src={Logo} alt="logo" />
                <S.nav>
                    <ul>
                        {nav.map((item) => (
                            <li
                                key={item.id}
                                onMouseEnter={() => setActiveMenuId(item.id)}
                                onMouseLeave={() => setActiveMenuId(null)}
                            >
                                <p onClick={() => handleNavigate(item.path)}>{item.name}</p>
                                {activeMenuId === item.id && item.menu.length > 0 && (
                                    <Menu menu={item.menu} />
                                )}
                            </li>
                        ))}
                    </ul>
                </S.nav>
                <S.BtnBox>
                    <button>Login</button>
                    <button>Sign up</button>
                </S.BtnBox>
            </S.Header>
        </S.fixBox>
    );
}