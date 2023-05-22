import Header from './Header';
import Info from './Info';
import Creation from './Creation';
import Footer from './Footer';

export default function App() {
  const creations = [
    { name: 'DEEP EARTH',       image: 'bg-deep-earth' },
    { name: 'NIGHT ARCADE',     image: 'bg-night-arcade' },
    { name: 'SOCCER TEAM VR',   image: 'bg-soccer-team' },
    { name: 'THE GRID',         image: 'bg-grid' },
    { name: 'FROM UP ABOVE VR', image: 'bg-from-above' },
    { name: 'POCKET BOREALIS',  image: 'bg-pocket-borealis' },
    { name: 'THE CURIOSITY',    image: 'bg-curiosity' },
    { name: 'MAKE IT FISHEYYE', image: 'bg-fisheye' },
  ]

  return (
    <div>
      <Header />
      <Info />

      {creations.map(creation => {
        return <Creation name={creation.name} image={creation.image} />
      })}

      <Footer />
    </div>
  )
}