import { NavbarComponent } from './navbar.component';

export default {
  title: 'NavbarComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: NavbarComponent,
  props: {
    navElements: [
      { routerLink: '/category', name: 'category', classes: 'bx bx-layer' },
      { routerLink: '/profile', name: 'profile', classes: 'bx bx-user' },
      { routerLink: '/shopping-bag', name: 'shopping bag', classes: 'bx bx-shopping-bag' },
      { routerLink: '/favorites', name: 'favorites', classes: 'bx bx-heart' },
      { routerLink: '/settings', name: 'settings', classes: 'bx bx-abacus' }
    ],
    title: 'Customify',
    colors: {
      mainColor: '#f7f6fb',
      mainColorLight: '#AFA5D9'
    }
  }
})
