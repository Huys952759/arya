import React, { useState } from "react";
import Head from "next/head";
import tw from "tailwind-styled-components";
import { CategoriesMockData } from "@/types/CategoriesMockData";
import PageContainer from "@/components/business/pagecontainer/PageContainer";
import Image from "next/image";
import { useStore } from "@/store";
import { styled } from "styled-components";
import { ProductsMockData } from "@/types/ProductsMockData";

export default function HomePge({ product }) {
    const [language] = useStore.language();
    const [activeColorInfo, setActiveColorInfo] = useState(product.colors[0]);
    const [word] = useStore.words();

    console.log(product);

    return (
        <>
            <Head>

            </Head>
            <PageContainer>
                <ProductContainerTW>
                    <ImageGroupTW>
                        <FullImageItemTW>
                            <Image
                                width={5128}
                                height={7689}
                                alt=""
                                src={activeColorInfo.images[0]}
                            />
                        </FullImageItemTW>
                        {
                            activeColorInfo.images.slice(1).map(image => (
                                <HalfImageItemTW>
                                    <Image
                                        width={5128}
                                        height={7689}
                                        alt=""
                                        src={image}
                                    />
                                </HalfImageItemTW>
                            ))
                        }
                    </ImageGroupTW>
                    <InfoGroupTW>
                        <SKUST>SKU: {product.id}</SKUST>
                        <NameST>{product.name[language]}</NameST>
                        {
                            !product.price.hidden && (
                                <PriceST>
                                    <span>{language === 'English' ? '€' : '￥'}</span>
                                    <span>{product.price[language]}</span>
                                </PriceST>
                            )
                        }
                        <ColorContainerTW>
                            {
                                product.colors.map(color => (
                                    <ImageItemTW
                                        onClick={() => setActiveColorInfo(color)}
                                    >
                                        <Image
                                            width={500}
                                            height={500}
                                            alt=""
                                            src={color.colorImage}
                                        />
                                    </ImageItemTW>
                                ))
                            }
                        </ColorContainerTW>
                        <NameST>{word.material[language]}</NameST>
                        <IntroductionST>
                            {product.materials[language]}
                        </IntroductionST>
                        <NameST style={{ marginTop: 0 }}>{word.description[language]}</NameST>
                        <IntroductionST>
                            {product.description[language]}
                        </IntroductionST>
                        {
                            product.maintenance[language] && (
                                <>
                                    <NameST style={{ marginTop: 0 }}>{word.maintenance[language]}</NameST>
                                    <IntroductionST>
                                        {product.maintenance[language]}
                                    </IntroductionST>
                                </>
                            )
                        }
                    </InfoGroupTW>
                </ProductContainerTW>
            </PageContainer>
        </>
    )
}

const MainTW = tw.main`
min-h-screen
flex
bg-white
dark:bg-zinc-900
`

const ProductContainerSC = styled.div`

`


const ProductContainerTW = tw(ProductContainerSC)`
    mt-28
    px-12    
    flex
`

const ImageGroupTW = tw.div`
    w-1/2
    flex
    justify-between
    flex-wrap
`;

const FullImageItemTW = tw.div`
    w-full
    mb-3
`

const HalfImageItemTW = tw.div`
    w-[calc(50%-6px)]
    mb-3
`

const InfoGroupTW = tw.div`
w-half
ml-20
`;

const SKUSC = styled('div')`
    color: #6F6F6F;

`

const SKUST = tw(SKUSC)`
    text-sm
`;

const NameSC = styled.div`
    font-size: 28px;
    margin-top: 60px;
`

const NameST = tw(NameSC)`
    text-black
`

const PriceSC = styled.div`
    font-size: 18px;
    margin-top: 30px;
`

const PriceST = tw(PriceSC)`
text-black
`

const IntroductionST = tw.div`
mt-[14px]
mb-[30px]
text-black
text-base
max-w-xl
`;

const ColorContainerSC = styled('div')`
    

`;

const ColorContainerTW = tw(ColorContainerSC)`
    mt-10
    flex
`

const ImageItemSC = styled('div')`
    width: 78px;
    height: 78px;
    margin-right: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const ImageItemTW = tw(ImageItemSC)`

`;

export const getStaticProps = async ({
    params,
}) => {
    const products = await fetch('https://customer-arya.oss-cn-shanghai.aliyuncs.com/products.json').then(res => res.json());
    const product = products.find(product => product.id === params?.product);
    return {
        props: {
            product,
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const products = await fetch('https://customer-arya.oss-cn-shanghai.aliyuncs.com/products.json').then(res => res.json());
    return {
        paths: products.map(product => `/product/${product.id}`),
        fallback: 'blocking',
    }
}
