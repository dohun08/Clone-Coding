import * as S from './style';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.svg';
import { useState } from 'react';
import Plus from '../../assets/plus.svg';

export default function Header() {
    const [search, setSearch] = useState("");
    return (
        <S.Container>
            <img src={Logo} alt="" width={130}/>
            <S.searchBox>
                <S.search
                    type={"text"}
                    placeholder={"검색"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img src={Search} alt="" width={30} />
            </S.searchBox>

            <S.info>
                <S.Btn type={"button"}><img src={Plus} alt="" width={20} />업로드</S.Btn>
                <S.Login type={"button"}>로그인</S.Login>
                <div></div>
            </S.info>
        </S.Container>
    )
}