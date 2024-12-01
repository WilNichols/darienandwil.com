export default function () {
  const strings = {
    formTitle: 'Great! Who’s coming?',
    formSubtitle: 'Your party has %num% seat%plu%.',
    yourFormTitle: 'Your RSVP',
    othersFormsTitle: 'The rest of your party',
    yourNamePlaceholder: 'Name',
    guestPlaceholder: 'Guest',
    attendingBool: 'Attending on January 11',
    mealsTitle: 'Meal choice',
    eggplantMealLong: 'Roasted eggplant with truffle glaze, roasted chickpeas',
    eggplantMealShort: 'Eggplant',
    pastaMealLong: 'Pasta primavera with a creamy pesto sauce',
    pastaMealShort: 'Pasta',
    kidsMealLong: 'Vegetarian corn dog and  mac & cheese',
    kidsMealShort: 'Kids’ meal',
  }
  
  const meals = {
    adult: [
      {
        long: strings.pastaMealLong,
        short: strings.pastaMealShort
      },
      {
        long: strings.eggplantMealLong,
        short: strings.eggplantMealShort
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