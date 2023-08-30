import React, { useState } from "react";
import { styled } from "styled-components"
import tw from "tailwind-styled-components"
import Image from "next/image";
import { Category } from "@/types";
import { CategoriesMockData } from "@/types/CategoriesMockData";
import { useStore } from "@/store";
import Link from "next/link";
import LanguageIcon from "../icons/LanguageIcon";

export default function Header({ categoties = CategoriesMockData }: { categoties: Category[] }) {
    const [categotiesTree, setCategotiesTree] = useState(() => formTreeData(categoties))
    const [language, setLanguage] = useStore.language();
    const [words] = useStore.words();
    const [showSecond, setShowSecond] = useState(false);

    return (
        <HeaderTW>
            <TopHeaderTW>
                <SearchTW>
                    <input
                        className="outline-none text-placeholder text-sm"
                        placeholder="Search Products …"
                    />
                </SearchTW>
                <LogoTW>
                    <Link href='/'>
                        <Image
                            className="w-full h-auto"
                            src='/AC.jpg'
                            width={1057}
                            height={1057}
                            alt="logo"
                        />
                    </Link>
                </LogoTW>
                <LanguageTW
                    onClick={() => {
                        setLanguage(draftRef => {
                            if(draftRef.current === 'English') {
                                draftRef.current = 'Chinese'
                            }else if(draftRef.current === 'Chinese') {
                                draftRef.current = 'English'
                            }
                        })
                    }}
                >
                    <LanguageIcon />
                </LanguageTW>
            </TopHeaderTW>
            <CategotyTW
                onMouseEnter={() => { setShowSecond(true) }}
                onMouseLeave={() => { setShowSecond(false) }}
            >
                {
                    categotiesTree.children.map(child => (
                        <CategoryItemTW>
                            <Link href={`/category/${child.path}`}><FistItemTW >{child.name[language]}</FistItemTW></Link>
                            {
                                showSecond && (
                                    <SecondItemContainerTW>
                                        {
                                            child.children?.map(secondChild => (
                                                <Link href={`/category/${secondChild.path}`}>
                                                    <SecondItemTW>{secondChild.name[language]}</SecondItemTW>
                                                </Link>
                                            ))
                                        }
                                    </SecondItemContainerTW>
                                )
                            }
                        </CategoryItemTW>
                    ))
                }
                {/* <CategoryItemTW>
                    <FistItemTW>
                        {words.stories[language]}
                    </FistItemTW>
                </CategoryItemTW> */}
            </CategotyTW>
        </HeaderTW>
    )
}


const HeaderTW = tw.header`
    w-full
`;

const TopHeaderTW = tw.div`
    flex
    items-center
    justify-between
    w-full
    h-20
    border-b
    border-line
    px-32
    relative
`

const SearchTW = tw.div`
    opacity-0
`;

const LogoTW = tw.div`
    w-16
    absolute
    left-0
    right-0
    top-0
    bottom-0
    m-auto
    h-fit
`;

const LanguageSC = styled('div')`
    
.icon {
    width: 24px;
    height: 24px;
    fill: black;
}
`

const LanguageTW = tw(LanguageSC)`

`;

const CategotyTW = tw.div`
flex
w-full
py-5
justify-center
items-start
absolute
bg-white
z-50
overflow-x-scroll
`;


const CategoryItemTW = tw.div`
    mx-6
    text-black
`

const FistItemTW = tw.div`
    text-base
    w-40
    hover:opacity-50
    transition-opacity
    cursor-pointer
`;
const SecondItemContainerTW = tw.div`
    mt-12
`;

const SecondItemTW = tw.div`
text-xs
mb-3
hover:opacity-50
transition-opacity
cursor-pointer
`;


const formTreeData = (categories: Category[]) => {
    const tree = {
        isRoot: true,
        children: [],
    };

    // 构建树的辅助函数
    function addToTree(node: any, parts: string[], category: Category) {
        if (parts.length === 0) {
            // 如果已经到达路径的最后，将文件信息添加到节点
            for (const key of Object.keys(category)) {
                node[key] = category[key];
            }
            return;
        }

        const part = parts.shift();
        if (!node.children) {
            node.children = [];
        }
        if (!node.children.find(child => child.nodePath === part)) {
            // 如果当前节点下不存在该路径部分，创建一个新节点
            node.children.push({
                nodePath: part,
            });
        }
        addToTree(node.children.find(child => child.nodePath === part), parts, category);
    }

    // 遍历文件数组，逐个添加到树中
    categories.forEach(category => {
        const parts = category.path.split('/');
        addToTree(tree, parts, category);
    });

    return tree;
}

