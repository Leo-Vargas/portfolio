import Tag from "./Tag"

type Props = {
  name: string
  image: string
  link: string
  tags: Array<string>
}

const WorkCard = ({ name, image, link, tags }: Props) => {
  return (
    <div className="md:w-80 w-60">
      <div className="md:w-80 md:h-80 w-60 h-60 border-2 border-black">
        <img alt={`${name} website illustration`} src={image}/>
      </div>
      <div className="flex flex-col justify-evenly">
        <p className="mt-4 font-semibold">{name}</p>
        <div className="flex gap-[2px] flex-wrap">
          {tags.map((item: string, index) => (
            <Tag
              key={`${item}-${index}`}
              tag={item} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkCard