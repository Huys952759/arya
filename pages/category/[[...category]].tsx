import React from "react";
import Head from "next/head";
import tw from "tailwind-styled-components";
import { CategoriesMockData } from "@/types/CategoriesMockData";
import PageContainer from "@/components/business/pagecontainer/PageContainer";
import Image from "next/image";
import { useStore } from "@/store";
import { styled } from "styled-components";
import Link from "next/link";


export default function HomePge({ products }) {
    const [language] = useStore.language();

    return (
        <>
            <Head>

            </Head>
            <PageContainer>
                <ProductContainerTW>
                    {
                        products.map(product => (
                            <Link href={`/product/${product.id}`}>
                             <ProductItemTW key={product.id}>
                                <Image
                                    width={5128}
                                    height={7689}
                                    alt=""
                                    src={product.coverImage}
                                />
                                <div className="text-black mt-3 text-xl">{product.name[language]}</div>
                                {
                                    !product.price.hidden && (
                                        <div className="text-black mt-3 text-2xl font-bold">
                                            <span>{language === 'English' ? '€' : '￥'}</span>
                                            <span>{product.price[language]}</span>
                                        </div>
                                    )
                                }
                            </ProductItemTW>
                            </Link>
                        ))
                    }
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
    display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;
  justify-items: start;
`


const ProductContainerTW = tw(ProductContainerSC)`
    mt-28
    px-12    
`
const ProductItemSC = styled('div')`
margin-bottom: 50px;
     img {
        width: 320px;
        height: auto;
     }

`
const ProductItemTW = tw(ProductItemSC)`

`

export const getStaticProps = async ({
    params,
}) => {
    const productsRemoteData = await fetch('https://customer-arya.oss-cn-shanghai.aliyuncs.com/products.json').then(res => res.json());
    const products = productsRemoteData.filter(product => product.categories.some(category => category.path.includes(params?.category.join('/'))));
    console.log(products);
    
    return {
        props: {
            products,
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    return {
        paths: CategoriesMockData.map(catogory => `/category/${catogory.path}`),
        fallback: 'blocking',
    }
}
