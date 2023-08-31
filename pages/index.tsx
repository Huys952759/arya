import tw from "tailwind-styled-components"
import PageContainer from '@/components/business/pagecontainer/PageContainer'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { styled } from "styled-components";
import JumpToIcon from "@/components/business/icons/jumpToIcon";
import Image from "next/image";
import Head from "next/head";
import { isMobileDevice } from "@/utils";
import { useEffect, useState } from "react";
import { Divider } from 'antd';
import Link from "next/link";
import { useStore } from "@/store";


const items = (banners) => banners.map(banner => (
  <Link href={`/product/${banner.productSKU}`} draggable="false">
    <BannerItemTW className="mt-[10px] mb-[10px]">
      <Image
        src={banner.imgURL}
        width={1200}
        height={640}
        alt="img"
        draggable="false"
        quality={100}
        style={{ objectFit: 'cover' }}
      />
    </BannerItemTW>
  </Link>
))

export default function Home({ IndexConfig }) {
  const [isPhone, setIsPhone] = useState(false);
  const [language, setLanguage] = useStore.language();
  const [words] = useStore.words();

  useEffect(() => {
    setIsPhone(isMobileDevice())
  })
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      </Head>
      <PageContainer>
        <BannerTW>
          <AliceCarousel
            mouseTracking
            items={items(IndexConfig.banner)}
            controlsStrategy="alternate"
            disableButtonsControls
            autoPlay
            autoPlayInterval={3000}
          />
        </BannerTW>
        <ReayToWearTW className={isPhone ? 'text-[18px]' : 'text-[64px]'}>
          <ReadyNameTW>
            <div className={isPhone ? 'font-bold pt-[20px] pl-[20px]' : 'font-bold pt-[67px] pl-[50px]'}>
              {IndexConfig.readToWear.name[language]}
            </div>
            <ReadyImageContainerTW className={isPhone ? '' : 'flex flex-row-reverse'}>
              <ReadyImage1TW className={isPhone ? 'h-[386px]' : 'h-[900px] ml-[32px]'}>
                <Image
                  src={IndexConfig.readToWear.images[0].imgURL}
                  width={750}
                  height={1125}
                  alt="img"
                  draggable="false"
                  quality={100}
                />
                <Link
                  href={`/product/${IndexConfig.readToWear.images[0].productSKU}`}
                >
                  <ReadyIconTW>
                    <JumpToIcon />
                    <div className="mt-5">{IndexConfig.readToWear.images[0].name[language]}</div>
                  </ReadyIconTW>
                </Link>
              </ReadyImage1TW>

              <div className={isPhone ? 'flex' : 'flex-1'}>
                <ReadyImage2TW className={isPhone ? 'w-[241px] h-[160px]' : ''}>
                  <Image
                    src={IndexConfig.readToWear.images[1].imgURL}
                    width={1200}
                    height={640}
                    alt="img"
                    draggable="false"
                    quality={100}
                  />
                  <Link
                    href={`/product/${IndexConfig.readToWear.images[1].productSKU}`}
                  >
                    <ReadyIconTW>
                      <JumpToIcon />
                      <div className="mt-5">{IndexConfig.readToWear.images[1].name[language]}</div>
                    </ReadyIconTW>
                  </Link>
                </ReadyImage2TW>

                <ReadyImage3TW className={isPhone ? 'w-[241px] h-[160px]' : ''}>
                  <Image
                    src={IndexConfig.readToWear.images[2].imgURL}
                    width={1200}
                    height={640}
                    alt="img"
                    draggable="false"
                    quality={100}
                  />
                  <Link
                    href={`/product/${IndexConfig.readToWear.images[2].productSKU}`}
                  >
                    <ReadyIconTW>
                      <JumpToIcon />
                      <div className="mt-5">{IndexConfig.readToWear.images[2].name[language]}</div>
                    </ReadyIconTW>
                  </Link>

                </ReadyImage3TW>
              </div>

            </ReadyImageContainerTW>
          </ReadyNameTW>
        </ReayToWearTW>
        <AccessoriesTW>
          <AccessoriesNmaeTW>{IndexConfig.accessories.name[language]}</AccessoriesNmaeTW>
          <AccessoriesContentTW>
            <AccessoriesItemTW>
              <div className="text-2xl text-black text-info">The classic shapes and sleek lines of the new Prada Arqué bag inspire a modern, chic silhouette.</div>
              <div className="flex">
                <div className="font-bold text-2xl text-black flex flex-col justify-center mr-8">
                  <div>{words.discover[language]}</div>
                  <div>{words.more[language]}</div>
                </div>
                <JumpToIcon />
              </div>
            </AccessoriesItemTW>
            <Link
              href={`/product/${IndexConfig.accessories.images[0].productSKU}`}
            >
              <AccessoriesImageItemTW>
                <Image
                  src={IndexConfig.accessories.images[0].imgURL}
                  width={1200}
                  height={640}
                  alt="img"
                  draggable="false"
                  quality={100}
                />
                <div className="w-full text-black text-2xl mt-3">{IndexConfig.accessories.images[0].name[language]}</div>
              </AccessoriesImageItemTW>
            </Link>
            {/* <AccessoriesImageItemTW>
              <Image
                src='/example-1.png'
                width={285}
                height={409}
                alt="img"
              />
              <div className="w-full text-black text-2xl mt-3">Ribbed Vest Top</div>
            </AccessoriesImageItemTW>
            <AccessoriesImageItemTW>
              <Image
                src='/example-2.png'
                width={285}
                height={409}
                alt="img"
              />
              <div className="w-full text-black text-2xl mt-3">Ribbed Vest Top</div>
            </AccessoriesImageItemTW> */}
          </AccessoriesContentTW>
        </AccessoriesTW>
        <LifeStyleTW>
          <LifeSTyleNameTW>
            {IndexConfig.lifestyle.name[language]}
          </LifeSTyleNameTW>
          <LifeIconTW>
            <div className="flex">
              <div className="font-bold text-2xl text-white flex flex-col justify-center mr-8">
                <div>{words.discover[language]}</div>
                <div>{words.more[language]}</div>
              </div>
              <JumpToIcon mode="bgWhite" />
            </div>
          </LifeIconTW>
          <LifeStyleListTW>
            <Link href={`/product/${IndexConfig.lifestyle.images[0].productSKU}`}>
              <LifeStyleItemTW>
                <Image
                  src={IndexConfig.lifestyle.images[0].imgURL}
                  width={750}
                  height={1125}
                  alt="img"
                  draggable="false"
                  quality={100}
                />
                <div className="w-full text-white text-2xl mt-3">{IndexConfig.lifestyle.images[0].name[language]}</div>
              </LifeStyleItemTW>
            </Link>
            <Link href={`/product/${IndexConfig.lifestyle.images[1].productSKU}`}>
              <LifeStyleItemTW>
                <Image
                  src={IndexConfig.lifestyle.images[1].imgURL}
                  width={750}
                  height={1125}
                  alt="img"
                  draggable="false"
                  quality={100}
                />
                <div className="w-full text-white text-2xl mt-3">{IndexConfig.lifestyle.images[1].name[language]}</div>
              </LifeStyleItemTW>
            </Link>
            <Link href={`/product/${IndexConfig.lifestyle.images[2].productSKU}`}>
              <LifeStyleItemTW>
                <Image
                  src={IndexConfig.lifestyle.images[2].imgURL}
                  width={750}
                  height={1125}
                  alt="img"
                  draggable="false"
                  quality={100}
                />
                <div className="w-full text-white text-2xl mt-3">{IndexConfig.lifestyle.images[2].name[language]}</div>
              </LifeStyleItemTW>
            </Link>
            <Link href={`/product/${IndexConfig.lifestyle.images[3].productSKU}`}>
              <LifeStyleItemTW>
                <Image
                  src={IndexConfig.lifestyle.images[3].imgURL}
                  width={750}
                  height={1125}
                  alt="img"
                  draggable="false"
                  quality={100}
                />
                <div className="w-full text-white text-2xl mt-3">{IndexConfig.lifestyle.images[3].name[language]}</div>
              </LifeStyleItemTW>
            </Link>
          </LifeStyleListTW>
        </LifeStyleTW>
        <ContactStyleTW className={isPhone ? 'flex-col pt-[40px] leading-[20px]' : 'flex-row pt-[50px] leading-[25px] font-bold'}>
          {!isPhone && <LogoTW>
            <Image
              className="w-full h-auto"
              src='/AC.jpg'
              width={1057}
              height={1057}
              alt="logo"
            />
          </LogoTW>}
          <ContactDetailTW className={isPhone ? 'ml-[20px]' : 'ml-[110px]'}>
            <div className="whitespace-nowrap">Contact Us:</div>
            <div className="mt-[15px]">sales@aryacashmere.com</div>
          </ContactDetailTW>
          {isPhone && <Divider />}
          <FollowUsTW className={isPhone ? 'ml-[20px]' : 'ml-[110px]'}>
            <div className="whitespace-nowrap">Follow us on</div>
            <div className={isPhone ? 'flex justify-between mt-[20px] w-[130px]' : 'flex justify-between mt-[12px] w-[115px]'}>
              <Image
                alt="brand"
                width={24}
                height={24}
                style={{cursor: 'pointer'}}
                onClick={() => window.open('https://www.instagram.com/aryacashmere/')}
                src="/instagram.svg" className=" h-auto" />
              <Image
                alt="brand"
                width={24}
                height={24}
                style={{cursor: 'pointer'}}
                onClick={() => {window.open('https://www.facebook.com/profile.php?id=61550338095612')}}
                src="/facebook.svg" className=" h-auto" />
              <Image
                alt="brand"
                width={24}
                height={24}
                src="/tiktok.svg" className="h-auto" />
            </div>
          </FollowUsTW>
          {isPhone && <Divider />}
          <DescriptionTW className={isPhone ? 'ml-[20px] pb-[20px]' : 'ml-[110px]'}>
            Sustainability + Transparency
          </DescriptionTW>
        </ContactStyleTW>
      </PageContainer>
    </>
  )
}

