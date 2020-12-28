import { formatDate } from "@angular/common";

export class FixturesService {

  fixtures = [
    {
      round: 'Round 1',

      matches: [
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        }
      ]
    },
    {
      round: 'Round 2',
      matches: [
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        },
        {
          date: this.formattedDate(),
          match: 'PK Dart Vaders - PK Dart Vaders',
          result: '0-0'
        }
      ]
    }
  ]

  getFixtures() {
    return this.fixtures.slice();
  }

  formattedDate() {
    var time = new Date();
    var day = time.getDay();
    var month = time.getMonth();
    var year = time.getFullYear();

    return day + '-' + month + '-' + year;
  }
}
