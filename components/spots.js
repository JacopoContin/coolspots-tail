import { Pane, Heading, Badge } from 'evergreen-ui';

const spots = [
    {
      name: 'WayCo Abastos',
      image:
        'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y293b3JraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
      name: 'WayCo Ruzafa',
      image:
        'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y293b3JraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
      name: 'Metodo Zero',
      image:
        'https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y293b3JraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
  ]
  
  export default function Spots() {
    return (
      <Pane display="block" align="center">
        {spots.map((spot) => (

          <Pane //card
          border
          borderRadius={5}
          width={400}
          backgroundImage={spot.image}
          overflow='hidden'
          display="flex"
          //alignItems="center"
          margin={32}
          >
          <img
        src={spot.image}
        position='absolute'
        size="contain"
        alt="Picture of the author"
        width="auto"
        height={150}
      />
      <Pane
      padding={32}>
              <Heading 
              position='relative' 
              zIndex='100'
              color='#343434'>{spot.name}</Heading>
              <Badge color="blue" marginRight={8}>
    Free coffee
  </Badge>
              </Pane>
              </Pane>

        ))}
      </Pane>
    )
  }