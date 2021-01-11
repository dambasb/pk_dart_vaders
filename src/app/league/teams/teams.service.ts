export class TeamsService {

  teams = [
    {
      id: 1,
      name: 'PK Dart Vaders'
    },
    {
      id: 3,
      name: 'PK Dart Vaders'
    },
    {
      id: 4,
      name: 'PK Dart Vaders'
    },
    {
      id: 5,
      name: 'PK Dart Vaders'
    }
  ];

  getTeams() {
    return this.teams.slice();
  }
}
