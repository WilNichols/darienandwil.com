export default function () {
  const strings = {
    formTitle: 'Great! Let’s fill in a few details.',
    formSubtitle: 'Great! Your party has %num% seat%plu%.',
    yourFormTitle: 'Your RSVP',
    othersFormsTitle: 'The rest of your party',
    yourNamePlaceholder: 'Name',
    guestPlaceholder: 'Your guest',
    attendingBool: 'Attending on January 11',
    mealsTitle: 'Meal choice',
    infoFormTitle: 'Group information',
    cocktailBool: 'We plan on attending the January 10 cocktail party.',
    contactInputTitle: 'Contact method',
    contactInputPlaceholder: 'In the case of a change to our program, what’s a good phone number or email address to contact?',
    otherInputTitle: 'Other details',
    otherInputPlaceholder: 'Are there other details we should be aware of? For example, an attendee’s dietary restrictions.',
    eggplantMealLong: 'Roasted eggplant with truffle glaze, roasted chickpeas',
    eggplantMealShort: 'Eggplant',
    pastaMealLong: 'Pasta primavera with a creamy pesto sauce',
    pastaMealShort: 'Pasta',
    kidsMealLong: 'Vegetarian corn dog and  mac & cheese',
    kidsMealShort: 'Kids’ meal',
    cocktails: 'Cocktails',
    contact: 'contact',
    other: 'other',
    count: 'count',
    attendeeSummary: 'Attendees & meals',
    confirmTitle: 'Let’s confirm.',
    confirmSubtitle: 'Does everything look right?'
  }
  
  const meals = {
    adult: [
      {
        long: strings.eggplantMealLong,
        short: strings.eggplantMealShort
      },
      {
        long: strings.pastaMealLong,
        short: strings.pastaMealShort
      }
    ],
    kids: {
      long: strings.kidsMealLong,
      short: strings.kidsMealShort
    }
  }

  return {
    ...strings, 
    ...meals
  }  
}