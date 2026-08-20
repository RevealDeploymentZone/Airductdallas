export const BUSINESS = {
  name: "AL Air Duct Cleaning Dallas",
  legalName: "TODO: LEGAL ENTITY NAME",
  phone: "(214) 555-0198",
  phoneRaw: "+12145550198",
  email: "info@dallas.alairductcleaning.com",
  streetAddress: "", // Service-area business — no fixed street address
  city: "Dallas",
  state: "TX",
  stateFull: "Texas",
  zip: "75201",
  country: "US",
  lat: 32.7767,
  lng: -96.797,
  hours: "Open 24 hours, 7 days a week",
  yearsInBusiness: "TODO: YEARS IN BUSINESS",
  jobsCompleted: "TODO: JOBS COMPLETED",
  // WARNING: reviewCount and reviewAverage must be real, verifiable numbers pulled
  // from your Google Business Profile or Yelp listing. Do NOT invent these.
  // If not yet available, set both to null and the rating schema + hero stars will be omitted.
  reviewCount: null as number | null,
  reviewAverage: null as number | null,
  domain: "https://dallas.alairductcleaning.com",
  social: {
    facebook: null as string | null,    // TODO: Facebook page URL
    googleMaps: null as string | null,  // TODO: Google Business Profile URL
    yelp: null as string | null,        // TODO: Yelp listing URL
  },
  licenses: {
    // TODO: Look up your TDLR Air Conditioning Contractor licence number at tdlr.texas.gov
    tdlrHvac: null as string | null,
    // TODO: Look up your TDLR Mold Remediation Contractor licence number at tdlr.texas.gov
    // If null, the mold page will describe inspection and cleaning only — NOT remediation.
    tdlrMold: null as string | null,
    // TODO: NADCA member ID — find at nadca.com/find-a-member
    nadca: null as string | null,
  },
};

export const SERVICES = [
  {
    slug: "air-duct-cleaning",
    name: "Air Duct Cleaning",
    shortDesc: "Full system negative-pressure cleaning of all supply and return ducts, registers, and plenums.",
    icon: "Wind",
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    shortDesc: "Lint removal from duct to exterior cap — the single most effective way to prevent dryer fires.",
    icon: "Flame",
  },
  {
    slug: "hvac-cleaning",
    name: "HVAC Cleaning",
    shortDesc: "Coil, blower, and air handler cleaning to restore system efficiency and airflow.",
    icon: "Settings",
  },
  {
    slug: "residential-air-duct-cleaning",
    name: "Residential Duct Cleaning",
    shortDesc: "Home-focused service designed around DFW single-family housing, townhomes, and condos.",
    icon: "Home",
  },
  {
    slug: "commercial-air-duct-cleaning",
    name: "Commercial Duct Cleaning",
    shortDesc: "Office buildings, restaurants, retail spaces, and multi-unit properties across DFW.",
    icon: "Building2",
  },
  {
    slug: "sanitization-deodorization",
    name: "Sanitization & Deodorization",
    shortDesc: "EPA-registered antimicrobial treatment applied after cleaning to neutralize odors and inhibit microbial growth.",
    icon: "Sparkles",
  },
  {
    slug: "mold-inspection-removal",
    name: "Mold Inspection & Removal",
    shortDesc: "Visual inspection, air sampling, and duct cleaning for mold-affected systems in DFW homes.",
    icon: "ShieldCheck",
  },
];

export const SERVICE_AREAS = [
  { city: "Dallas", slug: "dallas", county: "Dallas County" },
  { city: "Plano", slug: "plano", county: "Collin County" },
  { city: "Frisco", slug: "frisco", county: "Collin County" },
  { city: "Irving", slug: "irving", county: "Dallas County" },
  { city: "Garland", slug: "garland", county: "Dallas County" },
  { city: "Richardson", slug: "richardson", county: "Dallas County" },
  { city: "Arlington", slug: "arlington", county: "Tarrant County" },
  { city: "McKinney", slug: "mckinney", county: "Collin County" },
  { city: "Mesquite", slug: "mesquite", county: "Dallas County" },
  { city: "Carrollton", slug: "carrollton", county: "Dallas County" },
  { city: "Grand Prairie", slug: "grand-prairie", county: "Dallas County" },
  { city: "Allen", slug: "allen", county: "Collin County" },
  { city: "Rockwall", slug: "rockwall", county: "Rockwall County" },
  { city: "Denton", slug: "denton", county: "Denton County" },
  { city: "Fort Worth", slug: "fort-worth", county: "Tarrant County" },
  { city: "Highland Park", slug: "highland-park", county: "Dallas County" },
  { city: "University Park", slug: "university-park", county: "Dallas County" },
  { city: "Addison", slug: "addison", county: "Dallas County" },
  { city: "Farmers Branch", slug: "farmers-branch", county: "Dallas County" },
  { city: "Duncanville", slug: "duncanville", county: "Dallas County" },
  { city: "DeSoto", slug: "desoto", county: "Dallas County" },
  { city: "Cedar Hill", slug: "cedar-hill", county: "Dallas County" },
  { city: "Lancaster", slug: "lancaster", county: "Dallas County" },
  { city: "Wylie", slug: "wylie", county: "Collin County" },
  { city: "Sunnyvale", slug: "sunnyvale", county: "Dallas County" },
];
