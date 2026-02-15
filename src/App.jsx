import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

const pets = [
  { id: 1, name: 'Luna', type: 'Cat', breed: 'British Shorthair', age: '2 yrs', city: 'Tirana', fee: 120, status: 'Available' },
  { id: 2, name: 'Max', type: 'Dog', breed: 'Labrador Mix', age: '1 yr', city: 'Durrës', fee: 180, status: 'Pending' },
  { id: 3, name: 'Milo', type: 'Dog', breed: 'Cocker Spaniel', age: '3 yrs', city: 'Vlorë', fee: 150, status: 'Available' },
  { id: 4, name: 'Nala', type: 'Cat', breed: 'Siamese', age: '8 mos', city: 'Shkodër', fee: 110, status: 'Available' },
]

function Shell({ children }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <h2>PetFinder Pro</h2>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/search">Search + Map</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/messages">Messages</NavLink>
          <NavLink to="/admin">Admin Listings</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="content">{children}</main>
    </div>
  )
}

function Dashboard() {
  return <>
    <h1>Operations Dashboard</h1>
    <div className="kpis">
      <Card title="Active Listings" value="148" />
      <Card title="New Inquiries" value="23" />
      <Card title="Adoption Rate" value="68%" />
      <Card title="Avg. Match Time" value="2.4d" />
    </div>
    <div className="panel"><h3>Live activity</h3><p>Realtime feed (frontend mock): new matches, inquiries, approvals, and shelter updates.</p></div>
  </>
}

function SearchMap() {
  return <>
    <h1>Pet Search & Geospatial Discovery</h1>
    <div className="row">
      <div className="panel filters">
        <h3>Advanced Filters</h3>
        <input placeholder="Search by name, breed, rescue" />
        <select><option>All types</option><option>Dog</option><option>Cat</option></select>
        <select><option>All cities</option><option>Tirana</option><option>Durrës</option><option>Vlorë</option></select>
        <input type="range" min="50" max="300" defaultValue="170" />
        <button>Apply Query</button>
      </div>
      <div className="panel map"><h3>Map Layer</h3><iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=19.56%2C40.31%2C20.22%2C41.12&layer=mapnik" /></div>
    </div>
    <div className="panel"><h3>Results</h3><table><thead><tr><th>Name</th><th>Type</th><th>Breed</th><th>City</th><th>Fee</th><th>Status</th></tr></thead><tbody>{pets.map(p=><tr key={p.id}><td>{p.name}</td><td>{p.type}</td><td>{p.breed}</td><td>{p.city}</td><td>€{p.fee}</td><td>{p.status}</td></tr>)}</tbody></table></div>
  </>
}

const Favorites = () => <Page title="Favorites" text="Saved pets, comparison drawer, and shortlist actions (frontend mock)." />
const Messages = () => <Page title="Messages / Inbox" text="Conversation threads, templates, attachments, and notification states." />
const Admin = () => <Page title="Admin Listing Management" text="Draft, publish, archive, moderation queue, and listing quality checks." />
const Profile = () => <Page title="User Profile" text="Account overview, verification badges, and adoption preferences." />
const Settings = () => <Page title="Settings" text="App configuration, permissions, notification matrix, and theme preferences." />

function Page({ title, text }) {
  return <><h1>{title}</h1><div className="panel"><p>{text}</p></div></>
}

function Card({ title, value }) {
  return <div className="card"><small>{title}</small><strong>{value}</strong></div>
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<SearchMap />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  )
}
