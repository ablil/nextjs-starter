import React from "react"
import Image from "next/image"

const MaintenancePage = () => {
  return (
    <div className="text-center w-screen h-screen flex justify-center items-center flex-col">
      <Image aria-hidden src="/maintenance.svg" alt="this website is under maintenance" width={500} height={500} />
      <h1 className="text-4xl font-bold my-8 capitalize">this website is under maintenance</h1>
      <p>this website is currently undergoing some maintenance, we will be back shortly.</p>
    </div>
  )
}

export default MaintenancePage
