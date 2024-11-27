export default function () {
  return [
    { 
      q: 'I have a question. Who do I contact?',
      a: 'Text or call Wil at <a href="tel:' + process.env.WIL_PHONE + '">' + process.env.WIL_PHONE_FORMATTED+ '</a>.'
    },
    {
      q: 'When is the latest I can RSVP?',
      a: 'December 16.'
    },
    {
      q: 'What is the attire for the ceremony and receiption?',
      a: 'We ask that you wear cocktail party attire. The ceremony is—weather permitting—outdoors, so plan for a warming outer layer that you can later shed for an indoor reception, dinner, and dance.'
    },
    {
      q: 'Will food be provided?',
      a: 'In completing your RSVP, you should be asked to select an entree and specify any relevant dietary restrictions. All options including kids’ meals are vegetarian, and the eggplant can be easily modified for vegans. Lastly, we provide extensive complementary wine and beer options.'
    },
    {
      q: 'Where do you recommend staying?',
      a: 'There’s more to do in Austin, but if staying in Georgetown, I suggest the Sheraton. We don’t have block rates nearby.'
    },
    {
      q: 'Is the ceremony and receiption child-friendly?',
      a: 'Yes! We love kids and welcome them. We aren’t planning for child entertainment; however, we have kids’ meals and look forward to them joining us on the dance floor.'
    },
    {
      q: 'Why are there shuttles to the ceremony?',
      a: 'The ceremony is nearby, but parking is very limited. Please make sure to arrive on time to make one of the shuttles.'
    },
    {
      q: 'What COVID precautions are in place?',
      a: 'Optional masks will be provided for the ceremony and reception. Additionally, the ceremony is outdoors, and the receiption will offer open-air spaces.'
    }
  ]
}
