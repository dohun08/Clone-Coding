import Layout from "../../layout";
import * as S from './style.ts'

export default function Pricing() {
    return (
        <Layout>
            <S.Container>
                <S.Header>
                    <h1>Pricing</h1>
                    <p>Use Framer for free. Upgrade to add a custom domain, access additional features, and increase limits.</p>
                    <div>
                        <button>Personal</button>
                        <button>Business</button>
                    </div>
                </S.Header>
                <S.PrichingBox>

                </S.PrichingBox>
            </S.Container>
        </Layout>
    )
}