const BannerSC = styled.div`
  .alice-carousel__dots {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const BannerTW = tw(BannerSC)`
  w-full
  mt-16
`;

const ReayToWearSC = styled.div`
  height: 1035px;
`;

const ReayToWearTW = tw(ReayToWearSC)`
  w-full
  bg-white
`;

const ReadyNameSC = styled.div`
  height: 793px;
`;

const ReadyNameTW = tw(ReadyNameSC)`
  w-full
  bg-black
  relative
  text-white
`;

const ReadyImageContainerTW = tw.div`
  left-0
  right-0
  px-12
  mt-12
  absolute
`;

const ReadyImage1SC = styled.div`

 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
 }
`

const ReadyImage1TW = tw(ReadyImage1SC)`
  mb-8
  relative
  flex-1
`;

const ReadyImage2SC = styled.div`
  height: 434px;

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
 }
`;

const ReadyImage2TW = tw(ReadyImage2SC)`
bg-yellow-200
relative
mb-[32px]
`;

const ReadyImage3SC = styled.div`
  height: 434px;

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
 }
`;

const ReadyImage3TW = tw(ReadyImage3SC)`
  bg-red-400
  relative

`;

const ReadyIconTW = tw.div`
  absolute
  bottom-10
  right-8
  flex
  flex-col
  items-end
