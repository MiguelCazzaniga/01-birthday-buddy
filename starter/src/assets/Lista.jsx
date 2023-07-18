import { Card } from "../card"

export const Lista = ({lista}) => {
      
   
  return (
    <div>
      {lista.map((item) => {
        return <Card key={item.id}{...item}></Card>
      })}
      
    </div>
  )
}