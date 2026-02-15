import './App.css'

const pets = [
  { id: 1, name: 'Luna', type: 'Cat', breed: 'British Shorthair', age: '2 yrs', city: 'Tirana', fee: '€120', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80' },
  { id: 2, name: 'Max', type: 'Dog', breed: 'Labrador Mix', age: '1 yr', city: 'Durrës', fee: '€180', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80' },
  { id: 3, name: 'Milo', type: 'Dog', breed: 'Cocker Spaniel', age: '3 yrs', city: 'Vlorë', fee: '€150', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80' },
  { id: 4, name: 'Nala', type: 'Cat', breed: 'Siamese', age: '8 mos', city: 'Shkodër', fee: '€110', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80' },
]

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div>
          <h1>PetFinder Pro</h1>
          <p>Search pets, compare filters, and view nearby listings on map.</p>
        </div>
        <button className="cta">Post Listing</button>
      </header>

      <main className="layout">
        <aside className="filters">
          <h3>Filters</h3>
          <label>Pet type
            <select><option>All</option><option>Dog</option><option>Cat</option></select>
          </label>
          <label>City
            <select><option>Any city</option><option>Tirana</option><option>Durrës</option><option>Vlorë</option></select>
          </label>
          <label>Age
            <select><option>Any age</option><option>0 - 1 year</option><option>1 - 3 years</option><option>3+ years</option></select>
          </label>
          <label>Max fee
            <input type="range" min="50" max="300" defaultValue="180" />
          </label>
          <button className="apply">Apply filters</button>
        </aside>

        <section className="results">
          <div className="searchRow">
            <input placeholder="Search breed, name, shelter..." />
            <button>Search</button>
          </div>
          <div className="cards">
            {pets.map((p) => (
              <article key={p.id} className="card">
                <img src={p.img} alt={p.name} />
                <div className="cardBody">
                  <h4>{p.name} <span>{p.type}</span></h4>
                  <p>{p.breed} • {p.age}</p>
                  <p>{p.city}</p>
                  <div className="meta">
                    <strong>{p.fee}</strong>
                    <button>View</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mapPanel">
          <h3>Map View</h3>
          <iframe
            title="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.56%2C40.31%2C20.22%2C41.12&layer=mapnik"
          />
        </section>
      </main>
    </div>
  )
}

export default App
