import { Pane, Heading } from 'evergreen-ui';
import Image from 'next/image'

const cities = [
    {
      name: 'Valencia',
      image:
        '/valencia.jpg',
    },
    {
      name: 'Barcelona',
      image:
        '/barcelona.jpg',
    },
    {
      name: 'Padova',
      image:
        '/padova.jpg',
    },
  ]
  
  export default function Cities() {
    return (
      <Pane display='flex' justifyContent="space-evenly">
        {cities.map((city) => (

          <Pane
          border
          borderRadius={5}
          width={200}
          height={150}
          backgroundImage={city.image}
          overflow='hidden'>
          <Image
        src={city.image}
        position='absolute'
        size="cover"
        alt="Picture of the author"
        width={300}
        height={150}
        zIndex='-100'
      />
              <Heading 
              position='relative' 
              zIndex='100'
              color='#343434'>{city.name}</Heading>
              </Pane>

        ))}
      </Pane>
    )
  }