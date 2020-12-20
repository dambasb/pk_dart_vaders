export class SidebarService {

  menus = [
    {
      title: 'Dashboard',
      route: 'dashboard',
      type: 'simple'
    },
    {
      title: 'League',
      route: 'league',
      type: 'dropdown',
      toggle: false,
      submenus: [
        {
          title: 'Fixtures',
          route: 'league/fixtures'
        },
        {
          title: 'Table',
          route: 'league/table'
        },
        {
          title: 'States',
          route: 'league/states'
        }
      ]
    },
    {
      title: 'Master',
      route: 'master',
      type: 'simple'
    },
    {
      title: 'Training',
      route: 'training',
      type: 'simple'
    },
    {
      title: 'Team',
      route: 'team',
      type: 'dropdown',
      toggle: false,
      submenus: [
        {
          title: 'Players'
        },
        {
          title: 'Stats'
        }
      ]
    },
    {
      title: 'Admin',
      route: 'admin',
      type: 'simple'
    }
  ]

  constructor() { }

  getMenuList() {
    return this.menus;
  }
}
