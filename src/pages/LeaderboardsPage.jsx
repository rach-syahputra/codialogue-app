import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import LeaderboardsList from '../components/LeaderboardsList'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveLeaderboards } from '../states/leaderboards/action'
import Loading from '../components/Loading'
import BottomMenu from '../components/BottomMenu'

const LeaderboardsPage = () => {
  const leaderboards = useSelector((state) => state.leaderboards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards())
  }, [])

  useEffect(() => {
    console.log(leaderboards)
  }, [leaderboards])

  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <Loading />
      <div className='w-[720px] lg:w-[1024px] m-auto pb-12'>
        <Sidebar currentPage='leaderboards' />
        {leaderboards && <LeaderboardsList leaderboards={leaderboards} />}
        <BottomMenu currentPage='leaderboards' />
      </div>
    </div>
  )
}

export default LeaderboardsPage
