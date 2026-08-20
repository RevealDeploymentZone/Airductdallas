export interface AreaData {
  city: string;
  slug: string;
  county: string;
  intro: string;
  neighborhoods: string[];
  housingNotes: string;
  localAngle: string;
  driveNote: string;
}

export const AREA_DATA: AreaData[] = [
  {
    city: "Dallas",
    slug: "dallas",
    county: "Dallas County",
    intro: "AL Air Duct Cleaning Dallas provides professional air duct cleaning, dryer vent cleaning, and HVAC cleaning throughout the City of Dallas — from Uptown and the Arts District to Oak Cliff, Lake Highlands, Lakewood, and Far North Dallas. Same-day service available.",
    neighborhoods: ["Uptown", "Oak Lawn", "Lakewood", "East Dallas", "Lake Highlands", "Preston Hollow", "Oak Cliff", "Design District", "Deep Ellum", "Richardson (Dallas portion)"],
    housingNotes: "Dallas's housing stock spans seven decades of construction. Older homes in Lakewood and Lake Highlands feature original sheet-metal ductwork that's durable but accumulates debris in horizontal runs over time. Preston Hollow estates often have complex multi-zone systems requiring more comprehensive cleaning. Uptown and Design District condominiums typically have shorter duct runs but require careful access coordination.",
    localAngle: "Dallas sits at the center of DFW's air quality challenges. The city issues regular ozone action day advisories from May through October, and the urban heat island effect makes indoor air quality even more important during Dallas's long summer. Mountain cedar pollen from the Hill Country deposits heavily across the city in January and February, entering homes through any gap in the building envelope and accumulating in duct systems.",
    driveNote: "We're based in the Dallas metro area and serve all Dallas ZIP codes with no travel charge.",
  },
  {
    city: "Plano",
    slug: "plano",
    county: "Collin County",
    intro: "AL Air Duct Cleaning Dallas provides residential and commercial duct cleaning throughout Plano, TX. From West Plano neighborhoods near Legacy Town Center to established east Plano communities, we serve the full city with same-day scheduling and 24/7 availability.",
    neighborhoods: ["West Plano", "East Plano", "Legacy area", "Willow Bend", "Hunters Cove", "McDermott Road corridor", "Parker Road corridor"],
    housingNotes: "Plano's housing stock is predominantly from the late 1980s through the 2000s — a mix of flex-duct systems installed in attic space and older homes with rigid metal ductwork. Many Plano homes near major employers in the Legacy corridor are single-story ranch-style homes with accessible attic ductwork that can be inspected thoroughly before cleaning begins. Larger two-story homes in West Plano often have more complex return air configurations.",
    localAngle: "Plano's location in Collin County puts it at the intersection of rapid growth and established suburban neighborhoods. The city sits adjacent to active construction zones as development pushes further north — silica and construction particulate from those sites enters homes in the area during high-wind events. Plano also sees heavy pollen loads from the mature oaks and cedars planted throughout established neighborhoods.",
    driveNote: "Plano is within our core DFW service area. No travel charge applies.",
  },
  {
    city: "Frisco",
    slug: "frisco",
    county: "Collin County",
    intro: "AL Air Duct Cleaning Dallas serves homeowners and businesses throughout Frisco, TX — one of the fastest-growing cities in the United States. New construction, active development, and modern flex-duct systems make Frisco homes particularly well-suited for professional duct cleaning.",
    neighborhoods: ["The Star area", "Frisco Square", "Stonebriar", "Eldorado area", "Phillips Creek Ranch", "Richland area", "Panther Creek"],
    housingNotes: "Frisco is predominantly newer construction — most homes were built from 2000 onward, with significant inventory from 2010–2024. Nearly all use flexible duct systems installed in attic space. These systems are efficient when new, but Frisco's extreme attic temperatures (140°F+ in July and August) stress flex duct connections over time, leading to leaks that allow attic air and insulation particles to enter the supply air. We check and document every flex duct connection we encounter.",
    localAngle: "Frisco's rapid growth creates a specific indoor air quality challenge: the city is surrounded by active construction on multiple fronts at any given time. Construction dust — particularly fine silica and drywall particulate — enters homes through windows, doors, and air infiltration during construction activity nearby. Homes built within the last 3–5 years in new Frisco developments often have significant post-construction debris in their duct systems from the construction phase itself.",
    driveNote: "Frisco is within our core DFW service area. No travel charge applies.",
  },
  {
    city: "Irving",
    slug: "irving",
    county: "Dallas County",
    intro: "AL Air Duct Cleaning Dallas provides residential and commercial air duct cleaning throughout Irving, TX — including Las Colinas, Valley Ranch, and all Irving neighborhoods. Same-day service available.",
    neighborhoods: ["Las Colinas", "Valley Ranch", "North Irving", "South Irving", "University of Dallas area", "MacArthur Park"],
    housingNotes: "Irving has a diverse housing mix — from 1960s and 1970s homes in South Irving with original sheet-metal ductwork to newer construction in Las Colinas and Valley Ranch with modern flex-duct systems. Commercial properties in the Las Colinas urban center require commercial-grade equipment and typically involve rooftop unit (RTU) systems rather than central ducted residential configurations. We bring appropriate equipment for both.",
    localAngle: "Irving's position adjacent to DFW Airport means higher particulate loads from aircraft activity and the associated ground traffic. Las Colinas and Valley Ranch sit near significant commercial development and infrastructure projects, adding construction dust to the air quality mix. Irving's older residential areas often have systems that haven't been serviced in many years.",
    driveNote: "Irving is within our core DFW service area. No travel charge applies.",
  },
  {
    city: "Garland",
    slug: "garland",
    county: "Dallas County",
    intro: "AL Air Duct Cleaning Dallas serves homeowners and businesses throughout Garland, TX. From established neighborhoods near downtown Garland to newer developments in north Garland, we provide thorough duct cleaning with same-day availability.",
    neighborhoods: ["Downtown Garland area", "Duck Creek area", "Naaman's Creek", "Sachse border area", "Firewheel area", "Centerville Road corridor"],
    housingNotes: "Garland's housing stock spans the 1950s through the 2000s, with significant inventory from the 1970s and 1980s. Many Garland homes have original sheet-metal ductwork that's structurally sound but holds years of accumulated debris. Older homes in Garland often have undersized return air systems — a common design limitation of that era — which we note in our findings.",
    localAngle: "Garland's established tree canopy — particularly its mature oak population along Duck Creek and in older neighborhoods — contributes to significant spring pollen loads. The city's manufacturing history means some neighborhoods have higher baseline particulate loads in outdoor air, making indoor duct system condition more important for families with respiratory sensitivities.",
    driveNote: "Garland is within our core DFW service area. No travel charge applies.",
  },
  {
    city: "Richardson",
    slug: "richardson",
    county: "Dallas County",
    intro: "AL Air Duct Cleaning Dallas provides professional air duct cleaning throughout Richardson, TX — a dense suburban city with a mix of mid-century and newer homes across the Telecom Corridor area.",
    neighborhoods: ["Arapaho Village area", "Buckingham area", "Breckinridge Park area", "Collins Road corridor", "Jupiter Road corridor"],
    housingNotes: "Richardson's housing stock is predominantly 1960s through 1980s construction — single-story and two-story homes with original or early-replacement sheet-metal duct systems. These systems are well-suited for thorough cleaning and typically maintain results for 4–6 years. Many Richardson homes near the Telecom Corridor have had only minimal maintenance on their HVAC systems, making cleaning particularly impactful.",
    localAngle: "Richardson's proximity to multiple major tech employers and the University of Texas at Dallas means the city has a high proportion of renters and owner-occupants who prioritize indoor environment quality. The city's active road network and proximity to US-75 and I-635 contributes to higher roadway particulate in the outdoor air, which enters homes and accumulates in duct systems.",
    driveNote: "Richardson is within our core DFW service area. No travel charge applies.",
  },
  {
    city: "Arlington",
    slug: "arlington",
    county: "Tarrant County",
    intro: "AL Air Duct Cleaning Dallas serves Arlington, TX — the entertainment corridor city between Dallas and Fort Worth. Residential duct cleaning, commercial service, and dryer vent cleaning across all Arlington neighborhoods.",
    neighborhoods: ["Entertainment District area", "South Arlington", "North Arlington", "Mansfield border area", "Green Oaks area", "Dalworthington Gardens area"],
    housingNotes: "Arlington has one of the most diverse housing stocks in DFW — from 1950s and 1960s homes in central Arlington to 1990s suburban development in north Arlington to newer construction near AT&T Stadium. The entertainment district's commercial properties include stadium-adjacent hotels, retail, and restaurants that require commercial-grade HVAC service. Residential homes vary considerably by age and duct configuration.",
    localAngle: "Arlington sits between Dallas and Fort Worth in Tarrant County, experiencing air quality conditions from both urban centers. The city's position in the eastern portion of the Fort Worth metro means it receives fine particle pollution from the industrial corridor along the Trinity River. High event-day traffic around Globe Life Field and AT&T Stadium can temporarily increase particulate in the area.",
    driveNote: "Arlington is within our DFW service area. No travel charge applies to Arlington addresses.",
  },
  {
    city: "McKinney",
    slug: "mckinney",
    county: "Collin County",
    intro: "AL Air Duct Cleaning Dallas provides residential and commercial duct cleaning throughout McKinney, TX. From the historic downtown area to new construction neighborhoods on the north and east edges of the city, we serve all of McKinney.",
    neighborhoods: ["Historic downtown McKinney area", "Stonebridge Ranch", "Trinity Falls", "Craig Ranch", "Eldorado Parkway corridor", "Highways 380 and 121 growth areas"],
    housingNotes: "McKinney's housing stock is bimodal: a core of older homes in and around historic downtown (some 80–100 years old with original or early-replacement ductwork) and a massive band of new construction from 2005 to the present in master-planned communities like Stonebridge Ranch and Trinity Falls. The new construction segment predominantly uses flexible duct systems in unconditioned attic space — the standard Texas configuration. Older downtown homes often have interesting duct routing challenges.",
    localAngle: "McKinney is one of the fastest-growing cities in the United States, and that growth creates a persistent air quality challenge for existing residents. Construction activity is continuous in and around the city — dozens of subdivision and commercial projects are active at any time. Fine construction particulate enters homes throughout the city, not just in adjacent neighborhoods, during high-wind events. Stonebridge Ranch and other large master-planned developments also have significant irrigation lake systems that can contribute to humidity and mold pressure in summer.",
    driveNote: "McKinney is within our core DFW service area. No travel charge applies.",
  },
];
