import { auth } from '@/auth'
import EditRoleMobile from '@/components/EditRoleMobile'
import Nav from '@/components/Nav'
import connectDb from '@/lib/db'
import User from '@/models/user.model'
import { div } from 'framer-motion/client'
import { redirect } from 'next/navigation'



async function Home(props:{
  searchParams:Promise<{
    q:string
  }>
 }) {

 const searchParams=await props.searchParams

  await connectDb()
  const session = await auth()


  if (!session) redirect("/login")

  console.log(session?.user)

  const user = await User.findById(session?.user?.id)

 if (!user) redirect("/login")

  const inComplete = !user.mobile || !user.role || (!user.mobile && user.role == "user")
  if (inComplete) {
    return <EditRoleMobile />
  }

  const plainUser =JSON.parse(JSON.stringify(user)) 

  return (
    <div>
      <Nav user = {plainUser}/>
    </div>
  )

}

export default Home