`;

const AccessoriesSC = styled('div')`
  height: 828px;
  margin-top: 120px;
`

const AccessoriesTW = tw(AccessoriesSC)`
  bg-white
  pb-20
  px-12
`;

const AccessoriesNmaeTW = tw.div`
text-7xl
font-bold
text-black
`;

const AccessoriesContentSC = styled.div`
  height: 489px;
`;

const AccessoriesContentTW = tw(AccessoriesContentSC)`
  w-full
  mt-14
  flex
`

const AccessoriesItemSC = styled.div`

  .text-info {
    width: 373px;
  }
`;

const AccessoriesItemTW = tw(AccessoriesItemSC)`
  flex
  flex-col
  justify-around
`;

const AccessoriesImageItemSC = styled.div`
  width: 285px;
  height: 409px;
  margin-left: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const AccessoriesImageItemTW = tw(AccessoriesImageItemSC)`
  h-full
`;

const LifeStyleSC = styled('div')`
  
  height: 952px;
`
const LifeStyleTW = tw(LifeStyleSC)`
 px-12
 bg-black
 pt-20
`
const ContactStyleSC = styled('div')`
  height: 200px
`

const ContactStyleTW = tw(ContactStyleSC)`
  w-full
  bg-white
  text-[18px]
  flex
`

