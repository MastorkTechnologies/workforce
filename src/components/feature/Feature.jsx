import Card from "./Card"
import { Data } from "./Data"

function Feature() {
  return (
    <div id="feature" className="flex gap-4   px-8 py-3 md:px-16 md:py-10 xl:px-16  2xl:py-10 xl:py-10 flex-wrap 2xl:px-16 justify-center items-center">
        {Data.map((item)=>(
            <div key={item.id}>
            <Card  image={item.image} title={item.title}  detail={item.detail} />
            </div>
        ))}
    </div>
  )
}

export default Feature