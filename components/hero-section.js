import { Pane, Heading, Button, TextInput } from "evergreen-ui";
import Image from 'next/image'




export default function HeroSection() {
  return (
    <Pane //container
background="linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)"
minHeight={200} 

    >
    <Pane //header
    display="flex" justifyContent='space-between' alignItems="center">
 <Image
        src='/coolspots.svg'
        position='absolute'
        size="cover"
        alt="Picture of the author"
        width={200}
        height={42}
        zIndex='-100'
      />
     
      <Pane
      display="flex"
      >
      <Heading size={400} color="white">How it works</Heading> 
      <Button>Log in</Button>
      </Pane>
      </Pane>
      <Pane
      maxWidth={800} display='block' padding={32}>
      <Heading fontWeight={400} color='white'>The first ever OaaS, office as a service☕️ 👩🏻‍💻 Coffeeshops, co-working spaces, your fellow remoters... in one place! Join Coolspots to get access to different locations all around the world. Working remotely doesn't mean isolation!</Heading>
      <TextInput name="text-input-name" placeholder="Search..."/>
      </Pane>
    </Pane>
  )
}