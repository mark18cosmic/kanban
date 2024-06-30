import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'


interface FeatureDetailsType {
    title: string
    descrition: string
    image: string
}

const FeaturesDetails = [
    {
        title: "",
        description: "",
        image: "",
    }
]

const FeaturesView = (FeaturesDetails: FeatureDetailsType) => {
    return (
        <Card>
            <CardHeader>
                <Image src={FeaturesDetails.image} alt='alt' />

            </CardHeader>
            <CardBody>
                <div>
                    {FeaturesDetails.title}

                    <p>{FeaturesDetails.descrition}</p>
                </div>
            </CardBody>
        </Card>
    )
}

const Features = () => {
    return (
        <div className='min-h-screen bg-[#6E24A8] flex flex-col text-white mt-10 rounded-xl p-10'>
            <div className='flex justify-center'>
                <h2 className='text-3xl font-bold border-b-2 border-white'>Features</h2>
            </div>
            <div className='flex justify-center'>

                <div className='flex w-full gap-4 justify-center md:justify-between items-center mt-10 flex-col md:flex-row'>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView title={'Columns and Swimlanes'} descrition={''} image={''} />
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView title={'Independent Tracking'} descrition={''} image={''} />
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView title={'Real-time Updates'} descrition={''} image={''} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features