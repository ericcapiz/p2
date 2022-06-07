import Head from 'next/head'

import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eric Capiz | Front-End Developer</title>
        <meta name="description" content="Showcasing My Projects" />
        
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />

     </div>
  )
}
