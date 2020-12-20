export class SidebarService {

  menus = [
    {
      title: 'Dashboard',
      type: 'simple'
    },
    {
      title: 'League',
      type: 'dropdown',
      toggle: false,
      submenus: [
        {
          title: 'Fixtures'
        },
        {
          title: 'Table'
        },
        {
          title: 'States'
        }
      ]
    },
    {
      title: 'Masters',
      type: 'simple'
    },
    {
      title: 'Training',
      type: 'simple'
    },
    {
      title: 'Team',
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
      type: 'simple'
    }
  ]

  constructor() { }

  getMenuList() {
    return this.menus;
  }
}
