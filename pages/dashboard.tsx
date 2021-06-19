import { useRouter } from 'next/router'

import { useAuth } from '../src/contexts/AuthContext'

import { Dashboard } from '../src/screens/Dashboard'
import { TrainerDashboard } from '../src/screens/TrainerDashboard'

export default function DashboardPage(){
    const { user } = useAuth()

    const { push } = useRouter()
    
    if(!user){
        push('signIn')
    }

    return user.type === 'COMMON' ? (
        <Dashboard/>
    ):(
        <TrainerDashboard/>
    )
}