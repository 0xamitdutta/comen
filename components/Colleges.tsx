import Image from "next/image"

const Colleges = () => {
  return (
    <div className="mx-auto px-8 max-w-lg">
        <Image src="/assets/mainframe.jpg?height=200&width=400" alt="Mainframe" height={200} width={400} className="object-cover"/>
    </div>
  )
}

export default Colleges