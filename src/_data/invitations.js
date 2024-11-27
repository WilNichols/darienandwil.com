export default function () {
  
  const invitations = [
  {
    name: 'Aimee & Jeremy Abbott',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Aimee Abbott'
      }, 
      {
        name: 'Jeremy Abbott'
      }, 
      {
        name: 'Delta Abbott'
      }, 
      {
        name: 'Beaux Abbott'
      },
      {
        name: 'Drake Abbott'
      }
    ],
    code: 'mf0vc'
  },
  {
    name: 'Amy Roberts & Adrian Delia',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Amy Roberts'
      }, 
      {
        name: 'Adrian Delia'
      }
    ],
    code: '9vx8y'
  },
  {
    name: 'Thomas & Lindsey Hutchings',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Thomas Hutchings',
      }, 
      {
        name: 'Lindsey Hutchings'
      }
    ],
    code: 'yh1fs'
  },
  {
    name: 'Teresa & Jeff Miller',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Teresa Miller'
      }, 
      {
        name: 'Jeff Miller'
      }
    ],
    code: 'rvrmu'
  },
  {
    name: 'Sloan Arno',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Sloan Arno',
        diet: ['vegan']
      }, 
      {}
    ],
    code: '2zlnj'
  },
  {
    name: 'Matthew Leary & Anna Capparella',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Matthew Leary'
      },
      {
        name: 'Anna Capparella'
      }
    ],
    code: 'zlzj4'
  },
  {
    name: 'John & Karen Leary',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Karen Leary'
      }, 
      {
        name: 'John Leary'
      },
      {
        name: 'Elaine Leary'
      }
    ],
    code: 'jgd3o'
  },
  {
    name: 'Jane Estes & Eric Lloyd',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jane Estes'
      }, 
      {
        name: 'Eric Lloyd'
      }
    ],
    code: 'mtimd'
  },
  {
    name: 'Joe & Katie Burke',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Joe Burke'
      }, 
      {
        name: 'Katie Burke'
      }
    ],
    code: '2m804'
  },
  {
    name: 'Rob & Terri Faulkenberry',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Rob Faulkenberry'
      }, 
      {
        name: 'Terri Faulkenberry'
      }
    ],
    code: '7pq5p'
  },
  {
    name: 'Adam & Morgan Bailey',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Adam Bailey'
      }, 
      {
        name: 'Morgan Bailey'
      }
    ],
    code: 'lx9ol'
  },
  {
    name: 'Natalie Rulon & Daniel Lee',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Natalie Rulon'
      }, 
      {
        name: 'Daniel Lee'
      }
    ],
    code: 'lgu9h'
  },
  {
    name: 'Susan Culotta',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Susan Culotta'
      }, 
      {
        name: 'Ethan Culotta'
      },
      {
        name: 'Elijah Culotta'
      },
      {},
    ],
    code: '8j83x'
  },
  {
    name: 'Wes & Julie Nichols',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Wes Nichols'
      }, 
      {
        name: 'Julie Nichols'
      }
    ],
    code: '57fq9'
  },
  {
    name: 'Joe Price & Melissa Paxton',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Joe Price'
      }, 
      {
        name: 'Melissa Paxton'
      }
    ],
    code: 'pcoe3'
  },
  {
    name: 'Raphael Varieras & Lora Menter',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Raphael Varieras'
      }, 
      {
        name: 'Lora Menter',
        diet: ['gf']
      }
    ],
    code: 'goybb'
  },
  {
    name: 'Sandi & Frank Nizzi',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Sandi Nizzi'
      }, 
      {
        name: 'Frank Nizzi',
      }
    ],
    code: 'vr3pe'
  },
  {
    name: 'Cece Rulon',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Cece Rulon'
      }, 
      {}
    ],
    code: '9rz8s'
  },
  {
    name: 'Eileen & John Kuen',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Eileen Kuen'
      }, 
      {
        name: 'John Kuen',
        diet: ['gf', 'veg']
      }
    ],
    code: 'uu34j'
  },
  {
    name: 'Sriram & Aparna Vishwanath',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Sriram Vishwanath'
      }, 
      {
        name: 'Aparna Vishwanath'
      }
    ],
    code: 'eos97'
  },
  {
    name: 'Fallon Scheibel & Bela Palacios',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Fallon Scheibel'
      }, 
      {
        name: 'Bela Palacios'
      }
    ],
    code: '5k694'
  },
  {
    name: 'Tory Nunn',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Tory Nunn'
      }, 
      {}
    ],
    code: 'm60a4'
  },
  {
    name: 'Dean Shafer',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Dean Shafer'
      }, 
      {}
    ],
    code: 'o8nh8'
  },
  {
    name: 'Glen Ochs',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Glen Ochs'
      }, 
      {}
    ],
    code: '5ssck'
  },
  {
    name: 'Kelly Kraus',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Kelly Kraus'
      }, 
      {}
    ],
    code: 'y92o1'
  },
  {
    name: 'Matt & Tiffany McDaniel',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Matt McDaniel'
      }, 
      {
        name: 'Tiffany McDaniel'
      }
    ],
    code: 'iouc9'
  },
  {
    name: 'Lauren Leary',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Lauren Leary'
      }, 
      {}
    ],
    code: 'lxy7k'
  },
  {
    name: 'Riley & Chelsey Sheehan',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Riley Sheehan'
      }, 
      {
        name: 'Chelsey Sheehan'
      }, 
      {
        name: 'Everett Sheehan',
        kid: true
      }
    ],
    code: 'y27m6'
  },
  {
    name: 'Laura & Tom Rulon',
    permissions: ['rehearsal', 'cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Laura Rulon'
      }, 
      {
        name: 'Tom Rulon'
      }
    ],
    code: 'd4n7y'
  },
  {
    name: 'Jim & Susan O’Connor',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jim O’Connor'
      }, 
      {
        name: 'Susan O’Connor'
      }
    ],
    code: 'q8zp6'
  },
  {
    name: 'Nayeli Cortina & Eugene Mymrin',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Nayeli Cortina'
      }, 
      {
        name: 'Eugene Mymrin'
      }, 
      {
        name: 'Natalie',
        meal: 'none'
      }
    ],
    code: 'ua5g2'
  },
  {
    name: 'Jenna Snodgrass & Abhi Ilindra',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Jenna Snodgrass'
      }, 
      {
        name: 'Abhi Ilindra'
      }
    ],
    code: '9v4ed'
  },
  {
    name: 'Marlen Kraemer',
    permissions: ['rehearsal', 'cocktail', 'ceremony'],
    party: [
      {
        name: 'Marlen Kraemer'
      }, 
      {}
    ],
    code: 'nveww'
  },
  {
    name: 'Elaine Higgins',
    permissions: ['rehearsal', 'cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Elaine Higgins'
      },
      {}
    ],
    code: 'c3yq4'
  },
  {
    name: 'Brandon Walsh',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Brandon Walsh'
      },
      {}
    ],
    code: 'ugog6'
  },
  {
    name: 'Hope Higgins',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Hope Higgins'
      },
      {
        name: '',
      }
    ],
    code: 'zemme'
  },
  {
    name: 'Kim & Chuck Corliss',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Kim Corliss'
      },
      {
        name: 'Chuck Corliss',
      }
    ],
    code: '02gr6'
  },
  {
    name: 'Daniel In',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Daniel In'
      },
      {}
    ],
    code: 'nsgi8'
  },
  {
    name: 'Erick Hernandez',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Erick Hernandez'
      },
      {}
    ],
    code: '5f26p'
  },
  {
    name: 'Tommy Nunn',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Tommy Nunn'
      },
      {}
    ],
    code: 'uq9x2'
  },
  {
    name: 'John & Maureen Schuster',
    permissions: ['ceremony'],
    party: [
      {
        name: 'John Schuster'
      },
      {
        name: 'Maureen Schuster'
      }
    ],
    code: 'w0tp3'
  },
  {
    name: 'Ell Bogat',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Ell Bogat'
      },
      {}
    ],
    code: 'i969w'
  },
  {
    name: 'Kimi Bryson-Reilly & John Henry Fahey Reilly',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Kimi Bryson-Reilly'
      },
      {
        name: 'John Henry Fahey Reilly'
      }
    ],
    code: 'jx59g'
  },
  {
    name: 'Alex Nichols & Meredith Dixon',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Alex Nichols'
      },
      {
        name: 'Meredith Dixon'
      }
    ],
    code: '0bfly'
  },
  {
    name: 'Shirley Stumpf',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Shirley Stumpf'
      },
      {}
    ],
    code: '45uwz'
  },
  {
    name: 'Barbara & Bruce Murray',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Barbara Murray'
      },
      {
        name: 'Bruce Murray'
      }
    ],
    code: 'd6p67'
  },
  {
    name: 'Ale Garcia Buenaventura & Luiz Gomez',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Ale Garcia Buenaventura'
      },
      {
        name: 'Luiz Gomez'
      }
    ],
    code: 'h6mof'
  },
  {
    name: 'Pam & Tom Burton',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Pam Burton',
        diet: ['gf']
      },
      {
        name: 'Tom Burton'
      }
    ],
    code: 'w43ob'
  },
  {
    name: 'Tyler Comfort',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Tyler Comfort'
      },
      {}
    ],
    code: 'dt65x'
  },
  {
    name: 'Haley & Sean Kenney',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Haley Kenney'
      },
      {
        name: 'Sean Kenney'
      },
      {
        name: 'Calvin Kenney'
      }
    ],
    code: 'yci7m'
  },
  {
    name: 'Natalie Ready',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Natalie Ready'
      },
      {}
    ],
    code: 'e5496'
  },
  {
    name: 'Brett Williams & Family',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Brett Williams'
      },
      {},
      {},
      {
        name: 'Gayle Mayfield'
      },
      {}
    ],
    code: 'ikqy2'
  },
  {
    name: 'Casey Higgins & Roel Pedraza',
    permissions: ['rehearsal', 'cocktails', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Casey Higgins'
      },
      {
        name: 'Roel Pedraza'
      },
      {
        name: 'Rae Pedraza'
      }
    ],
    code: 'skcub'
  },
  {
    name: 'Jill Thompson',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jill Thompson'
      },
      {},
    ],
    code: 'q4bdu'
  },
  {
    name: 'Elaine Leary',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Elaine Leary'
      },
    ],
    code: '37hi3'
  },
  {
    name: 'Angela Cerrillo',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Angela Cerrillo'
      },
      {}
    ],
    code: '78i1m'
  },
  {
    name: 'Roman & Izabella Piltser',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Roman Piltser'
      },
      {
        name: 'Izabella Piltser'
      }
    ],
    code: 's58fu'
  },
  {
    name: 'Alex Ligget & Aster Bennet',
    permissions: ['bach', 'ceremony'],
    party: [
      {
        name: 'Alex Ligget'
      },
      {
        name: 'Aster Bennet'
      }
    ],
    code: 'i75gs'
  },
  {
    name: 'Jackie & Bill Dorfner',
    permissions: ['rehearsal', 'cocktail', 'ceremony'],
    party: [
      {
        name: 'Jackie Dorfner'
      },
      {
        name: 'Bill Dorfner'
      }
    ],
    code: 'linsx'
  },
  {
    name: 'Bill and Janet Grubbs',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Bill Grubbs'
      },
      {
        name: 'Janet Grubbs'
      }
    ],
    code: 'h8swx'
  },
  {
    name: 'James Schuster',
    permissions: ['ceremony'],
    party: [
      {
        name: 'James Schuster'
      }
    ],
    code: '6pfo9'
  },
  {
    name: 'Marie Perez',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Marie Perez'
      },
      {}
    ],
    code: 'wk2qj'
  },
  {
    name: 'Jackie & Ryan Beck',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jackie Beck'
      },
      {
        name: 'Ryan Beck'
      }
    ],
    code: 'yptv6'
  },
  {
    name: 'Dawn & Keith Lawrence',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Dawn Lawrence'
      },
      {
        name: 'Keith Lawrence'
      }
    ],
    code: 'xc6tc'
  },
  {
    name: 'Beverly Krayeski',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Beverly Krayeski'
      },
      {}
    ],
    code: '6djcj'
  },
  {
    name: 'Meg Thompson & Ellen Fanning',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Meg Thompson'
      },
      {
        name: 'Ellen Fanning'
      }
    ],
    code: 'xn57l'
  },
  {
    name: 'Mike & Peggy Higgins',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Mike Higgins'
      },
      {
        name: 'Peggy Higgins'
      }
    ],
    code: 'hcf60'
  },
  {
    name: 'Allan Porter',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Allan Porter'
      },
      {}
    ],
    code: '4up35'
  },
  {
    name: 'Juliana Kadiasi & Mike Temple',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Juliana Kadiasi'
      },
      {
        name: 'Mike Temple'
      }
    ],
    code: '1ww8h'
  },
  {
    name: 'Jeanne & Robert Guy',
    permissions: ['rehearsal', 'cocktail', 'ceremony'],
    party: [
      {
        name: 'Jeanne Guy'
      },
      {
        name: 'Robert Guy'
      }
    ],
    code: 'zc2kv'
  },
  {
    name: 'Craig & Judy Nunn',
    permissions: ['rehearsal', 'cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Craig Nunn'
      },
      {
        name: 'Judy Nunn'
      },
      {
        name: 'Helen Nunn'
      },
      {
        name: 'Helen’s +1'
      }
    ],
    code: 'xkpbl'
  },
  {
    name: 'Karalei Nunn & Tom Nichols',
    permissions: ['rehearsal', 'cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Karalei Nunn',
        allergens: 'soy'
      },
      {
        name: 'Tom Nichols'
      }
    ],
    code: 'c5d59'
  },
  {
    name: 'Eleanor & Joe Kent',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Eleanor Kent'
      },
      {
        name: 'Joe Kent'
      }
    ],
    code: 'fjxrh'
  },
  {
    name: 'Kailey Andrew',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Kailey Andrew'
      },
      {}
    ],
    code: 'qw6ld'
  },
  {
    name: 'Ada Forbes & Maya Martinez',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Ada Forbes'
      },
      {
        name: 'Maya Martinez'
      }
    ],
    code: 'v7hyy'
  },
  {
    name: 'Heena Momaya',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Heena Momaya'
      },
      {}
    ],
    code: 'iec3a'
  },
  {
    name: 'Bill & Kim Moore',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Bill Moore'
      },
      {
        name: 'Kim Moore'
      }
    ],
    code: '335tc'
  },
  {
    name: 'Shmuel Zlotnikov',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Shmuel Zlotnikov'
      },
      {}
    ],
    code: '53ect'
  },
  {
    name: 'Ginny & Tommy Elia',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Ginny Elia'
      },
      {},
      {
        name: 'Tommy Elia'
      },
      {}
    ],
    code: 'u10me'
  },
  {
    name: 'Ricky Elia & Victoria Torres',
    permissions: ['ceremony'],
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Ricky Elia'
      },
      {
        name: 'Victoria Torres'
      }
    ],
    code: '3nwhr'
  },
  {
    name: 'Estevan Balderrama & Coyote Balderrama-Shook',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Estevan Balderrama'
      },
      {
        name: 'Coyote Balderrama-Shook'
      }
    ],
    code: '4ao4t'
  },
  {
    name: 'Mina Shekarchi & Ben Byerly',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Mina Shekarchi'
      },
      {
        name: 'Ben Byerly'
      }
    ],
    code: 'adngh'
  },
  {
    name: 'Debra & Erik Olesen',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Debra Olesen'
      },
      {
        name: 'Erik Olesen'
      }
    ],
    code: 'jgd31'
  },
  {
    name: 'The Momaya Family',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Rekhaj Momaya'
      },
      {
        name: 'Jayshri Momaya'
      },
      {
        name: 'Laxmi Momaya'
      },
      {
        name: 'Ami Momaya'
      }
    ],
    code: 'd8wuc'
  },
  {
    name: 'Helen Nunn',
    permissions: ['rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Helen Nunn'
      },
      {}
    ],
    code: 'b515f'
  },
  {
    name: 'Simon Nichols & Ariana Cruz',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Simon Nichols'
      },
      {
        name: 'Ariana Cruz'
      }
    ],
    code: 't99sg'
  },
  {
    name: 'Sarah Hartle',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Sarah Hartle'
      },
      {}
    ],
    code: '1g8p4'
  },
  {
    name: 'Jim & Nancy Pickering',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jim Pickering'
      },
      {
        namd: 'Nancy Pickering'
      }
    ],
    code: 'e11np'
  },
  {
    name: 'Nancy Ott & Jim Viel',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Nancy Ott'
      },
      {
        name: 'Jim Viel'
      }
    ],
    code: 'psv59'
  },
  {
    name: 'Jim Rigby',
    permissions: ['rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Jim Rigby'
      }
    ],
    code: 'pgj8j'
  },
  {
    name: 'Jamie Holmes',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jamie Holmes'
      },
      {}
    ],
    code: '2plhn'
  },
  {
    name: 'Sam Valdez & Stephen Chan',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Sam Valdez'
      },
      {
        name: 'Stephen Chan'
      }
    ],
    code: 'v9okx'
  },
  {
    name: 'Gary Gehiere & Petrina Burkard',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Gary Gehiere'
      },
      {
        name: 'Petrina Burkard'
      },
      {
        name: 'Willy'
      },
      {
        name: 'Volker'
      }
    ],
    code: 'damth'
  },
  {
    name: 'Frederick & Janet Elia',
    permissions: ['cocktails', 'photos', 'ceremony'],
    party: [
      {
        name: 'Frederick Elia'
      },
      {
        name: 'Janet Elia'
      }
    ],
    code: 'g5ift'
  },
  {
    name: 'Donald Mason',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Donald Mason'
      },
      {}
    ],
    code: 'qywlt'
  },
  {
    name: 'Reef Love',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Reef Love'
      },
      {}
    ],
    code: 's5956'
  },
  {
    name: 'Alex & Irina Gavrilov',
    note: 'if unable to come, maybe the rehearsal',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Alex Gavrilov'
      },
      {
        name: 'Irina Gavrilov'
      }
    ],
    code: '5z1o4'
  },
  {
    name: 'Christel, Peter, & Matthew Crabbe',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Christel Crabbe'
      },
      {
        name: 'Peter Crabbe'
      },
      {
        name: 'Matthew Crabbe'
      }
    ],
    code: '6jowh'
  },
  {
    name: 'Alex & Camille Perez',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Alex Perez'
      },
      {
        name: 'Camille Perez'
      }
    ],
    code: '4hcgl'
  },
  {
    name: 'Allen & Lydia Tsai',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Allen Tsai'
      },
      {
        name: 'Lydia Tsai'
      }
    ],
    code: '0njue'
  },
  {
    name: 'Jerry Reardon',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jerry Reardon'
      },
      {}
    ],
    code: 'mysrc'
  },
  {
    name: 'Andie & Matt Hanson',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Andie Hanson'
      },
      {
        name: 'Matt Hanson'
      },
      {
        name: 'Griffin Love'
      },
      {
        name: 'Reef Love'
      },
      {
        name: 'Paisely Hicks'
      },
      {
        name: 'Lilly Hanson'
      }
    ],
    code: 'tmk19'
  },
  {
    name: 'Griffin Love',
    permissions: ['cocktail', 'photos', 'ceremony'],
    party: [
      {
        name: 'Griffin Love'
      }
    ],
    code: 'x3nzs'
  },
  {
    name: 'Brandi & Brian Cordell',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Brandi Cordell'
      },
      {
        name: 'Brian Cordell'
      }
    ],
    code: 'pzifl'
  },
  {
    name: 'Alex Bulla',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Alex Bulla'
      },
      {}
    ],
    code: 'h5dsp'
  },
  {
    name: 'Bruce & Heather Macfadyen',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Bruce Macfadyen'
      },
      {
        name: 'Heather Macfadyen'
      }
    ],
    code: 'mqd84'
  },
  {
    name: 'Sasha & Alex DiGregorio',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Sasha DiGregorio'
      },
      {
        name: 'Alex DiGregorio'
      },
      {
        kid: true
      }
    ],
    code: 'd96k6'
  },
  {
    name: 'Matt Petri',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Matt Petri'
      },
      {}
    ],
    code: 'g9vzl'
  },
  {
    name: 'Janie & Brent Farler',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Janie Farler'
      },
      {
        name: 'Brent Farler'
      }
    ],
    code: '9saj0'
  },
  {
    name: 'Chris Foote',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Chris Foote'
      },
      {}
    ],
    code: 'jjr3l'
  },
  {
    name: 'Laxmi & Adam Sheehan',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Laxmi Sheehan'
      },
      {
        name: 'Adam Sheehan'
      },
      {
        name: 'Riyan Sheehan',
        kid: true
      }
    ],
    code: 'vo84w'
  },
  {
    name: 'Kevin Anderson & Lena Long',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Kevin Anderson'
      },
      {
        name: 'Lena Long'
      }
    ],
    code: 'f4c9f'
  },
  {
    name: 'Chrissy & Frank Davol',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Chrissy Davol'
      },
      {
        name: 'Frank Davol'
      }
    ],
    code: 'efheq'
  },
  {
    name: 'Gayle Mayfield',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Gayle Mayfield'
      }
    ],
    code: 'exkmu'
  },
  {
    name: 'Peter Schuster',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Peter Schuster'
      }
    ],
    code: 'm7ymb'
  },
  {
    name: 'Bella Rulon',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Bella Rulon'
      },
      {}
    ],
    code: 'fkuxb'
  },
  {
    name: 'Jacqueline & Wesley Lay',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jacqueline Lay'
      },
      {
        name: 'Wesley Lay'
      }
    ],
    code: '9shsz'
  },
  {
    name: 'Matthew Kluchin',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Matthew Kluchin'
      },
      {}
    ],
    code: '3hccf'
  },
  {
    name: 'Tate Burke',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Tate Burke',
        allergens: 'strawberries'
      },
      {}
    ],
    code: 'txbn4'
  },
  {
    name: 'Judy Mayfield & Jack Thompson',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Judy Mayfield'
      },
      {
        name: 'Jack Thompson'
      }
    ],
    code: '5mfz0'
  },
  {
    name: 'Everley Estes-Lloyd',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Everyley Estes-Lloyd'
      },
      {}
    ],
    code: 'vlq2c'
  },
  {
    name: 'Kira Daniel',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Kira Daniel'
      },
      {
      }
    ],
    code: 'djwum'
  },
  {
    name: 'Ryan & Anna Higgins',
    permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    party: [
      {
        name: 'Rya Higgins'
      },
      {
        name: 'Anna Higgins'
      }
    ],
    code: 'knu65'
  },
  {
    name: 'Dan Meyer',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Dan Meyer'
      }
    ],
    code: '070oo'
  },
  {
    name: 'Dasawn Gray',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Dasawn Gray'
      },
      {}
    ],
    code: 'fpmxf'
  },
  {
    name: 'Christy Milam',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Christy Milam'
      },
      {}
    ],
    code: '0panu'
  },
  {
    name: 'Becky & Jim Fisher',
    permissions: ['rehearsal', 'cocktail', 'ceremony'],
    party: [
      {
        name: 'Becky Fisher'
      },
      {
        name: 'Jim Fisher'
      }
    ],
    code: 'nomo4'
  },
  {
    name: 'Annet Bakker & Marcel Kreleger',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Annet Bakker'
      },
      {
        name: 'Marcel Kreleger'
      }
    ],
    code: '3t9im'
  },
  {
    name: 'Sheela & Alain Gévaudant',
    permissions: ['cocktail', 'ceremony'],
    party: [
      {
        name: 'Sheela Gévaudant'
      },
      {
        name: 'Alain Gévaudant'
      }
    ],
    code: 'p87sp'
  },
  {
    name: 'Jose Azuara',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Jose Azuara'
      },
      {},
      {
        kid: true
      },
      {
        kid: true
      }
    ],
    code: 'byaa0'
  },
  {
    name: 'Josh & Jacqueline Ellis',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Josh Ellis'
      },
      {
        name: 'Jacqueline Ellis'
      },
      {
        kid: true
      },
      {
        kid: true
      }
    ],
    code: 'tr2qf'
  },
  {
    name: 'Thomas Elmasri',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Thomas Elmasri'
      },
      {}
    ],
    code: 'zzpr2'
  },
  {
    name: 'Carter Humphrey & Peri Newman',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Carter Humphrey'
      },
      {
        name: 'Peri Newman'
      }
    ],
    code: 'pzmgn'
  },
  {
    name: 'Adam Oganowski',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Adam Oganowski'
      },
      {}
    ],
    code: 'oo1td'
  },
  {
    name: 'Blaine Williams',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Blaine Williams'
      },
      {}
    ],
    code: 'h7p64'
  },
  {
    name: 'Greg Cooksey',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Greg Cooksey'
      },
      {}
    ],
    code: 'k9vpo'
  },
  {
    name: 'Nate Filipek',
    permissions: ['ceremony'],
    party: [
      {
        name: 'Nate Filipek'
      },
      {
        name: 'Emily Blackner'
      }
    ],
    code: '4ifg2'
    }
  ]

  const us = [
    {
      name: 'Wil',
      code: '09191994',
      permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    },
    {
      name: 'Darien',
      code: '11201995',
      permissions: ['bach', 'rehearsal', 'cocktail', 'early', 'photos', 'ceremony'],
    }
  ]
  
  return {
  ...invitations,
  ...us
  }
}