import { Heading } from './Heading'

export default {
  title : 'chakra-ui-styled/foundation/typography/Heading',
      component : Heading,
      argTypes :{
    size: {
      control:{
        type:'select',
      },
      options:['small','large']
    }
  },
  parameter:{

  }
};



export const Large = () => {
  return (
      <div>
<Heading value="4xl" As="h1" Size="large"/>
<Heading value="3xl"  As="h1" Size="large"/>
<Heading value="2xl"  As="h2" Size="large"/>
<Heading value="xl"  As="h2" Size="large"/>
<Heading value="lg"  As="h3" Size="large"/>
<Heading value="md"  As="h3" Size="large"/>
<Heading value="sm"  As="h4" Size="large"/>
<Heading value="xs"  As="h4" Size="large"/>
      </div>
  )
}
export const Small = () => {
  return (
      <div>
        <Heading value="4xl"  As="h1" Size="small"/>
        <Heading value="3xl"  As="h1" Size="small"/>
        <Heading value="2xl"  As="h2" Size="small"/>
        <Heading value="xl"  As="h2" Size="small"/>
        <Heading value="lg"  As="h3" Size="small"/>
        <Heading value="md"  As="h3" Size="small"/>
        <Heading value="sm"  As="h4" Size="small"/>
        <Heading value="xs"  As="h4" Size="small"/>
      </div>
  )
}
