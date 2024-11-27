export default function () {
  return [
    {
      id: 'bach',
      permission: 'bach',
      title: 'Bachelor(ette) Party',
      details: [
        {
          title: 'Date',
          value: 'Friday <strong class="text--tinted--primary">January 3</strong> - Sunday <strong class="text--tinted--primary">January 5</strong>'
        },
        {
          title: 'Details',
          value: 'Text <a href="tel:' + process.env.SIMON_PHONE + '">Simon</a> for more information.'
        }
      ]
    },
    {
      id: 'rehearsal',
      permission: 'rehearsal',
      title: 'Rehearsal',
      details: [
        {
          title: 'Date',
          value: 'Friday <strong class="text--tinted--primary">January 10</strong>'
        },
        {
          title: 'Time',
          value: '4:00 - 5:00 pm'
        },
        {
          title: 'Details',
          value: '643 River Bluff Cir.',
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
      permission: 'cocktail',
      title: 'Cocktails',
      details: [
        {
          title: 'Date',
          value: 'Friday <strong class="text--tinted--primary">January 10</strong>'
        },
        {
          title: 'Time',
          value: '5:30 - 9:00 pm'
        },
        {
          title: 'Details',
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
      permission: 'early',
      title: 'Early arrival',
      details: [
        {
          title: 'Date',
          value: 'Saturday <strong class="text--tinted--primary">January 11</strong>'
        },
        {
          title: 'Time',
          value: '3:00 pm'
        },
        {
          title: 'Details',
          value: '643 River Bluff Cir.',
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
        },
        {
          title: 'Extra',
          value: 'This address is only for the wedding party and their guests. Others will be shuttled from the community center.'
        }
      ]
    },
    {
      id: 'ceremonyArrival',
      permission: 'ceremony',
      title: 'Shuttles to the ceremony',
      details: [
        {
          title: 'Date',
          value: 'Saturday <strong class="text--tinted--primary">January 11</strong>'
        },
        {
          title: 'Time',
          value: '3:15 - 3:45 pm'
        },
        {
          title: 'Details',
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
      permission: 'ceremony',
      title: 'Ceremony',
      details: [
        {
          title: 'Date',
          value: 'Saturday <strong class="text--tinted--primary">January 11</strong>'
        },
        {
          title: 'Time',
          value: '4:00 - 5:00 pm'
        }
      ]
    },
    {
      id: 'photos',
      permission: 'photos',
      title: 'Photos',
      details: [
        {
          title: 'Date',
          value: 'Saturday <strong class="text--tinted--primary">January 11</strong>'
        },
        {
          title: 'Time',
          value: '5:00 - 5:45 pm'
        }
      ]
    },
    {
      id: 'cocktailHour',
      permission: 'ceremony',
      title: 'Return shuttle & cocktail hour',
      details: [
        {
          title: 'Date',
          value: 'Saturday <strong class="text--tinted--primary">January 11</strong>'
        },
        {
          title: 'Time',
          value: '5:00 - 6:00 pm',
        }
      ]
    },
    {
      id: 'dinner',
      permission: 'ceremony',
      title: 'Dinner & dance',
      details: [
        {
          title: 'Date',
          value: 'Saturday <strong class="text--tinted--primary">January 11</strong>'
        },
        {
          title: 'Time',
          value: '6:00 - 9:45 pm',
        }
      ]
    },
    {
      id: 'end',
      permission: 'ceremony',
      title: 'Sendoff',
      details: [
        {
          title: 'Date',
          value: 'Saturday <strong class="text--tinted--primary">January 11</strong>'
        },
        {
          title: 'Time',
          value: '10:00 pm',
        }
      ]
    }
  ]
}
