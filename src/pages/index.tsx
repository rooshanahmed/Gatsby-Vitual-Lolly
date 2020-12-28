import React from "react"
import { Lolly } from "../components/Lolly"

export default function Home() {
  return (
    <div>
      <div className="lollyDiv">
        <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue" />
        <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue" />
        <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue" />
        <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue" />
        <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue" />
      </div>
    </div>
  )
}
