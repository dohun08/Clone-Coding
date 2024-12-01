import * as S from './style';
import Home_R from '../../assets/home_red.svg';
import Home_W from '../../assets/home_white.svg';
import Person_R from '../../assets/person_red.svg';
import Person_W from '../../assets/person_white.svg';
import People_R from '../../assets/people_red.svg';
import People_W from '../../assets/people_white.svg';
import Compass_R from '../../assets/compass_red.svg';
import Compass_W from '../../assets/compass_white.svg';
import Video_R from '../../assets/vedio_red.svg';
import Video_W from '../../assets/vedio_white.svg';

export default function Nav({isChoice="home"}) {
    return (
        <S.Container>
            <S.section $isChoice = {isChoice == "home" ? true : false}>
                <img src={Home_R} alt="" width={30}/>
                <p>추천</p>
            </S.section>
            <S.section $isChoice = {isChoice == "pollow" ? true : false}>
                <img src={People_W} alt="" width={30}/>
                <p>팔로잉</p>
            </S.section>
            <S.section $isChoice = {isChoice == "explore" ? true : false}>
                <img src={Compass_W} alt="" width={30}/>
                <p>탐색</p>
            </S.section>
            <S.section $isChoice = {isChoice == "live" ? true : false}>
                <img src={Video_W} alt="" width={30}/>
                <p>라이브</p>
            </S.section>
            <S.section $isChoice = {isChoice == "profile" ? true : false}>
                <img src={Person_W} alt="" width={30}/>
                <p>프로필</p>
            </S.section>
        </S.Container>
    );
};