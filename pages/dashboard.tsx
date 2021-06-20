import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

import { useAuth } from '../src/contexts/AuthContext'

import { Dashboard } from '../src/screens/Dashboard'
import { TrainerDashboard } from '../src/screens/TrainerDashboard'
import { withSSRAuth } from '../src/utils/withSSRAuth'

type User = {
    name: string
    email: string
    phone: string
    city: string
    street: string
    number: string
    district: string
    type: 'COMMON' | 'PERSONAL'
}

interface Props {
    user: User
}

export default function DashboardPage({user}){
    return user.type === 'COMMON' ? (
        <Dashboard/>
    ):(
        <TrainerDashboard/>
    )
}



export const getServerSideProps: GetServerSideProps<Props> = withSSRAuth(async (ctx) => {
    const cookies = parseCookies(ctx)

    const user = cookies['perfit.user']

    if(!user){
        return {
            redirect: {
                destination: '/signIn',
                permanent: false
            }
        }
    }

    const parsedUser = JSON.parse(user)

    return {
      props: {
        user: parsedUser
      }
    }
  })