const imageData = {
  src: {
    fileName: 'team1/mike-newbry-Xbls2Q81IdE-unsplash_n4oprr.jpg',
    cloudName: 'makaira-hackathon',
    resourceType: 'image',
  },
  alt: '',
}

const buttonData = {
  text: "Click mich",
  link: 'https://google.de',
  newTab: false
}


export default [
  {
    name: 'Default',
    props: {
      title: 'Test Title',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      image: { ...imageData },
      button: { ...buttonData }
    },
  },

  {
    name: 'without a Link',
    props: {
      title: 'Test Title',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      image: { ...imageData },
      button: null
    },
  },

  {
    name: 'without a description',
    props: {
      title: 'Test Title',
      description: '',
      image: { ...imageData },
      button: { ...buttonData }
    },
  },
]