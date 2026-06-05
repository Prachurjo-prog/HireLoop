"use client"

import { DashboardStats } from '@/Components/Dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import { Briefcase, CircleCheck, Persons, Thunderbolt } from '@gravity-ui/icons';


import React from 'react';


const RecruoterDashBoardPage = () => {

    const {data: session, isPending} = useSession()

    if(isPending) {
        <h2>Loading...</h2>
    }
const recruiterData = [
        { icon: Briefcase, title: "Total Job Posts", value: "48",  },
        { icon: Persons, title:"Total Appliants",  value: "1234" },
        { icon: Thunderbolt, title:"Active Jobs",  value: "42" },
        { icon: CircleCheck, title:"Closed Jobs",  value: "32" },
        
    ];
    const user = session?.user

    return (
        <div>
         <h2 className='font-lg text-xl'>Welcome back, {user?.name}</h2>

         <DashboardStats statsData={recruiterData}/>
        </div>
    );
};

export default RecruoterDashBoardPage;