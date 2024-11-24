export default function () {
  
  const meta = {
    lang: 'en',
    url: 'https://darienandwil.com',
    title: {
      base: 'Darien & Wil',
      separator: ' | '
    }
  }

  const info = {
    ceremonyDate: {
      string: '01.11.25',
      html: '<span class="text--secondary">0</span><span class="text--primary">1</span><span class="text--secondary">.</span><span class="text--primary">11</span><span class="text--secondary">.</span><span class="text--primary">25</span>'
    },
    receptionAddress: '445 E. Morrow St, Georgetown, Texas',
    program: [
      {
        id: 'bach',
        date: 'Friday, January 10',
        time: '4:00 pm',
        title: 'Bachelor(ette) Party',
        detail: 'Call Simon',
        TODO: 'Simon phone number in env var',
        detailLink: 'tel'
      },
      {
        id: 'rehearsal',
        date: 'Friday, January 10',
        time: '4:00 - 5:00 pm',
        title: 'Rehearsal',
        detail: '643 River Bluff Circle, Georgetown',
        detailLink: ''
      },
      {
        id: 'cocktail',
        date: 'Friday, January 10',
        time: '5:30 pm - 9:00 pm',
        title: 'Cocktails',
        detail: '200 Cimarron Hills Trail W., Georgetown',
        detailLink: ''
      },
      {
        id: 'early',
        date: 'Saturday, June 11',
        time: '3:00 pm',
        title: 'Early arrival at the ceremony',
        detail: '643 River Bluff Circle, Georgetown',
        detailLink: ''
      },
      {
        id: 'ceremonyArrival',
        date: 'Saturday, June 11',
        time: '3:15 - 3:45 pm',
        title: 'Arrive for a shuttle to the ceremony',
        detail: '445 E. Morrow St., Georgetown',
        detailLink: ''
      },
      {
        id: 'ceremony',
        date: 'Saturday, June 11',
        time: '4:00 - 5:00 pm',
        title: 'Ceremony'
      },
      {
        id: 'photos',
        date: 'Saturday, June 11',
        time: '5:00 - 5:45 pm',
        title: 'Photos'
      },
      {
        id: 'cocktailHour',
        date: 'Saturday, June 11',
        time: '5:00 - 6:00 pm',
        title: 'Cocktail hour'
      },
      {
        id: 'dinner',
        date: 'Saturday, June 11',
        time: '6:00 - 9:45 pm',
        title: 'Dinner & dance'
      },
      {
        id: 'end',
        date: 'Saturday, June 11',
        time: '10:00 pm',
        title: 'Sendoff'
      }
    ]
  }

  return {
    ...meta,
    ...info
  }
}