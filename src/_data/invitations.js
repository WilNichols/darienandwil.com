export default function () {
  
  const invitations = [
  {
    name: 'Aimee & Jeremy Abbott',
    party: [
      {
        name: 'Aimee Abbott'
      }, 
      {
        name: 'Jeremy Abbott'
      }, 
      {}, 
      {}
    ],
    code: 'mf0vc'
  },
  {
    name: 'Amy Roberts & Adrian Delia',
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
    party: [
      {
        name: 'Sloan Arno'
      }, 
      {}
    ],
    code: '2zlnj'
  },
  {
    name: 'John & Karen Leary',
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
    party: [
      {
        name: 'Susan Culotta'
      }, 
      {}
    ],
    code: '8j83x'
  },
  {
    name: 'Wes & Julie Nichols',
    privileges: ['rehearsal', 'photos'],
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
    name: 'Sriram Vishwanath',
    party: [
      {
        name: 'Sriram Vishwanath'
      }, 
      {}
    ],
    code: 'eos97'
  },
  {
    name: 'Fallon Scheibel & Bela Palacios',
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
    party: [
      {
        name: 'Lauren Leary'
      }, 
      {}
    ],
    code: 'lxy7k'
  },
  {
    name: 'Riley & Chelsea Sheehan',
    party: [
      {
        name: 'Riley Sheehan'
      }, 
      {
        name: 'Chelsea Sheehan'
      }, 
      {
        name: 'Everett Sheehan'
      }
    ],
    code: 'y27m6'
  },
  {
    name: 'Laura & Tom Rulon',
    privileges: ['rehearsal', 'photos'],
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
    name: 'Jim & Susan O’Conner',
    party: [
      {
        name: 'Jim O’Conner'
      }, 
      {
        name: 'Susan O’Conner'
      }
    ],
    code: 'q8zp6'
  },
  {
    name: 'Nayeli Cortina & Eugene Mymrin',
    party: [
      {
        name: 'Nayeli Cortina'
      }, 
      {
        name: 'Eugene Mymrin'
      }, 
      {
        name: 'Natalie'
      }
    ],
    code: 'ua5g2'
  },
  {
    name: 'Jenna Snodgrass & Abhi Ilindra',
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
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
    privileges: ['rehearsal'],
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
    privileges: ['rehearsal', 'photos'],
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
    privileges: ['rehearsal'],
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
    party: [
      {
        name: 'Ell Bogat'
      },
      {}
    ],
    code: 'i969w'
  },
  {
    name: 'Kimi Bryson-Reilly & John Henry Reilly',
    party: [
      {
        name: 'Kimi Bryson-Reilly'
      },
      {
        name: 'John Henry Reilly'
      }
    ],
    code: 'jx59g'
  },
  {
    name: 'Alex Nichols & Meredith Dixon',
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
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
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
    party: [
      {
        name: 'Brett Williams'
      },
      {
        name: 'Gayle Mayfield'
      },
      {},
      {}
    ],
    code: 'ikqy2'
  },
  {
    name: 'Casey Higgins & Roel Pedraza',
    privileges: ['rehearsal', 'early', 'photos'],
    party: [
      {
        name: 'Casey Higgins'
      },
      {
        name: 'Roel Pedraza'
      },
      {}
    ],
    code: 'skcub'
  },
  {
    name: 'Jill Thompson',
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
    party: [
      {
        name: 'Elaine Leary'
      },
    ],
    code: '37hi3'
  },
  {
    name: 'Angela Cerillo',
    party: [
      {
        name: 'Angela Cerillo'
      },
      {}
    ],
    code: '78i1m'
  },
  {
    name: 'Roman & Izabella Piltser',
    privileges: ['rehearsal'],
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
    privileges: ['bach'],
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
    privileges: ['rehearsal'],
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
    name: 'William and Janet Grubbs',
    party: [
      {
        name: 'William Grubbs'
      },
      {
        name: 'Janet Grubbs'
      }
    ],
    code: 'h8swx'
  },
  {
    name: 'James Schuster',
    party: [
      {
        name: 'James Schuster'
      }
    ],
    code: '6pfo9'
  },
  {
    name: 'Marie Perez',
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
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
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
    privileges: ['rehearsal'],
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
    privileges: ['rehearsal'],
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
      {}
    ],
    code: 'xkpbl'
  },
  {
    name: 'Karalei Nunn & Tom Nichols',
    privileges: ['rehearsal', 'photos'],
    party: [
      {
        name: 'Karalei Nunn'
      },
      {
        name: 'Tom Nichols'
      }
    ],
    code: 'c5d59'
  },
  {
    name: 'Eleanor & Joe Kent',
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
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
    party: [
      {
        name: 'Heena Momaya'
      }
    ],
    code: 'iec3a'
  },
  {
    name: 'Bill & Kim Moore',
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
    party: [
      {
        name: 'Ginny Elia'
      },
      {
        name: 'Tommy Elia'
      }
    ],
    code: 'u10me'
  },
  {
    name: 'Estevan Balderrama & Coyote Balderrama-Shook',
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
    name: 'The Momaya Family',
    TODO: 'confirm names',
    party: [
      {},
      {},
      {},
      {}
    ],
    code: 'd8wuc'
  },
  {
    name: 'Helen Nunn',
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
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
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
    party: [
      {
        name: 'Sarah Hartle'
      },
      {}
    ],
    code: '1g8p4'
  },
  {
    name: 'Nancy Ott & Jim Viel',
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
    party: [
      {
        name: 'Jim Rigby'
      }
    ],
    code: 'pgj8j'
  },
  {
    name: 'Jamie Holmes',
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
    party: [
      {
        name: 'Gary Gehiere'
      },
      {
        name: 'Petrina Burkard'
      },
      {},
      {}
    ],
    code: 'damth'
  },
  {
    name: 'Frederick & Janet Elia',
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
    party: [
      {
        name: 'Donald Mason'
      }
    ],
    code: 'qywlt'
  },
  {
    name: 'Reef Love',
    party: [
      {
        name: 'Reef Love'
      }
    ],
    code: 's5956'
  },
  {
    name: 'Alex & Irinia Gavrilov',
    party: [
      {
        name: 'Alex Gavrilov'
      },
      {
        name: 'Irinia Gavrilov'
      }
    ],
    code: '5z1o4'
  },
  {
    name: 'Christel, Peter, & Matthew Crabbe',
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
    TODO: 'confirm names',
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
        name: 'Paisely Hicks'
      },
      {}
    ],
    code: 'tmk19'
  },
  {
    name: 'Brandi & Brian Cordell',
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
    TODO: 'confirm names',
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
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
    party: [
      {
        name: 'Sasha DiGregorio'
      },
      {
        name: 'Alex DiGregorio'
      },
      {}
    ],
    code: 'd96k6'
  },
  {
    name: 'Matt Petri',
    party: [
      {
        name: 'Matt Petri'
      },
      {}
    ],
    code: 'g9vzl'
  },
  {
    name: 'Janet & Brent Farler',
    party: [
      {
        name: 'Janet Farler'
      },
      {
        name: 'Brent Farler'
      }
    ],
    code: '9saj0'
  },
  {
    name: 'Chris Foote',
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
    party: [
      {
        name: 'Laxmi Sheehan'
      },
      {
        name: 'Adam Sheehan'
      },
      {
        name: 'Riyan Sheehan'
      }
    ],
    code: 'vo84w'
  },
  {
    name: 'Kevin Anderson & Lena Long',
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
    party: [
      {
        name: 'Gayle Mayfield'
      }
    ],
    code: 'exkmu'
  },
  {
    name: 'Peter Schuster',
    TODO: 'confirm +1',
    party: [
      {
        name: 'Peter Schuster'
      }
    ],
    code: 'm7ymb'
  },
  {
    name: 'Bella Rulon',
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
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
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
    party: [
      {
        name: 'Tate Burle'
      },
      {}
    ],
    code: 'txbn4'
  },
  {
    name: 'Judy Mayfield & Jack Thompson',
    TODO: 'confirm names',
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
    party: [
      {
        name: 'Everyley Estest-Lloyd'
      },
      {
      }
    ],
    code: 'vlq2c'
  },
  {
    name: 'Kira Daniel',
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
    TODO: 'confirm Anna last name',
    privileges: ['bach', 'rehearsal', 'early', 'photos'],
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
    party: [
      {
        name: 'Dan Meyer'
      }
    ],
    code: '070oo'
  },
  {
    name: 'Dasawn Gray',
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
    privileges: ['rehearsal'],
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
    privileges: ['rehearsal'],
    party: [
      {
        name: 'Becky Fisher'
      },
      {
        name: 'Jim Fisher'
      }
    ],
    code: '3t9im'
  },
  {
    name: 'Sheela & Alain Gévaudant',
    privileges: ['rehearsal'],
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
    party: [
      {
        name: 'Jose Azuara'
      },
      {},
      {},
      {}
    ],
    code: 'byaa0'
  },
  {
    name: 'Josh Ellis',
    party: [
      {
        name: 'Josh Ellis'
      },
      {},
      {},
      {}
    ],
    code: 'tr2qf'
  },
  {
    name: 'Thomas Elmasri',
    party: [
      {
        name: 'Thomas Elmasri'
      },
      {},
      {}
    ],
    code: 'zzpr2'
  },
  {
    name: 'Carter Humphrey & Peri Newman',
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
    party: [
      {
        name: 'Nate Filipek'
      },
      {}
    ],
    code: '4ifg2'
  }
  ]

  const us = [
    {
      name: 'Wil',
      code: '09191994'
    },
    {
      name: 'Darien',
      code: '11202995'
    }
  ]
  
  return {
  ...invitations,
  ...us
  }
}