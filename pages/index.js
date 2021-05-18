import Head from 'next/head'
import HeroSection from '../components/hero-section';
import { Button, Pane} from 'evergreen-ui'
import Cities from '../components/cities';
import Spots from '../components/spots';

export default function Home() {
  return (
    <Pane
    position="absolute" top={0} left={0} right={0} display="block" align="center" margin="auto">
      <Head>
        <title>Coolspots</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection/>
      <Cities/>
      <Button appearance="primary">Search</Button>
      <Spots/>
      </Pane>
  )
}