const LogoTW = tw.div`
    h-[142px]
    w-[120px]
    ml-[120px]
`;

const ContactDetailTW = tw.div`
  h-[62px]
  w-[185px]
`

const FollowUsTW = tw.div`
  w-[185px]
`

const DescriptionTW = tw.div`
  ml-[120px]
`

const LifeSTyleNameTW = tw.div`
text-7xl
font-bold
text-white
`

const LifeIconTW = tw.div`
  flex
  justify-end
`;

const LifeStyleListTW = tw.div`
  flex
  justify-between
  mt-14
`

const LifeStyleItemSC = styled.div`
  width: 311px;
  height: 486px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

`
const LifeStyleItemTW = tw(LifeStyleItemSC)`

`

const BannerItemSC = styled('div')`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    user-select: none;
  }
`

const BannerItemTW = tw(BannerItemSC)`
w-full 
`;

export const getStaticProps = async ({
  params,
}) => {
  const IndexConfig = {
    "banner": [
      {
        "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/1.jpg",
        "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/1mobile.jpg",
        "productSKU": "AC24SS025",
      },
      {
        "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/2.jpg",
        "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/2mobile.jpg",
        "productSKU": "AC24SS016",
      },
      {
        "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/3.jpg",
        "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/3mobile.jpg",
        "productSKU": "AC24SS011",
      }
    ],
    "readToWear": {
      name: {
        Chinese: '成衣',
        English: 'READY TO WEAR',
      },
      images: [
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/1.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/1mobile.jpg",
          "productSKU": "AC24SS025",
          "name": {
            Chinese: '披肩',
            English: 'Cardigan',
          }
        },
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/2.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/2mobile.jpg",
          "productSKU": "AC24SS016",
          "name": {
            Chinese: '连衣裙',
            English: 'Dress',
          }
        },
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/3.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/3mobile.jpg",
          "productSKU": "AC24SS011",
          "name": {
            Chinese: '套头衫',
            English: 'Jumper',
          }
        }
      ]
    },
    "accessories": {
      name: {
        Chinese: '配饰',
        English: 'ACCESSORIES',
      },
      images: [
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/1.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/BannerImages/1mobile.jpg",
          "productSKU": "AC24SS025",
          "name": {
            Chinese: '披肩',
            English: 'Cardigan',
          }
        }
      ]
    },
    "lifestyle": {
      name: {
        Chinese: '生活方式',
        English: 'LIFESTYLE',
      },
      images: [
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS07/Khaki/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12111.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS07/Khaki/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12111.jpg",
          "productSKU": "AC24SS07",
          "name": {
            Chinese: '绢丝棉开衫',
            English: 'Silk-cotton cardigan',
          }
        },
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS026/Cloud%20Blue/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12089.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS026/Cloud%20Blue/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12089.jpg",
          "productSKU": "AC24SS026",
          "name": {
            Chinese: '绢丝有机棉背心',
            English: 'Silk-cotton tank top',
          }
        },
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS027/Cloud%20Blue/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12089.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS027/Cloud%20Blue/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12089.jpg",
          "productSKU": "AC24SS027",
          "name": {
            Chinese: '绢丝有机棉束脚裤',
            English: 'Silk-cotton joggers',
          }
        },
        {
          "imgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS028/Khaki/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12161.jpg",
          "mobileImgURL": "https://customer-arya.oss-cn-shanghai.aliyuncs.com/AC24SS/AC24SS028/Khaki/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BC%9A%E8%AF%9D12161.jpg",
          "productSKU": "AC24SS028",
          "name": {
            Chinese: '绢丝有机棉直筒裤',
            English: 'Silk-cotton trousers',
          }
        }
      ]
    }
  }
  return {
    props: {
      IndexConfig,
    },
    revalidate: 10,
  }
}
