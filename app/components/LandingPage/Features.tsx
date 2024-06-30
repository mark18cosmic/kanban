import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import feature1 from '@/public/Features/undraw_user_flow_re_bvfx.svg'


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
        <Card className='flex justify-center items-center'>
            <CardHeader className='flex items-center justify-center'>
                <h3 className='text-center text-2xl md:text-3xl font-bold'>{FeaturesDetails.title}
                </h3>
            </CardHeader>
            <CardBody>
                <div className='w-fit flex gap-4 flex-col justify-center items-center'>
                    <Image src={FeaturesDetails.image} alt='alt' width={240} height={0}/>
                    <p>{FeaturesDetails.descrition}</p>
                </div>
            </CardBody>
        </Card>
    )
}

const Features = () => {
    return (
        <div className='min-h-screen bg-gradient-to-t from-purple-400 to-purple-800 flex flex-col text-white mt-10 rounded-xl p-10'>
            <div className='flex justify-center'>
                <h2 className='text-4xl font-bold border-b-2 border-white'>Features</h2>
            </div>
            <div className='flex flex-col justify-center'>

                <div className='flex w-full gap-4 justify-center md:justify-between items-center mt-10 flex-col md:flex-row'>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView
                            title={'Columns and Swimlanes'}
                            descrition={'Columns representing different stages (To Do, In Progress, Done) Swimlanes for categorizing tasks (e.g., by project, priority, team) '}
                            image={feature1} />
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView title={'Independent Tracking'} descrition={'- Separate progress tracking for sub-stories. Individual status updates for sub-stories (e.g., To Do, In Progress, Done)'} image={feature1} />
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView title={'Real-time Updates'} descrition={'Real-time synchronization across all users Activity logs to track changes and updates, Role-based access control (e.g., admin, member, guest)'} image={feature1} />
                    </div>
                </div>
                <div className='flex w-full gap-4 justify-center md:justify-between items-center mt-10 flex-col md:flex-row'>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView
                            title={'Columns and Swimlanes'}
                            descrition={'Columns representing different stages (To Do, In Progress, Done) Swimlanes for categorizing tasks (e.g., by project, priority, team) '}
                            image={feature1} />
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView title={'Independent Tracking'} descrition={'- Separate progress tracking for sub-stories. Individual status updates for sub-stories (e.g., To Do, In Progress, Done)'} image={feature1} />
                    </div>
                    <div className='md:w-1/3 w-full'>
                        <FeaturesView title={'Real-time Updates'} descrition={'Real-time synchronization across all users Activity logs to track changes and updates, Role-based access control (e.g., admin, member, guest)'} image={feature1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features