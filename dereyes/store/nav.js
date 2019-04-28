export const state = () => ({
  open: false,
  links: [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Insta',
      link: 'https://www.instagram.com/dereyesdesign/'
    }
  ]
})

export const mutations = {
  toggle(state) {
    state.open = !state.open
  }
}
