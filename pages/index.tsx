import tw from "tailwind-styled-components"
import PageContainer from '@/components/business/pagecontainer/PageContainer'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { styled } from "styled-components";
import JumpToIcon from "@/components/business/icons/jumpToIcon";
import Image from "next/image";

const items = [
  <div className="w-full h-192 bg-slate-600" data-value="1">1</div>,
  <div className="w-full h-192 bg-red-400" data-value="2">2</div>,
  <div className="w-full h-192 bg-yellow-50" data-value="3">3</div>,
  <div className="w-full h-192 bg-fuchsia-200" data-value="4">4</div>,
  <div className="w-full h-192 bg-green-600" data-value="5">5</div>,
];

export default function Home() {
  return (
    <PageContainer>
      <BannerTW>
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          disableButtonsControls
          autoPlay
          autoPlayInterval={3000}
        />
      </BannerTW>
      <ReayToWearTW>
        <ReadyNameTW>
          <div>
            READY TO WEAR
          </div>
          <ReadyImageContainerTW>
            <div className="flex-1 mr-4">
              <ReadyImage1TW>
                <ReadyIconTW>
                  <JumpToIcon />
                  <div className="mt-5">Womean's</div>
                </ReadyIconTW>
              </ReadyImage1TW>
              <ReadyImage2TW>
                <ReadyIconTW>
                  <JumpToIcon />
                  <div className="mt-5">Womean's</div>
                </ReadyIconTW>
              </ReadyImage2TW>
            </div>
            <ReadyImage3TW>
              <ReadyIconTW>
                <JumpToIcon />
                <div className="mt-5">Womean's</div>
              </ReadyIconTW>
            </ReadyImage3TW>
          </ReadyImageContainerTW>
        </ReadyNameTW>
      </ReayToWearTW>
      <AccessoriesTW>
        <AccessoriesNmaeTW>ACCESSORIES</AccessoriesNmaeTW>
        <AccessoriesContentTW>
          <AccessoriesItemTW>
            <div className="text-2xl text-black text-info">The classic shapes and sleek lines of the new Prada Arqué bag inspire a modern, chic silhouette.</div>
            <div className="flex">
              <div className="font-bold text-2xl text-black flex flex-col justify-center mr-8">
                <div>Discover</div>
                <div>More</div>
              </div>
              <JumpToIcon />
            </div>
          </AccessoriesItemTW>
          <AccessoriesImageItemTW>
            <Image
              src='/example.png'
              width={285}
              height={409}
              alt="img"
            />
            <div className="w-full text-black text-2xl mt-3">Ribbed Vest Top</div>
          </AccessoriesImageItemTW>
          <AccessoriesImageItemTW>
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
          </AccessoriesImageItemTW>
        </AccessoriesContentTW>
      </AccessoriesTW>
      <LifeStyleTW>
        <LifeSTyleNameTW>
          LIFESTYLE
        </LifeSTyleNameTW>
        <LifeIconTW>
          <div className="flex">
            <div className="font-bold text-2xl text-white flex flex-col justify-center mr-8">
              <div>Discover</div>
              <div>More</div>
            </div>
            <JumpToIcon mode="bgWhite" />
          </div>
        </LifeIconTW>
        <LifeStyleListTW>
          <LifeStyleItemTW>
            <Image
              src='/example-2.png'
              width={311}
              height={486}
              alt="img"
            />
              <div className="w-full text-white text-2xl mt-3">Ribbed Vest Top</div>
          </LifeStyleItemTW>
          <LifeStyleItemTW>
            <Image
              src='/example-2.png'
              width={311}
              height={486}
              alt="img"
            />
              <div className="w-full text-white text-2xl mt-3">Ribbed Vest Top</div>
          </LifeStyleItemTW>
          <LifeStyleItemTW>
            <Image
              src='/example-2.png'
              width={311}
              height={486}
              alt="img"
            />
              <div className="w-full text-white text-2xl mt-3">Ribbed Vest Top</div>
          </LifeStyleItemTW>
          <LifeStyleItemTW>
            <Image
              src='/example-2.png'
              width={311}
              height={486}
              alt="img"
            />
              <div className="w-full text-white text-2xl mt-3">Ribbed Vest Top</div>
          </LifeStyleItemTW>
        </LifeStyleListTW>
      </LifeStyleTW>
    </PageContainer>
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
  h-192
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
  pt-16
  px-12
  text-7xl
  font-bold
  relative
  text-white
`;

const ReadyImageContainerTW = tw.div`
  left-0
  right-0
   px-12
  mt-12
  flex
  absolute
`;

const ReadyImage1SC = styled.div`
  height: 434px;
`

const ReadyImage1TW = tw(ReadyImage1SC)`
  bg-green-300
  mb-8
  relative
`;

const ReadyImage2SC = styled.div`
  height: 434px;
`;

const ReadyImage2TW = tw(ReadyImage2SC)`
bg-yellow-200
relative
`;

const ReadyImage3SC = styled.div`
  height: 900px;
`;

const ReadyImage3TW = tw(ReadyImage3SC)`
  flex-1
  bg-red-400
  ml-4
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
  justify-between
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

  img {
    width: 285px;
    height: 409px;
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


  img {
    width: 311px;
    height: 486px;
  }

`
const LifeStyleItemTW = tw(LifeStyleItemSC)`

`
