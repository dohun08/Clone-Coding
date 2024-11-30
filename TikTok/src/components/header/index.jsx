import * as S from './style';
import Logo from '../../assets/logo.png';
import { useState } from 'react';

export default function Header() {
    const [search, setSearch] = useState("");
    return (
        <S.Container>
            <img src={Logo} alt="" width={130}/>
            <input
                type={"text"}
                placeholder={"검색"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                <button type={"button"}>업로드</button>
                <button type={"button"}>로그인</button>
                <div></div>
            </div>
        </S.Container>
    )
}