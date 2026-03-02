import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Buttos from '../common/Buttos'
import Images from '../common/Images'
import bennerimg from "/src/assets/Cards.png"

function Home() {
  return (
    <Container>
        <Flex>
            <div className="w-[50%] ">
                <h1 className="text-[45px] pr-25 font-bold font-OpenSans capitalize leading-15 pb-5"> Professional task manager tool to grow </h1>
                <p className="text-[16px] font-normal pr-25 pb-5">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                <div className="">
                    <input type="text" className={`border border-primary text-primary outline-0 py-2.5 w-75 rounded-2xl`} />
                    <Buttos className={`ml-5`} btntxt={`Sign up`}></Buttos>
                </div>
            </div>
            <div className="w-[50%] pl-25 ">
                <Images className={`w-125 `} imgsrc={bennerimg}/>
            </div>
        </Flex>
    </Container>
  )
}

export default Home