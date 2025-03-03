import { useState } from 'react'

import BusinessCard from './components/BusinessCard'
import ImageSelector from './components/ImageSelector'
import Gallery from './components/Gallery'
import Accordion from './components/Accordion'
import ChatBot from './components/ChatBot'
import DarkModeSwitcher from './components/DarkModeSwitcher'

export default function Home() {
  const [businessCardImage, setBusinessCardImage] = useState('/images/cornell-seal-black.svg')
  const [name, setNameCard] = useState("Ezra Cornell");
  const [email, setEmailCard] = useState("ec@cornell.edu");

  return (
    <main>
      <DarkModeSwitcher />

      <h2>Business Card</h2>
      <BusinessCard
        image={businessCardImage}
        name="Ezra Cornell"
        email="ezra@cornell.edu"
        description="Ezra Cornell co-founded Cornell University in 1865."
      />
      <ImageSelector onChange={(url) => setBusinessCardImage(url)} />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id = "name"
        value={name}
        onChange={(e) => setNameCard(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input value = {email}
        id = "email"
        onChange={(e) => setEmailCard(e.target.value)}/>
      </div>

      <h2>Gallery Example</h2>
      <Gallery />

      <h2>Accordion Example</h2>
      <Accordion />

      <h2>ChatBot UI</h2>
      <ChatBot />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
