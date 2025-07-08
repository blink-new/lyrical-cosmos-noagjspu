export interface Artist {
  name: string
}

export interface Subgenre {
  name: string
  artists: Artist[]
}

export interface Genre {
  name: string
  subgenres: Subgenre[]
}

export const genres: Genre[] = [
  {
    name: "Blues",
    subgenres: [
      {
        name: "Blues Rock",
        artists: [
          { name: "Cream" },
          { name: "Gary Moore" },
          { name: "Janis Joplin" },
          { name: "Joe Bonamassa" },
          { name: "Led Zeppelin" },
          { name: "Stevie Ray Vaughan" },
          { name: "The Allman Brothers Band" },
          { name: "The Black Keys" },
          { name: "The Jimi Hendrix Experience" },
          { name: "ZZ Top" }
        ]
      },
      {
        name: "Chicago Blues",
        artists: [
          { name: "B.B. King" },
          { name: "Buddy Guy" },
          { name: "Elmore James" },
          { name: "Howlin' Wolf" },
          { name: "John Lee Hooker" },
          { name: "Little Walter" },
          { name: "Muddy Waters" },
          { name: "Otis Rush" },
          { name: "Sonny Boy Williamson II" },
          { name: "Willie Dixon" }
        ]
      },
      {
        name: "Delta Blues",
        artists: [
          { name: "Big Joe Williams" },
          { name: "Bukka White" },
          { name: "Charley Patton" },
          { name: "Fred McDowell" },
          { name: "Mississippi John Hurt" },
          { name: "Robert Johnson" },
          { name: "Robert Petway" },
          { name: "Skip James" },
          { name: "Son House" },
          { name: "Tommy Johnson" }
        ]
      }
    ]
  },
  {
    name: "Country",
    subgenres: [
      {
        name: "Alt-Country",
        artists: [
          { name: "Drive-By Truckers" },
          { name: "Gillian Welch" },
          { name: "Jason Isbell" },
          { name: "Kacey Musgraves" },
          { name: "Lucinda Williams" },
          { name: "Sturgill Simpson" },
          { name: "The Jayhawks" },
          { name: "Uncle Tupelo" },
          { name: "Whiskeytown" },
          { name: "Wilco" }
        ]
      },
      {
        name: "Classic Country",
        artists: [
          { name: "Dolly Parton" },
          { name: "George Jones" },
          { name: "Hank Williams" },
          { name: "Johnny Cash" },
          { name: "Loretta Lynn" },
          { name: "Merle Haggard" },
          { name: "Patsy Cline" },
          { name: "Tammy Wynette" },
          { name: "Waylon Jennings" },
          { name: "Willie Nelson" }
        ]
      },
      {
        name: "Country Pop",
        artists: [
          { name: "Carrie Underwood" },
          { name: "Dan + Shay" },
          { name: "Faith Hill" },
          { name: "Garth Brooks" },
          { name: "Lady A" },
          { name: "Maren Morris" },
          { name: "Sam Hunt" },
          { name: "Shania Twain" },
          { name: "Taylor Swift (Early)" },
          { name: "The Chicks" }
        ]
      }
    ]
  },
  {
    name: "Electronic",
    subgenres: [
      {
        name: "Ambient",
        artists: [
          { name: "Aphex Twin (Ambient Works)" },
          { name: "Boards of Canada" },
          { name: "Brian Eno" },
          { name: "Fennesz" },
          { name: "Harold Budd" },
          { name: "Oneohtrix Point Never" },
          { name: "Stars of the Lid" },
          { name: "Tim Hecker" },
          { name: "Tycho" },
          { name: "William Basinski" }
        ]
      },
      {
        name: "House",
        artists: [
          { name: "Caribou" },
          { name: "Daft Punk" },
          { name: "Disclosure" },
          { name: "Frankie Knuckles" },
          { name: "Jamie xx" },
          { name: "Kaytranada" },
          { name: "Kerri Chandler" },
          { name: "LCD Soundsystem" },
          { name: "Masters At Work" },
          { name: "Peggy Gou" }
        ]
      },
      {
        name: "Techno",
        artists: [
          { name: "Aphex Twin" },
          { name: "Björk" },
          { name: "Boards of Canada" },
          { name: "Jeff Mills" },
          { name: "Kraftwerk" },
          { name: "Orbital" },
          { name: "Richie Hawtin" },
          { name: "The Chemical Brothers" },
          { name: "The Prodigy" },
          { name: "Underworld" }
        ]
      }
    ]
  },
  {
    name: "Folk",
    subgenres: [
      {
        name: "American Folk Revival",
        artists: [
          { name: "Bob Dylan" },
          { name: "Joan Baez" },
          { name: "Joni Mitchell" },
          { name: "Odetta" },
          { name: "Pete Seeger" },
          { name: "Peter, Paul and Mary" },
          { name: "Phil Ochs" },
          { name: "Simon & Garfunkel" },
          { name: "The Byrds" },
          { name: "Woody Guthrie" }
        ]
      },
      {
        name: "Contemporary Folk",
        artists: [
          { name: "Bon Iver" },
          { name: "Fleet Foxes" },
          { name: "Gregory Alan Isakov" },
          { name: "Hozier" },
          { name: "Iron & Wine" },
          { name: "Mumford & Sons" },
          { name: "Sufjan Stevens" },
          { name: "The Avett Brothers" },
          { name: "The Decemberists" },
          { name: "The Lumineers" }
        ]
      }
    ]
  },
  {
    name: "Hip-Hop",
    subgenres: [
      {
        name: "Alternative Hip-Hop",
        artists: [
          { name: "Beastie Boys" },
          { name: "Chance the Rapper" },
          { name: "Childish Gambino" },
          { name: "De La Soul" },
          { name: "Gorillaz" },
          { name: "Kanye West" },
          { name: "Mac Miller" },
          { name: "MF DOOM" },
          { name: "OutKast" },
          { name: "Tyler, The Creator" }
        ]
      },
      {
        name: "Conscious Hip-Hop",
        artists: [
          { name: "A Tribe Called Quest" },
          { name: "Common" },
          { name: "J. Cole" },
          { name: "Kendrick Lamar" },
          { name: "Lauryn Hill" },
          { name: "Lupe Fiasco" },
          { name: "Mos Def (Yasiin Bey)" },
          { name: "Nas" },
          { name: "Public Enemy" },
          { name: "The Roots" }
        ]
      },
      {
        name: "Gangsta Rap",
        artists: [
          { name: "2Pac" },
          { name: "Compton's Most Wanted" },
          { name: "Cypress Hill" },
          { name: "Dr. Dre" },
          { name: "Geto Boys" },
          { name: "Ice Cube" },
          { name: "Ice-T" },
          { name: "N.W.A" },
          { name: "Snoop Dogg" },
          { name: "The Notorious B.I.G." }
        ]
      },
      {
        name: "Trap",
        artists: [
          { name: "21 Savage" },
          { name: "Cardi B" },
          { name: "Drake" },
          { name: "Future" },
          { name: "Gucci Mane" },
          { name: "Lil Baby" },
          { name: "Migos" },
          { name: "T.I." },
          { name: "Travis Scott" },
          { name: "Young Thug" }
        ]
      }
    ]
  },
  {
    name: "Jazz",
    subgenres: [
      {
        name: "Bebop",
        artists: [
          { name: "Art Blakey" },
          { name: "Bud Powell" },
          { name: "Cannonball Adderley" },
          { name: "Charlie Parker" },
          { name: "Dizzy Gillespie" },
          { name: "John Coltrane (Bebop/Hard Bop)" },
          { name: "Max Roach" },
          { name: "Miles Davis (Bebop Era)" },
          { name: "Sonny Rollins" },
          { name: "Thelonious Monk" }
        ]
      },
      {
        name: "Vocal Jazz",
        artists: [
          { name: "Amy Winehouse" },
          { name: "Billie Holiday" },
          { name: "Chet Baker" },
          { name: "Diana Krall" },
          { name: "Ella Fitzgerald" },
          { name: "Frank Sinatra" },
          { name: "Louis Armstrong" },
          { name: "Nat King Cole" },
          { name: "Nina Simone" },
          { name: "Sarah Vaughan" }
        ]
      }
    ]
  },
  {
    name: "Metal",
    subgenres: [
      {
        name: "Death Metal",
        artists: [
          { name: "At the Gates" },
          { name: "Bolt Thrower" },
          { name: "Cannibal Corpse" },
          { name: "Carcass" },
          { name: "Death" },
          { name: "Deicide" },
          { name: "Entombed" },
          { name: "Morbid Angel" },
          { name: "Opeth" },
          { name: "Possessed" }
        ]
      },
      {
        name: "Doom Metal",
        artists: [
          { name: "Candlemass" },
          { name: "Cathedral" },
          { name: "Electric Wizard" },
          { name: "Kyuss" },
          { name: "My Dying Bride" },
          { name: "Pentagram" },
          { name: "Saint Vitus" },
          { name: "Sleep" },
          { name: "Sunn O)))" },
          { name: "Trouble" }
        ]
      },
      {
        name: "Heavy Metal",
        artists: [
          { name: "Accept" },
          { name: "Black Sabbath" },
          { name: "Diamond Head" },
          { name: "Dio" },
          { name: "Iron Maiden" },
          { name: "Judas Priest" },
          { name: "Manowar" },
          { name: "Mercyful Fate" },
          { name: "Motörhead" },
          { name: "Saxon" }
        ]
      },
      {
        name: "Thrash Metal",
        artists: [
          { name: "Anthrax" },
          { name: "Exodus" },
          { name: "Kreator" },
          { name: "Megadeth" },
          { name: "Metallica" },
          { name: "Overkill" },
          { name: "Sepultura (Early)" },
          { name: "Slayer" },
          { name: "Sodom" },
          { name: "Testament" }
        ]
      }
    ]
  },
  {
    name: "Pop",
    subgenres: [
      {
        name: "Dance-Pop",
        artists: [
          { name: "Beyoncé" },
          { name: "Britney Spears" },
          { name: "Dua Lipa" },
          { name: "Janet Jackson" },
          { name: "Justin Timberlake" },
          { name: "Katy Perry" },
          { name: "Kylie Minogue" },
          { name: "Madonna" },
          { name: "Michael Jackson" },
          { name: "Rihanna" }
        ]
      },
      {
        name: "Indie Pop",
        artists: [
          { name: "Belle and Sebastian" },
          { name: "Camera Obscura" },
          { name: "Carly Rae Jepsen" },
          { name: "Florence + The Machine" },
          { name: "Foster the People" },
          { name: "HAIM" },
          { name: "MGMT" },
          { name: "Passion Pit" },
          { name: "The Shins" },
          { name: "The Smiths" }
        ]
      },
      {
        name: "Synth-Pop",
        artists: [
          { name: "CHVRCHES" },
          { name: "Depeche Mode" },
          { name: "Erasure" },
          { name: "Grimes" },
          { name: "Lady Gaga" },
          { name: "Lorde" },
          { name: "New Order" },
          { name: "Pet Shop Boys" },
          { name: "Taylor Swift (Pop Era)" },
          { name: "The Human League" }
        ]
      }
    ]
  },
  {
    name: "R&B / Soul",
    subgenres: [
      {
        name: "Classic Soul",
        artists: [
          { name: "Al Green" },
          { name: "Aretha Franklin" },
          { name: "Bill Withers" },
          { name: "James Brown" },
          { name: "Marvin Gaye" },
          { name: "Otis Redding" },
          { name: "Ray Charles" },
          { name: "Sam Cooke" },
          { name: "Stevie Wonder" },
          { name: "The Temptations" }
        ]
      },
      {
        name: "Contemporary R&B",
        artists: [
          { name: "Beyoncé" },
          { name: "Brent Faiyaz" },
          { name: "Chris Brown" },
          { name: "Frank Ocean" },
          { name: "H.E.R." },
          { name: "Janelle Monáe" },
          { name: "Miguel" },
          { name: "SZA" },
          { name: "The Weeknd" },
          { name: "Usher" }
        ]
      },
      {
        name: "Neo-Soul",
        artists: [
          { name: "Anderson .Paak" },
          { name: "Anthony Hamilton" },
          { name: "D'Angelo" },
          { name: "Erykah Badu" },
          { name: "India.Arie" },
          { name: "Jill Scott" },
          { name: "Lauryn Hill" },
          { name: "Maxwell" },
          { name: "Musiq Soulchild" },
          { name: "Solange" }
        ]
      }
    ]
  },
  {
    name: "Rock",
    subgenres: [
      {
        name: "Alternative Rock",
        artists: [
          { name: "Alice In Chains" },
          { name: "Foo Fighters" },
          { name: "Nine Inch Nails" },
          { name: "Nirvana" },
          { name: "Pearl Jam" },
          { name: "Pixies" },
          { name: "R.E.M." },
          { name: "Radiohead" },
          { name: "Red Hot Chili Peppers" },
          { name: "Soundgarden" },
          { name: "The Smashing Pumpkins" }
        ]
      },
      {
        name: "Classic Rock",
        artists: [
          { name: "Boston" },
          { name: "Creedence Clearwater Revival" },
          { name: "Eagles" },
          { name: "Fleetwood Mac" },
          { name: "Led Zeppelin" },
          { name: "Neil Young" },
          { name: "Pink Floyd" },
          { name: "Queen" },
          { name: "The Beatles" },
          { name: "The Doors" },
          { name: "The Rolling Stones" },
          { name: "The Who" }
        ]
      },
      {
        name: "Indie Rock",
        artists: [
          { name: "Arcade Fire" },
          { name: "Arctic Monkeys" },
          { name: "Bon Iver" },
          { name: "LCD Soundsystem" },
          { name: "Phoebe Bridgers" },
          { name: "Tame Impala" },
          { name: "The National" },
          { name: "The Strokes" },
          { name: "The xx" },
          { name: "Vampire Weekend" },
          { name: "Yeah Yeah Yeahs" }
        ]
      },
      {
        name: "Punk Rock",
        artists: [
          { name: "Bad Religion" },
          { name: "Black Flag" },
          { name: "Blink-182" },
          { name: "Dead Kennedys" },
          { name: "Green Day" },
          { name: "Iggy Pop and The Stooges" },
          { name: "Sex Pistols" },
          { name: "The Clash" },
          { name: "The Misfits" },
          { name: "The Ramones" }
        ]
      }
    ]
  }
]

export const getAllArtists = (): Artist[] => {
  return genres.flatMap(genre => 
    genre.subgenres.flatMap(subgenre => subgenre.artists)
  )
}