import tw from "tailwind-styled-components"
import PageContainer from '@/components/business/pagecontainer/PageContainer'


export default function Home() {
    return (
        <ContainerTW>
            <LeftBarTW>
                <LeftItemTW>首页设置</LeftItemTW>
                <LeftItemTW>商品管理</LeftItemTW>
            </LeftBarTW>
            <MainTW>

            </MainTW>
        </ContainerTW>
    )
}

const ContainerTW = tw.main`
   min-h-screen 
   bg-white
   flex
`;

const LeftBarTW = tw.div`
    w-72
    bg-slate-800
    flex
    flex-col
    items-center
    pt-20
`;

const LeftItemTW = tw.div`
    text-xl
    text-cyan-50
    mb-20
`


const MainTW = tw.div`

`