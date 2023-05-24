import Card from './Card';

export default function Creation() {
  const creations = [
    { name_1: 'DEEP',     name_2: 'EARTH',      image: 'bg-deep-earth-mobile lg:bg-deep-earth-desktop' },
    { name_1: 'NIGHT',    name_2: 'ARCADE',     image: 'bg-night-arcade-mobile lg:bg-night-arcade-desktop' },
    { name_1: 'SOCCER',   name_2: 'TEAM VR',    image: 'bg-soccer-team-mobile lg:bg-soccer-team-desktop' },
    { name_1: 'THE',      name_2: 'GRID',       image: 'bg-grid-mobile lg:bg-grid-desktop' },
    { name_1: 'FROM UP',  name_2: 'ABOVE VR',   image: 'bg-from-above-mobile lg:bg-from-above-desktop' },
    { name_1: 'POCKET',   name_2: 'BOREALIS',   image: 'bg-pocket-borealis-mobile lg:bg-pocket-borealis-desktop' },
    { name_1: 'THE',      name_2: 'CURIOSITY',  image: 'bg-curiosity-mobile lg:bg-curiosity-desktop' },
    { name_1: 'MAKE IT',  name_2: ' FISHEYE',   image: 'bg-fisheye-mobile lg:bg-fisheye-desktop' },
  ]

  return (
    <div className="tracking-wide flex flex-col items-center mb-32">
      <div className="lg:flex lg:justify-between border lg:w-3/4">
        <h1 className="font-josefin-sans text-3xl mb-12">OUR CREATIONS</h1>
        <button className="border-2 border-black py-2 px-8 font-alata tracking-super-wide text-xs mt-2 hidden lg:block">SEE ALL</button>
      </div>

      {creations.map(creation => {
          return <Card key={crypto.randomUUID()} name_1={creation.name_1} name_2={creation.name_2} image={creation.image} />
      })}

      <button className="border-2 border-black py-2 px-8 font-alata tracking-super-wide text-xs mt-2 mb-2 lg:hidden">SEE ALL</button>
    </div>
  )
}