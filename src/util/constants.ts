import { Category, Service } from '../model/model'

const organisation: Category = { title: 'Organisation' }

const administration: Category = { title: 'Administration' }

const sonstiges: Category = { title: 'Sonstiges' }

export const categories: Category[] = [organisation, administration, sonstiges]

export const services: Service[] = [
  { title: 'Traefik', path: 'https://traefik.spacevulture.de', image: '/traefik.png', category: administration },
  { title: 'Nextcloud', path: 'https://nextcloud.spacevulture.de', image: '/nextcloud.png', category: organisation },
  { title: 'Tetris', path: 'https://tetris.spacevulture.de', image: '/tetris.png', category: sonstiges },
  { title: 'Jitsi', path: 'https://jitsi.spacevulture.de', image: '/jitsi.png', category: organisation },
  { title: 'WikiJs', path: 'https://wikijs.spacevulture.de', image: '/wikijs.png', category: organisation },
  { title: 'LinkAce', path: 'https://linkace.spacevulture.de', image: '/linkace.png', category: organisation },
  { title: 'BitWarden', path: 'https://bitwarden.spacevulture.de', image: '/bitwarden.png', category: organisation },
  { title: 'Grafana', path: 'https://grafana.spacevulture.de', image: '/grafana.png', category: administration },
]
