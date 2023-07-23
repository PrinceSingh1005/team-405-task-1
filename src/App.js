import React, { useState } from 'react';
import './App.css';

const wonders = [
  { name: 'Great Wall of China', image: 'https://www.washingtonpost.com/resizer/OMwSHdXcQBpQF-beX2vFAsM8UAE=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SEH6E5UGZUI6PFVH2F4M6NJE5M.jpg' },
  { name: 'Petra', image: 'https://th.bing.com/th/id/OIP.hLl7rmepGLVF8ZlgVxmrAgHaE7?pid=ImgDet&rs=1.com/petra.jpg' },
  { name: 'Christ the Redeemer', image: 'https://th.bing.com/th/id/R.d1244d62c4a1d998e1f0ec283a7bc687?rik=b6sT%2bKszFF%2fnMA&riu=http%3a%2f%2fstatic.thousandwonders.net%2fChrist.the.Redeemer.original.2544.jpg&ehk=ClRu6WQFql2u3OcH34GpDzSNAxEs9oUyAUJc7XUTe%2f8%3d&risl=&pid=ImgRaw&r=0://example.com/christ-redeemer.jpg' },
  { name: 'Machu Picchu', image: 'https://th.bing.com/th/id/OIP.yZIJN6rUMCpap9h7ZvMUUQHaHa?pid=ImgDet&rs=1.com/machu-picchu.jpg' },
  { name: 'Chichen Itza', image: 'https://th.bing.com/th/id/R.da75aebb7cfbe8a7dec0b460c30b76dc?rik=AXWCqTteYcHLTQ&riu=http%3a%2f%2ffoundtheworld.com%2fwp-content%2fuploads%2f2014%2f03%2fChichen-Itza-2-1.jpg&ehk=%2f5Gzbe8lqhrpxNyAyweReJdSBd%2foZiW9ZpdssYFzPwk%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Roman Colosseum', image: 'https://th.bing.com/th/id/OIP.KvphzbmQ4LADge3NB5J7EwHaEo?pid=ImgDet&rs=1/colosseum.jpg' },
  { name: 'Taj Mahal', image: 'https://th.bing.com/th/id/OIP.c1LxAr71HQPdORgVE4Mc6gHaG1?pid=ImgDet&rs=1-mahal.jpg' }
];

function App() {
  const [search, setSearch] = useState('');

  const filteredWonders = wonders.filter(wonder =>
    wonder.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container'>
      <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
      <div>
        {filteredWonders.map(wonder => (
          <div key={wonder.name}>
            <h2>{wonder.name}</h2>
            <img className='image' src={wonder.image} alt={wonder.name} />
          </div>
        ))}
      </div>
      <footer>
        <p>CopyRight &copy; All Rights Are Reserved 2023 <b><i>PRINCE SINGH</i></b></p>
      </footer>
    </div>
  );
}

export default App;