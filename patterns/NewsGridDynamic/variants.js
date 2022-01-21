const news = [
  {
    featuredImage:
      'https://res.cloudinary.com/makaira-hackathon/image/upload/f_auto//v1592420992/team1/mike-newbry-Xbls2Q81IdE-unsplash_n4oprr.jpg',
    title: 'New Gin',
    excerpt:
      'We are proud to present our new Gin, sourced from the finest mountains',
    link: '',
  },
  {
    featuredImage:
      'https://res.cloudinary.com/makaira-hackathon/image/upload/f_auto//v1592420992/team1/maeva-vigier-T96E-eZldWs-unsplash_xlb4ar.jpg',
    title: 'New Wine',
    excerpt:
      'We are proud to present our new wine, sourced from the finest tundras',
    link: '',
  },
  {
    featuredImage:
      'https://res.cloudinary.com/makaira-hackathon/image/upload/f_auto//v1592420992/team1/greg-rosenke-UH8RE4UBQjk-unsplash_wahkgs.jpg',
    title: 'New Cocktails',
    excerpt:
      'We are proud to present our new cocktails, sourced from the finest siberian woods',
    link: '',
  },
  {
    featuredImage:
      'https://res.cloudinary.com/makaira-hackathon/image/upload/f_auto//v1592420992/team1/wil-stewart-T26KCgCPsCI-unsplash_h1uo2g.jpg',
    title: 'New Champagne',
    excerpt:
      'We are proud to present our new champagne, sourced from the finest starry nights',
    link: '',
  },
]

export default [
  {
    name: 'Default - No title',
    props: {
      news,
    },
  },
  {
    name: 'With title',
    props: {
      news,
      title: 'News',
    },
  },
]
