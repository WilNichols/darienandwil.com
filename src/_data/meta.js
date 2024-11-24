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
      html: '<span class="text--tinted--tertiary ">0</span><span class="text--tinted--primary">1</span><span class="text--tinted--tertiary ">.</span><span class="text--tinted--primary">11</span><span class="text--tinted--tertiary ">.</span><span class="text--tinted--primary">25</span>'
    },
    receptionAddress: '445 E. Morrow St, Georgetown, Texas',
    program: [
      {
        id: 'bach',
        title: 'Bachelor(ette) Party',
        details: [
          {
            title: 'Date',
            value: 'Friday, January 3'
          },
          {
            title: 'Time',
            value: '4:00 pm'
          },
          {
            title: 'Location',
            value: 'Call <a href="tel:' + process.env.SIMON_PHONE + '">Simon</a>'
          }
        ]
      },
      {
        id: 'rehearsal',
        title: 'Rehearsal',
        details: [
          {
            title: 'Date',
            value: 'Friday, January 10'
          },
          {
            title: 'Time',
            value: '4:00 - 5:00 pm'
          },
          {
            title: 'Location',
            value: '643 River Bluff Circle',
            links: [
              {
                label: 'Google Maps',
                src: 'https://maps.app.goo.gl/NE8AbGYFxjTQwzXQ8'
              },
              {
                label: 'Apple Maps',
                src: 'https://maps.apple.com/?address=643%20River%20Bluff%20Cir,%20Georgetown,%20TX%20%2078626,%20United%20States&ll=30.655601,-97.657360&q=643%20River%20Bluff%20Cir'
              }
            ]
          }
        ]
      },
      {
        id: 'cocktail',
        title: 'Cocktails',
        details: [
          {
            title: 'Date',
            value: 'Friday, January 10'
          },
          {
            title: 'Time',
            value: '5:30 - 9:00 pm'
          },
          {
            title: 'Location',
            value: '200 Cimarron Hills Trail W.',
            links: [
              {
                label: 'Google Maps',
                src: 'https://maps.app.goo.gl/FNQ6WvVVUoWxzXhn8'
              },
              {
                label: 'Apple Maps',
                src: 'https://maps.apple.com/?address=200%20W%20Cimarron%20Hills%20Trail,%20Georgetown,%20TX%20%2078628,%20United%20States&ll=30.639127,-97.794033&q=200%20W%20Cimarron%20Hills%20Trail'
              }
            ]
          }
        ]
      },
      {
        id: 'early',
        title: 'Early arrival at the ceremony. Only the wedding party parks at this address.',
        details: [
          {
            title: 'Date',
            value: 'Saturday, January 11'
          },
          {
            title: 'Time',
            value: '5:30 - 9:00 pm'
          },
          {
            title: 'Location',
            value: '643 River Bluff Circle',
            links: [
              {
                label: 'Google Maps',
                src: 'https://maps.app.goo.gl/NE8AbGYFxjTQwzXQ8'
              },
              {
                label: 'Apple Maps',
                src: 'https://maps.apple.com/?address=643%20River%20Bluff%20Cir,%20Georgetown,%20TX%20%2078626,%20United%20States&ll=30.655601,-97.657360&q=643%20River%20Bluff%20Cir'
              }
            ]
          }
        ]
      },
      {
        id: 'ceremonyArrival',
        title: 'Arrive for a shuttle to the ceremony',
        details: [
          {
            title: 'Date',
            value: 'Saturday, January 11'
          },
          {
            title: 'Time',
            value: '3:15 - 3:45 pm'
          },
          {
            title: 'Location',
            value: '445 E. Morrow St.',
            links: [
              {
                label: 'Google Maps',
                src: 'https://maps.app.goo.gl/YesLBvCYRGWYA8ba6'
              },
              {
                label: 'Apple Maps',
                src: 'https://maps.apple.com/?address=445%20E%20Morrow%20St,%20Georgetown,%20TX%20%2078626,%20United%20States&ll=30.652549,-97.668932&q=445%20E%20Morrow%20St'
              }
            ]
          }
        ]
      },
      {
        id: 'ceremony',
        title: 'Ceremony',
        details: [
          {
            title: 'Date',
            value: 'Saturday, January 11'
          },
          {
            title: 'Time',
            value: '4:00 - 5:00 pm'
          }
        ]
      },
      {
        id: 'photos',
        title: 'Photos',
        details: [
          {
            title: 'Date',
            value: 'Saturday, January 11'
          },
          {
            title: 'Time',
            value: '5:00 - 5:45 pm'
          }
        ]
      },
      {
        id: 'cocktailHour',
        title: 'Cocktail hour',
        details: [
          {
            title: 'Date',
            value: 'Saturday, January 11'
          },
          {
            title: 'Time',
            value: '5:00 - 6:00 pm',
          }
        ]
      },
      {
        id: 'dinner',
        title: 'Dinner & dance',
        details: [
          {
            title: 'Date',
            value: 'Saturday, January 11'
          },
          {
            title: 'Time',
            value: '6:00 - 9:45 pm',
          }
        ]
      },
      {
        id: 'end',
        title: 'Sendoff',
        details: [
          {
            title: 'Date',
            value: 'Saturday, January 11'
          },
          {
            title: 'Time',
            value: '10:00 pm',
          }
        ]
      }
    ]
  }

  return {
    ...meta,
    ...info
  }
}