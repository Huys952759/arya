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
                        <IntroductionST>
                            {product.description[language]}
                        </IntroductionST>
                        <IntroductionST>
                            {product.materials[language]}
                        </IntroductionST>
                        <IntroductionST>
                            {product.maintenance?.[language]}
                        </IntroductionST>
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
mt-10
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
    const ProductsMockData = [
        {
            "name": {
                "Chinese": "Silk-cashmere T-shirt",
                "English": "Silk-cashmere T-shirt"
            },
            "description": {
                "Chinese": "A minimalist aesthetic, the excellence of material and fine details define the concept of the new top.This T-shirt is knitted in a roomy silhouette from a tactile blend of silk and cashmere that'll adjust to your body temperature. A piece for days when you need to feel especially comfortable.",
                "English": "A minimalist aesthetic, the excellence of material and fine details define the concept of the new top.This T-shirt is knitted in a roomy silhouette from a tactile blend of silk and cashmere that'll adjust to your body temperature. A piece for days when you need to feel especially comfortable."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "NEW ARRIVALS", "path": "/newArrivals" },
                { "name": "TOP", "path": "/readyToWear/top" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11657.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11664.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11666.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11674.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11687.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11695.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11697.jpg"
                    ],
                    "name": "Black",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10765.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10767.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10777.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10778.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10785.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10795.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10796.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10807.jpg"
                    ],
                    "name": "White",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10765.jpg"
                }
            ],
            "id": "AC24SS01",
            "materials": { "Chinese": "55%绢丝45%羊绒", "English": "55%SILK, 45%CASHMERE" },
            "maintenance": {
                "Chinese": "Hand wash only, do not bleach. Dry garment on a horizontal surface, do not tumble dry. Iron at low temperature. Alternatively, delicately dry clean garment.",
                "English": "Hand wash only, do not bleach. Dry garment on a horizontal surface, do not tumble dry. Iron at low temperature. Alternatively, delicately dry clean garment."
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere knit cardigan",
                "English": "Silk-cashmere knit cardigan"
            },
            "description": {
                "Chinese": "A part of our two-piece set. Knitted from a silk and cashmere material to a cropped silhouette, this cardigan will be a cosy yet sleek addition to your everyday looks. Its close-fitting lines to the body define a slightly body-hugging stretch-effect fit. Pair it with the matching tank top from our collection for a complete look.",
                "English": "A part of our two-piece set. Knitted from a silk and cashmere material to a cropped silhouette, this cardigan will be a cosy yet sleek addition to your everyday looks. Its close-fitting lines to the body define a slightly body-hugging stretch-effect fit. Pair it with the matching tank top from our collection for a complete look."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "NEW ARRIVALS", "path": "/newArrivals" },
                { "name": "CARDIGAN", "path": "/readyToWear/cardigan" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9815.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9817.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9819.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9820.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9823.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9827.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9828.jpg"
                    ],
                    "name": "Black",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10413.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10414.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10419.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10422.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10429.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10430.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10432.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10440.jpg"
                    ],
                    "name": "Jade",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10413.jpg"
                }
            ],
            "id": "AC24SS03",
            "materials": {
                "Chinese": "Kashgar 2/48NM85%绢丝15%羊绒",
                "English": "85%SILK, 15%CASHMERE"
            },
            "maintenance": {
                "Chinese": "An iconic Arya material, fine cashmere and silk yarn has been worked to highlight the qualities of both natural materials and make the garment soft, lightweight and an absolute delight to wear.",
                "English": "An iconic Arya material, fine cashmere and silk yarn has been worked to highlight the qualities of both natural materials and make the garment soft, lightweight and an absolute delight to wear."
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere dress",
                "English": "Silk-cashmere dress"
            },
            "description": {
                "Chinese": "It is a very classic dress, woven from a blend of silk and cashmere, making it incredibly soft to the touch and free from any burden on the body. With its fluid silhouette and exquisite craftsmanship, it's devoid of excessive intricate designs yet is suitable for any occasion, be it a formal dinner, work, or travel.",
                "English": "It is a very classic dress, woven from a blend of silk and cashmere, making it incredibly soft to the touch and free from any burden on the body. With its fluid silhouette and exquisite craftsmanship, it's devoid of excessive intricate designs yet is suitable for any occasion, be it a formal dinner, work, or travel."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "DRESS", "path": "/readyToWear/dress" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9536.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9537.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9548.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9549.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9573.jpg"
                    ],
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg",
                    "name": "Black"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9038.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9043.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9124.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9157.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9172.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9174.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9213.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9214.jpg"
                    ],
                    "name": "Jade",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9038.jpg"
                }
            ],
            "id": "AC24SS016",
            "materials": {
                "Chinese": "Kashgar 2/48NM85%绢丝15%羊绒",
                "English": "85%SILK, 15%CASHMERE"
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere T-shirt",
                "English": "Silk-cashmere T-shirt"
            },
            "description": {
                "Chinese": "A minimalist aesthetic, the excellence of material and fine details define the concept of the new top.This T-shirt is knitted in a roomy silhouette from a tactile blend of silk and cashmere that'll adjust to your body temperature. A piece for days when you need to feel especially comfortable.",
                "English": "A minimalist aesthetic, the excellence of material and fine details define the concept of the new top.This T-shirt is knitted in a roomy silhouette from a tactile blend of silk and cashmere that'll adjust to your body temperature. A piece for days when you need to feel especially comfortable."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "NEW ARRIVALS", "path": "/newArrivals" },
                { "name": "TOP", "path": "/readyToWear/top" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11657.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11664.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11666.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11674.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11687.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11695.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11697.jpg"
                    ],
                    "name": "Black",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10765.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10767.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10777.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10778.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10785.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10795.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10796.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10807.jpg"
                    ],
                    "name": "White",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10765.jpg"
                }
            ],
            "id": "AC24SS01-1",
            "materials": { "Chinese": "55%绢丝45%羊绒", "English": "55%SILK, 45%CASHMERE" },
            "maintenance": {
                "Chinese": "Hand wash only, do not bleach. Dry garment on a horizontal surface, do not tumble dry. Iron at low temperature. Alternatively, delicately dry clean garment.",
                "English": "Hand wash only, do not bleach. Dry garment on a horizontal surface, do not tumble dry. Iron at low temperature. Alternatively, delicately dry clean garment."
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere knit cardigan",
                "English": "Silk-cashmere knit cardigan"
            },
            "description": {
                "Chinese": "A part of our two-piece set. Knitted from a silk and cashmere material to a cropped silhouette, this cardigan will be a cosy yet sleek addition to your everyday looks. Its close-fitting lines to the body define a slightly body-hugging stretch-effect fit. Pair it with the matching tank top from our collection for a complete look.",
                "English": "A part of our two-piece set. Knitted from a silk and cashmere material to a cropped silhouette, this cardigan will be a cosy yet sleek addition to your everyday looks. Its close-fitting lines to the body define a slightly body-hugging stretch-effect fit. Pair it with the matching tank top from our collection for a complete look."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "CARDIGAN", "path": "/readyToWear/cardigan" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9815.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9817.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9819.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9820.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9823.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9827.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9828.jpg"
                    ],
                    "name": "Black",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10413.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10414.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10419.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10422.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10429.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10430.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10432.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10440.jpg"
                    ],
                    "name": "Jade",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10413.jpg"
                }
            ],
            "id": "AC24SS03-1",
            "materials": {
                "Chinese": "Kashgar 2/48NM85%绢丝15%羊绒",
                "English": "85%SILK, 15%CASHMERE"
            },
            "maintenance": {
                "Chinese": "An iconic Arya material, fine cashmere and silk yarn has been worked to highlight the qualities of both natural materials and make the garment soft, lightweight and an absolute delight to wear.",
                "English": "An iconic Arya material, fine cashmere and silk yarn has been worked to highlight the qualities of both natural materials and make the garment soft, lightweight and an absolute delight to wear."
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere dress",
                "English": "Silk-cashmere dress"
            },
            "description": {
                "Chinese": "It is a very classic dress, woven from a blend of silk and cashmere, making it incredibly soft to the touch and free from any burden on the body. With its fluid silhouette and exquisite craftsmanship, it's devoid of excessive intricate designs yet is suitable for any occasion, be it a formal dinner, work, or travel.",
                "English": "It is a very classic dress, woven from a blend of silk and cashmere, making it incredibly soft to the touch and free from any burden on the body. With its fluid silhouette and exquisite craftsmanship, it's devoid of excessive intricate designs yet is suitable for any occasion, be it a formal dinner, work, or travel."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "DRESS", "path": "/readyToWear/dress" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9536.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9537.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9548.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9549.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9573.jpg"
                    ],
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg",
                    "name": "Black"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9038.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9043.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9124.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9157.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9172.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9174.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9213.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9214.jpg"
                    ],
                    "name": "Jade",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9038.jpg"
                }
            ],
            "id": "AC24SS016-1",
            "materials": {
                "Chinese": "Kashgar 2/48NM85%绢丝15%羊绒",
                "English": "85%SILK, 15%CASHMERE"
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere T-shirt",
                "English": "Silk-cashmere T-shirt"
            },
            "description": {
                "Chinese": "A minimalist aesthetic, the excellence of material and fine details define the concept of the new top.This T-shirt is knitted in a roomy silhouette from a tactile blend of silk and cashmere that'll adjust to your body temperature. A piece for days when you need to feel especially comfortable.",
                "English": "A minimalist aesthetic, the excellence of material and fine details define the concept of the new top.This T-shirt is knitted in a roomy silhouette from a tactile blend of silk and cashmere that'll adjust to your body temperature. A piece for days when you need to feel especially comfortable."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "TOP", "path": "/readyToWear/top" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11657.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11664.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11666.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11674.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11687.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11695.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11697.jpg"
                    ],
                    "name": "Black",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10765.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10767.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10777.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10778.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10785.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10795.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10796.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10807.jpg"
                    ],
                    "name": "White",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-White/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10765.jpg"
                }
            ],
            "id": "AC24SS01-2",
            "materials": { "Chinese": "55%绢丝45%羊绒", "English": "55%SILK, 45%CASHMERE" },
            "maintenance": {
                "Chinese": "Hand wash only, do not bleach. Dry garment on a horizontal surface, do not tumble dry. Iron at low temperature. Alternatively, delicately dry clean garment.",
                "English": "Hand wash only, do not bleach. Dry garment on a horizontal surface, do not tumble dry. Iron at low temperature. Alternatively, delicately dry clean garment."
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS01/AC24SS01-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D11655.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere knit cardigan",
                "English": "Silk-cashmere knit cardigan"
            },
            "description": {
                "Chinese": "A part of our two-piece set. Knitted from a silk and cashmere material to a cropped silhouette, this cardigan will be a cosy yet sleek addition to your everyday looks. Its close-fitting lines to the body define a slightly body-hugging stretch-effect fit. Pair it with the matching tank top from our collection for a complete look.",
                "English": "A part of our two-piece set. Knitted from a silk and cashmere material to a cropped silhouette, this cardigan will be a cosy yet sleek addition to your everyday looks. Its close-fitting lines to the body define a slightly body-hugging stretch-effect fit. Pair it with the matching tank top from our collection for a complete look."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "CARDIGAN", "path": "/readyToWear/cardigan" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9815.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9817.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9819.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9820.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9823.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9827.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9828.jpg"
                    ],
                    "name": "Black",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10413.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10414.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10419.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10422.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10429.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10430.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10432.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10440.jpg"
                    ],
                    "name": "Jade",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D10413.jpg"
                }
            ],
            "id": "AC24SS03-2",
            "materials": {
                "Chinese": "Kashgar 2/48NM85%绢丝15%羊绒",
                "English": "85%SILK, 15%CASHMERE"
            },
            "maintenance": {
                "Chinese": "An iconic Arya material, fine cashmere and silk yarn has been worked to highlight the qualities of both natural materials and make the garment soft, lightweight and an absolute delight to wear.",
                "English": "An iconic Arya material, fine cashmere and silk yarn has been worked to highlight the qualities of both natural materials and make the garment soft, lightweight and an absolute delight to wear."
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS03/AC24SS03-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9813.jpg"
        },
        {
            "name": {
                "Chinese": "Silk-cashmere dress",
                "English": "Silk-cashmere dress"
            },
            "description": {
                "Chinese": "It is a very classic dress, woven from a blend of silk and cashmere, making it incredibly soft to the touch and free from any burden on the body. With its fluid silhouette and exquisite craftsmanship, it's devoid of excessive intricate designs yet is suitable for any occasion, be it a formal dinner, work, or travel.",
                "English": "It is a very classic dress, woven from a blend of silk and cashmere, making it incredibly soft to the touch and free from any burden on the body. With its fluid silhouette and exquisite craftsmanship, it's devoid of excessive intricate designs yet is suitable for any occasion, be it a formal dinner, work, or travel."
            },
            "price": { "Chinese": 500, "English": 50 },
            "categories": [
                { "name": "DRESS", "path": "/readyToWear/dress" }
            ],
            "colors": [
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9536.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9537.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9548.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9549.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9573.jpg"
                    ],
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg",
                    "name": "Black"
                },
                {
                    "images": [
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9038.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9043.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9124.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9157.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9172.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9174.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9213.jpg",
                        "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9214.jpg"
                    ],
                    "name": "Jade",
                    "colorImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Jade/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9038.jpg"
                }
            ],
            "id": "AC24SS016-2",
            "materials": {
                "Chinese": "Kashgar 2/48NM85%绢丝15%羊绒",
                "English": "85%SILK, 15%CASHMERE"
            },
            "status": "ON_SALE",
            "coverImage": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS016/AC24SS016-Black/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D9533.jpg"
        }
    ]

    const product = ProductsMockData.find(product => product.id === params?.product);
    return {
        props: {
            product,
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    return {
        paths: ProductsMockData.map(product => `/product/${product.id}`),
        fallback: 'blocking',
    }
}
