import Card from './Card';

export default function Creation() {
  const creations = [
    { name: 'DEEP EARTH',       image: 'bg-deep-earth' },
    { name: 'NIGHT ARCADE',     image: 'bg-night-arcade' },
    { name: 'SOCCER TEAM VR',   image: 'bg-soccer-team' },
    { name: 'THE GRID',         image: 'bg-grid' },
    { name: 'FROM UP ABOVE VR', image: 'bg-from-above' },
    { name: 'POCKET BOREALIS',  image: 'bg-pocket-borealis' },
    { name: 'THE CURIOSITY',    image: 'bg-curiosity' },
    { name: 'MAKE IT FISHEYE', image: 'bg-fisheye' },
  ]

  return (
    <div className="tracking-wide flex flex-col items-center">
      <h1 className="font-josefin-sans text-3xl mb-12">OUR CREATIONS</h1>

      {creations.map(creation => {
          return <Card key={crypto.randomUUID()} name={creation.name} image={creation.image} />
      })}

      <button className="border-2 border-black py-2 px-8 font-alata tracking-super-wide text-15px mt-2 mb-28">SEE ALL</button>
    </div>
  )
}