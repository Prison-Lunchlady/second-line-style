export type CityHub = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading: string; body: string[] }[];
};

export const CITY_HUBS: CityHub[] = [
  {
    slug: "baton-rouge",
    name: "Baton Rouge",
    region: "Capital Region",
    tagline: "Louisiana's capital — and where Second Line Clothing started.",
    metaTitle: "Baton Rouge Culture | Second Line Clothing",
    metaDescription:
      "Baton Rouge culture, food, music, and identity — and why Louisiana's capital is the launchpad for Second Line Clothing's first graphic tee collection.",
    sections: [
      {
        heading: "Why Baton Rouge",
        body: [
          "Baton Rouge is Louisiana's capital, the state's second-largest city, and the place where Second Line Clothing started. Collection 001 is Baton Rouge inspired because the brand was built here — on its neighborhoods, its rivalries, its slang, and the very specific way Baton Rouge sees itself inside Louisiana. The city is a launchpad, not a ceiling. Our long-term identity is Louisiana-wide, but our first stories start at the Mississippi River.",
          "If you've lived in Baton Rouge, you know it doesn't behave like a typical Southern city. It's a college town, a refinery town, a government town, and a Friday-night football town all stacked on top of each other. The graphic tees in Collection 001 lean into that overlap — the inside jokes that only make sense if you've sat in I-10 traffic by the river bridge, eaten at a plate-lunch spot the tourists haven't found, or watched a Saturday in Tiger Stadium turn the whole city purple and gold.",
        ],
      },
      {
        heading: "The neighborhoods and the river",
        body: [
          "Baton Rouge spreads out from the Mississippi River in a way that shapes daily life. Downtown holds the capitol building, the levee, and the river itself — a working river, not a postcard. Mid City and the Garden District carry the city's older bones: shotgun houses, oak canopies, corner stores that double as community centers. South Baton Rouge runs into LSU, Highland Road, and the line of restaurants and bars that have outlasted entire generations of students.",
          "Across the river, Port Allen and West Baton Rouge bring the sugarcane fields and the industrial backbone right up to the levee. Head north and you're in Scotlandville and the historic Southern University campus, one of the most important HBCUs in the country and a cornerstone of Black Louisiana culture. Each of these pockets has its own pace, its own slang, and its own version of what Baton Rouge means.",
        ],
      },
      {
        heading: "Food, music, and Saturdays in the fall",
        body: [
          "Baton Rouge food is plate-lunch food: smothered pork chops, red beans and rice on Mondays, gumbo when it gets cold, boudin from a gas station that has no business being that good. The city's restaurants run from generations-old neighborhood spots to newer chefs pushing Louisiana ingredients in new directions. Whatever the dining trend is nationally, Baton Rouge still rewards the cooks who can make a roux without measuring.",
          "Musically, Baton Rouge has always been a swamp blues town. Slim Harpo, Lightnin' Slim, Lazy Lester, Buddy Guy — the city helped invent a sound that fed straight into rock and roll. That backbone is still there in the live music coming out of local venues, and it sits comfortably next to the hip-hop and bounce traditions that connect Baton Rouge to the rest of Louisiana.",
          "And then there's football. LSU Saturdays don't just happen in Tiger Stadium — they take over the whole city, from tailgates that start Friday afternoon to grocery stores that quietly close early. Whether you love it, tolerate it, or escape it, fall Saturdays are part of Baton Rouge's cultural fingerprint.",
        ],
      },
      {
        heading: "Baton Rouge inside the bigger Louisiana story",
        body: [
          "Baton Rouge often gets framed as 'New Orleans's quieter cousin,' which sells the city short. Baton Rouge has its own voice, its own humor, and its own role in Louisiana culture — the political weight of the capitol, the engineering muscle of the river industries, and the cultural exchange that comes with being a major university city. You can't tell the story of Louisiana without it.",
          "That's why our Baton Rouge graphic tees aren't 'New Orleans lite.' They're built on Baton Rouge references first, with Louisiana as the larger frame. From here, future Second Line Clothing collections will move outward — Lafayette, Shreveport, New Orleans, Houma, Natchitoches, Monroe — but Collection 001 belongs to the city that started it.",
        ],
      },
    ],
  },
  {
    slug: "new-orleans",
    name: "New Orleans",
    region: "Greater New Orleans",
    tagline: "The cultural engine of Louisiana — and the original second line.",
    metaTitle: "New Orleans Culture | Second Line Clothing",
    metaDescription:
      "New Orleans culture, food, music, second lines, and the traditions that shape Louisiana — and how they connect to Second Line Clothing's Louisiana apparel.",
    sections: [
      {
        heading: "The original second line",
        body: [
          "Our brand name comes from New Orleans. A second line, in its most literal sense, is the group of people who follow the main line of a brass band parade — friends, family, neighbors, and strangers who decide the parade is now theirs too. It's participation, not spectatorship. You join the dance, you carry the moment forward, and the street becomes the venue.",
          "That posture — show up, join in, carry it forward — is the posture Second Line Clothing tries to take with Louisiana culture. We don't stand on the sidelines and sell a tourist version of the state. We follow what's actually happening and turn it into something you can wear.",
        ],
      },
      {
        heading: "Neighborhoods, not landmarks",
        body: [
          "Tourists experience New Orleans as a list of landmarks. Locals experience it as a list of neighborhoods. The French Quarter is one piece of the city; the rest is the Marigny, Tremé, the Bywater, Mid-City, Uptown, the 7th Ward, Gentilly, Algiers, New Orleans East, and dozens of pockets in between. Each one has its own corner stores, its own bands, its own family lines that have been there for generations.",
          "Tremé in particular sits at the heart of Black American musical history — the oldest African American neighborhood in the United States, and one of the birthplaces of jazz. Walk a few blocks in any direction and you're standing where second lines, brass bands, and social aid and pleasure clubs were built. New Orleans culture isn't an aesthetic; it's an inheritance.",
        ],
      },
      {
        heading: "Food and language",
        body: [
          "New Orleans food is its own dialect. Gumbo isn't 'Cajun' or 'Creole' or 'Southern' — it's all three at once, and the recipe depends entirely on whose grandmother is doing the talking. Red beans and rice on Mondays, sno-balls in the summer, po-boys you have to lean over the table to eat, étouffée, jambalaya, fried catfish, hot sausage. None of it is fusion. All of it is the result of centuries of French, Spanish, African, Haitian, and Southern American influence colliding in one city.",
          "The language matches the food. You don't go grocery shopping; you 'make groceries.' Streets are pronounced like nowhere else (Tchoupitoulas, Burgundy, Carondelet). You don't get off the interstate; you 'get off the I-10.' These details aren't trivia — they're the texture of daily life, and they're the kind of references that show up on a real Louisiana graphic tee.",
        ],
      },
      {
        heading: "Mardi Gras and the calendar",
        body: [
          "Mardi Gras is not a week. It's a season — Twelfth Night to Fat Tuesday — that reorganizes the city's calendar every year. Neighborhood parades, walking krewes, marching clubs, Mardi Gras Indians, school bands, dance troupes — the whole city participates, not just the camera-friendly parts of it.",
          "But the calendar doesn't stop at Mardi Gras. Jazz Fest, Essence Fest, Satchmo, French Quarter Fest, the Bayou Boogaloo, Cajun-Zydeco Festival — New Orleans operates on a year-round rhythm of festivals, parades, and second lines that no other American city matches.",
        ],
      },
      {
        heading: "New Orleans inside the larger Louisiana story",
        body: [
          "It's tempting to treat New Orleans as if it stands alone. It doesn't. The city is the cultural engine of the state, but it's powered by the rest of Louisiana — Cajun country, the river parishes, the bayous, the coast, the small towns that feed musicians, cooks, and stories into the city for generations. New Orleans is a Louisiana city, not a Louisiana exception.",
          "Second Line Clothing carries the New Orleans name in our brand identity on purpose, but our collections will eventually cover the entire state. The second line started in New Orleans. The parade is statewide.",
        ],
      },
    ],
  },
  {
    slug: "lafayette",
    name: "Lafayette",
    region: "Acadiana",
    tagline: "The heart of Cajun country and the capital of Acadiana.",
    metaTitle: "Lafayette & Acadiana Culture | Second Line Clothing",
    metaDescription:
      "Lafayette, Acadiana, and Cajun culture — food, music, language, and the traditions that make this part of Louisiana unlike anywhere else.",
    sections: [
      {
        heading: "Capital of Acadiana",
        body: [
          "Lafayette is the unofficial capital of Acadiana — the 22-parish region of South Louisiana that traces its identity back to the Acadians, French-speaking settlers exiled from what's now Nova Scotia in the 1700s. They built a new life in the swamps, prairies, and bayous of South Louisiana, and the culture they grew there is one of the most distinctive in the country.",
          "Today, Lafayette is a city that wears that heritage openly. You'll hear French in restaurants, on the radio, and at festivals. You'll see it on street signs. You'll taste it in the food. Lafayette doesn't perform Cajun culture for outsiders; it lives it.",
        ],
      },
      {
        heading: "Cajun and zydeco music",
        body: [
          "If New Orleans gave the world jazz, Acadiana gave the world Cajun and zydeco. Cajun music — fiddle, accordion, French lyrics, a triangle keeping time — grew out of the Acadian tradition. Zydeco, born from Black Creole musicians in the same region, brought in blues, R&B, and a heavier rhythm section. Both styles still pack dance halls across Lafayette and the surrounding towns every weekend.",
          "Festivals International de Louisiane, Festival Acadiens et Créoles, and the weekly Saturday morning music shows at places like the Liberty Theater in Eunice keep the tradition alive without freezing it. New artists pull Cajun and zydeco forward; older artists keep the standards intact. That balance is part of what makes Lafayette music feel alive instead of curated.",
        ],
      },
      {
        heading: "Food that defines a region",
        body: [
          "Cajun food is not just spicy food. It's the cuisine of a working people who learned to use every part of every animal and every plant the land would give them. Boudin, cracklins, étouffée, gumbo (the Cajun version, dark roux, no tomatoes), jambalaya, fried catfish, crawfish boils that take over entire backyards from late winter through early summer.",
          "In Acadiana, a 'plate lunch' is a daily institution. A great boudin link from a gas station deli isn't a punchline — it's a serious meal. And a crawfish boil isn't a meal so much as an afternoon, a social structure, and an excuse to keep everyone outside together for hours.",
        ],
      },
      {
        heading: "Language, family, and joie de vivre",
        body: [
          "Louisiana French and Cajun French are real, living dialects. They were nearly stamped out by 20th-century English-only schooling, but immersion programs, CODOFIL (the Council for the Development of French in Louisiana), and a wave of younger Cajun and Creole speakers have been pulling the language back into daily life.",
          "Underneath all of it is the idea Acadiana exports better than any other Louisiana region: joie de vivre. The joy of living. Family meals that run for hours. Music for any reason or no reason. Strangers who treat you like cousins by the second beer. That spirit is a quiet, constant part of Louisiana lifestyle, and Lafayette is its capital.",
        ],
      },
      {
        heading: "Lafayette in the larger Louisiana story",
        body: [
          "Without Acadiana, Louisiana would not be Louisiana. The Cajun and Creole cultures of Lafayette and the surrounding parishes are the reason the rest of the country pictures Louisiana the way it does — accordions, crawfish, French phrases, dance halls, swamp tours, and a calendar built around festivals.",
          "Future Second Line Clothing collections will lean into Acadiana with the seriousness it deserves: real references, real language, real respect for the families that have carried this culture for generations. Lafayette won't be a single tee — it'll be a chapter.",
        ],
      },
    ],
  },
  {
    slug: "shreveport",
    name: "Shreveport",
    region: "North Louisiana / ArkLaTex",
    tagline: "Where Louisiana meets Texas and Arkansas — and refuses to blend in.",
    metaTitle: "Shreveport Culture | Second Line Clothing",
    metaDescription:
      "Shreveport, Bossier City, and the ArkLaTex — North Louisiana culture, music, food, and the identity that sets this region apart from the rest of the state.",
    sections: [
      {
        heading: "North Louisiana, on its own terms",
        body: [
          "Shreveport sits in the northwest corner of Louisiana, on the Red River, where the state meets East Texas and South Arkansas — the region locals call the ArkLaTex. That position has always shaped the city. Shreveport is unmistakably Louisiana, but it pulls cultural threads from Texas country music, Arkansas blues, and the broader Deep South. The result is a city that doesn't sound, eat, or feel like New Orleans — and isn't trying to.",
          "For people who only know South Louisiana, Shreveport is a reminder that 'Louisiana culture' is not one thing. The state stretches more than 350 miles top to bottom, and the north has its own accent, its own food traditions, and its own deep Black and Creole history that doesn't get the same national spotlight as the south.",
        ],
      },
      {
        heading: "Music history that punches far above its weight",
        body: [
          "Shreveport's musical résumé is staggering. The Louisiana Hayride, broadcast from the Municipal Auditorium starting in 1948, helped launch the careers of Hank Williams, Johnny Cash, Elvis Presley, Kitty Wells, and dozens of others. For two decades, Shreveport was a center of gravity for country and early rock and roll.",
          "At the same time, Shreveport's Black neighborhoods were home to a deep blues and gospel tradition. Lead Belly, born nearby in Mooringsport, recorded songs that shaped American folk and blues for generations. Shreveport's musical DNA is country and blues and gospel braided together — and you can still hear it across the city's venues.",
        ],
      },
      {
        heading: "Food and the ArkLaTex table",
        body: [
          "Shreveport food sits at a delicious crossroads. You'll find Cajun and Creole staples — gumbo, étouffée, red beans — alongside Texas-style barbecue, Southern soul food, and dishes you won't find in this exact form anywhere else, like stuffed shrimp and Shreveport-style crawfish. The city's barbecue scene in particular is taken very seriously, and the line between 'Louisiana' and 'East Texas' on a plate is often blurred on purpose.",
          "Holiday Mardi Gras here also has its own flavor. Shreveport-Bossier's Krewe of Centaur and Krewe of Gemini parades pull massive crowds and have built a North Louisiana version of Carnival season that is distinct from the South Louisiana experience — bigger floats, different traditions, just as serious.",
        ],
      },
      {
        heading: "Shreveport in the larger Louisiana story",
        body: [
          "Shreveport is proof that Louisiana culture is regional and layered. The state's identity isn't owned by one city or one cuisine. Second Line Clothing is a Louisiana lifestyle brand, which means future collections will represent North Louisiana on its own terms — not as a footnote to Cajun country or New Orleans, but as a culture with its own music, food, humor, and history that deserves dedicated graphic apparel.",
          "Expect Shreveport to show up in the brand: the Hayride history, the ArkLaTex identity, the Red River, and the particular pride of a city that has always done things its own way.",
        ],
      },
    ],
  },
  {
    slug: "monroe",
    name: "Monroe",
    region: "Northeast Louisiana / Delta",
    tagline: "Delta country, gospel roots, and a quieter chapter of Louisiana culture.",
    metaTitle: "Monroe Culture | Second Line Clothing",
    metaDescription:
      "Monroe and Northeast Louisiana — Delta culture, music, food, and the traditions that make this corner of the state distinctly Louisiana.",
    sections: [
      {
        heading: "Northeast Louisiana, the Delta side of the state",
        body: [
          "Monroe and West Monroe sit on the Ouachita River in Northeast Louisiana — the part of the state that flattens out into the Mississippi Delta. It's a region defined by cotton history, soybean and timber economies, deep gospel and blues traditions, and a slower pace than the more famous corners of Louisiana. It's also one of the parts of the state where Louisiana culture overlaps most directly with Mississippi Delta culture, while still being unmistakably Louisiana.",
          "Northeast Louisiana doesn't usually make the postcards. That's part of why it matters. A Louisiana lifestyle brand that only talks about New Orleans and Cajun country tells half the story. Monroe and the parishes around it carry the other half.",
        ],
      },
      {
        heading: "Music, faith, and community",
        body: [
          "Monroe's musical heritage runs through gospel and blues. The region has produced and shaped generations of gospel choirs, soul singers, and church musicians whose influence reaches far beyond Northeast Louisiana. Bill Russell-style sacred steel, traditional choir gospel, and Delta-rooted blues all have homes here.",
          "Faith plays a larger role in everyday life here than in some other parts of the state, and that's not a stereotype — it's a fact of how the community organizes itself. Church suppers, gospel concerts, and community fundraisers double as social anchors, the way second lines and dance halls do further south.",
        ],
      },
      {
        heading: "Food and outdoor life",
        body: [
          "Monroe-area food leans Southern and Delta — fried catfish, hush puppies, smoked meats, slow-cooked greens, sweet tea you can stand a spoon up in. Cajun influences are present (every Louisiana grocery store knows what boudin is), but the Northeast Louisiana table reads differently from a Lafayette table or a New Orleans table.",
          "Outdoor life is central too. The Ouachita River, Bayou DeSiard, and the surrounding wetlands and forests support a deep hunting, fishing, and outdoor culture — duck hunting, bass fishing, deer camps. It's a part of Louisiana lifestyle that doesn't always show up on a graphic tee but absolutely deserves to.",
        ],
      },
      {
        heading: "Monroe in the larger Louisiana story",
        body: [
          "Monroe is a reminder that Louisiana culture isn't only Cajun or only Creole or only New Orleans. The Delta is Louisiana too. The gospel choirs are Louisiana too. The duck camps and Friday night football games and church suppers are Louisiana too. When Second Line Clothing talks about being a Louisiana lifestyle brand, Monroe and Northeast Louisiana are part of what we mean — and future collections will reflect that.",
        ],
      },
    ],
  },
  {
    slug: "houma",
    name: "Houma",
    region: "Bayou Country / Terrebonne",
    tagline: "Bayou country, shrimp boats, and the Louisiana coast.",
    metaTitle: "Houma & Bayou Country Culture | Second Line Clothing",
    metaDescription:
      "Houma, Terrebonne Parish, and Louisiana's bayou country — Cajun heritage, seafood, the coast, and the traditions that shape this part of Louisiana.",
    sections: [
      {
        heading: "Where the bayous meet the Gulf",
        body: [
          "Houma is the seat of Terrebonne Parish and the cultural heart of Louisiana's bayou country. Drive south of New Orleans and the land slowly turns into water — bayous, marshes, levees, and a network of waterways that has shaped how people live here for centuries. Houma is where that landscape becomes a city: a working town, deeply Cajun, deeply Catholic, and deeply tied to the water.",
          "Bayou culture isn't a tourist concept here. It's a daily reality. Families have lived along the same bayou for generations. Shrimp boats and crew boats are part of the skyline. Hurricanes are part of the calendar. The coast is not an abstraction — it's a community.",
        ],
      },
      {
        heading: "Seafood, oil, and a working coast",
        body: [
          "Houma's economy has long been built on two industries: seafood and oil and gas. Shrimping, crabbing, oystering, and commercial fishing are family businesses that go back generations. At the same time, offshore oil and gas work — service boats, rig work, fabrication yards — has supported entire towns along Bayou Lafourche, Bayou Terrebonne, and the surrounding parishes for decades.",
          "That working-coast identity shapes daily life. A shrimp boil in Houma isn't a themed event; it's a Saturday. Boudin and fresh seafood are everywhere. And the connection to the water also means a constant awareness of what the coast is losing — Louisiana's coastline is disappearing at one of the fastest rates in the world, and Houma is on the front line.",
        ],
      },
      {
        heading: "Cajun heritage and Houma-Terrebonne identity",
        body: [
          "Houma is one of the most concentrated centers of Cajun culture in Louisiana. French and Cajun French still surface in older speakers, family last names trace back to the Acadian exile, and traditions like fais do-dos (community dances), boucheries (hog butcherings), and the trapping and fishing lifestyle are still very much alive in the surrounding communities.",
          "The United Houma Nation — a state-recognized Native American tribe — also has a long, foundational presence in the region. Their history is woven into the bayous and the larger story of who Terrebonne Parish has always been, predating most of the maps the rest of the country uses to talk about Louisiana.",
        ],
      },
      {
        heading: "Houma in the larger Louisiana story",
        body: [
          "Houma is what people mean when they say 'Louisiana is more than New Orleans.' Bayou country has its own identity — quieter, more tied to the water, more visibly Cajun in daily life, more aware of the coast. A real Louisiana lifestyle brand cannot ignore it.",
          "Future Second Line Clothing collections will pull from Houma and bayou country with care — the shrimp boats, the boucheries, the bayous, the coastal pride, and the working-class Cajun identity that defines this part of the state.",
        ],
      },
    ],
  },
  {
    slug: "natchitoches",
    name: "Natchitoches",
    region: "Cane River Country / Central Louisiana",
    tagline: "Louisiana's oldest settlement and one of its most distinctive small towns.",
    metaTitle: "Natchitoches Culture | Second Line Clothing",
    metaDescription:
      "Natchitoches — the oldest permanent European settlement in the Louisiana Purchase, Cane River Creole heritage, meat pies, and a small-town Louisiana culture all its own.",
    sections: [
      {
        heading: "Older than the Louisiana Purchase",
        body: [
          "Natchitoches (pronounced 'NACK-a-tish') was founded in 1714 as a French outpost on the Red River, making it the oldest permanent European settlement in the entire Louisiana Purchase territory — older than New Orleans by four years. The city sits in Central Louisiana along the Cane River, and walking down Front Street still feels like walking through a long-running chapter of Louisiana history.",
          "For a Louisiana culture brand, Natchitoches matters because it represents the deep historical layer of the state. The architecture, the surnames, the food, the Catholic and Creole traditions, the relationship to the river — all of it goes back further than most Louisiana stories do.",
        ],
      },
      {
        heading: "Cane River Creole culture",
        body: [
          "The area around Natchitoches is home to one of the most important Creole cultural communities in the country: the Cane River Creoles of Color. Centered around plantations like Melrose and the communities along the Cane River, this is a heritage built by free people of color, French and Spanish settlers, enslaved Africans, and Native Americans whose lives intertwined over centuries.",
          "Cane River Creole culture has its own architecture, its own folk traditions, its own Catholicism, and its own version of Creole French. It's a chapter of Louisiana culture that often gets overshadowed by New Orleans Creole identity, but it stands on its own — and it's preserved today in part by the Cane River Creole National Historical Park.",
        ],
      },
      {
        heading: "Meat pies, Christmas lights, and Steel Magnolias",
        body: [
          "Natchitoches has its own signature food: the Natchitoches meat pie, a hand-held, half-moon-shaped fried pastry filled with seasoned beef and pork. It's a regional icon — protected, celebrated, and the kind of thing locals will argue about (whose recipe, which spot, what kind of crust) the same way other towns argue about gumbo.",
          "Two other things put Natchitoches on the national radar: the Natchitoches Christmas Festival, which lights up the riverbank with thousands of lights every winter, and Steel Magnolias, the movie filmed largely in town that turned several local landmarks into permanent tourist stops. The small-town Louisiana of Steel Magnolias isn't an invention — that pace, that humor, that community really does exist here.",
        ],
      },
      {
        heading: "Natchitoches in the larger Louisiana story",
        body: [
          "Natchitoches matters to a Louisiana lifestyle brand for the same reason small-town Louisiana matters in general: the state isn't only its big cities. The towns along the Cane River, the bayous, the prairies, and the piney woods hold versions of Louisiana culture that have survived longer and changed less than what's happening in the metros.",
          "Future Second Line Clothing collections will look beyond the obvious cities to towns like Natchitoches — places where Louisiana's history, food, and culture are quietly intact and worth wearing on a shirt.",
        ],
      },
    ],
  },
];

export function getCityHubBySlug(slug: string): CityHub | undefined {
  return CITY_HUBS.find((c) => c.slug === slug);
}
