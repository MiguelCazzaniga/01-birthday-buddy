export const Card = ({name,age,image}) => {
  return (
    <div className='person'>
      <img src={image} alt={name}></img>
      <div className="personData">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  )
}
