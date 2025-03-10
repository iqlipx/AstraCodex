import { Resource } from "../types";

export const resources: Resource[] = [
  // Search Engines

  {
    id: "google",
    title: "Google",
    description:
      "The worlds most popular search engine, providing web, image, and news searches.",
    url: "https://www.google.com/",
    category: "search-engines",
    tags: ["web", "search", "popular"],
  },
  {
    id: "bing",
    title: "Bing",
    description:
      "Microsofts search engine, offering web, image, and video searches.",
    url: "https://www.bing.com/",
    category: "search-engines",
    tags: ["web", "search", "Microsoft"],
  },
  {
    id: "yahoo",
    title: "Yahoo",
    description: "A web search engine and news aggregator powered by Bing.",
    url: "https://www.yahoo.com/",
    category: "search-engines",
    tags: ["web", "search", "news"],
  },
  {
    id: "duckduckgo",
    title: "DuckDuckGo",
    description: "A privacy-focused search engine that does not track users.",
    url: "https://duckduckgo.com/",
    category: "search-engines",
    tags: ["privacy", "search", "anonymous"],
  },
  {
    id: "brave",
    title: "Brave Search",
    description: "A privacy-first search engine built into the Brave browser.",
    url: "https://search.brave.com/",
    category: "search-engines",
    tags: ["privacy", "search", "ad-free"],
  },
  {
    id: "yandex",
    title: "Yandex",
    description: "Russia most popular search engine with AI-powered results.",
    url: "https://yandex.com/",
    category: "search-engines",
    tags: ["Russia", "search", "AI"],
  },
  {
    id: "wayback",
    title: "Wayback Machine",
    description:
      "A digital archive of the web that allows users to see past versions of websites.",
    url: "https://web.archive.org/",
    category: "search-engines",
    tags: ["archive", "history", "web"],
  },
  {
    id: "baidu",
    title: "Baidu",
    description:
      "The leading search engine in China, offering web and AI-driven searches.",
    url: "https://www.baidu.com/",
    category: "search-engines",
    tags: ["China", "search", "AI"],
  },
  {
    id: "ecosia",
    title: "Ecosia",
    description:
      "An eco-friendly search engine that plants trees with ad revenue.",
    url: "https://www.ecosia.org/",
    category: "search-engines",
    tags: ["eco-friendly", "search", "trees"],
  },
  {
    id: "startpage",
    title: "Startpage",
    description:
      "A privacy-focused search engine that delivers Google results without tracking.",
    url: "https://www.startpage.com/",
    category: "search-engines",
    tags: ["privacy", "Google", "search"],
  },
  {
    id: "13tabs",
    title: "13Tabs",
    description:
      "An Indian search engine focused on privacy and unbiased search results.",
    url: "https://www.13tabs.com/",
    category: "search-engines",
    tags: ["India", "privacy", "search"],
  },
  {
    id: "qmamu",
    title: "Qmamu",
    description:
      "An Indian-made search engine providing web, news, and AI-powered search results.",
    url: "https://qmamu.com/",
    category: "search-engines",
    tags: ["India", "search", "AI"],
  },

  // Attack Surface Engine

  {
    id: "shodan",
    title: "Shodan",
    description: "Search engine for discovering internet-connected devices and vulnerabilities.",
    url: "https://www.shodan.io/",
    category: "target-surface",
    tags: ["devices", "security", "OSINT"]
  },
  {
    id: "censys",
    title: "Censys",
    description: "Search engine for finding devices, networks, and certificates.",
    url: "https://search.censys.io/",
    category: "target-surface",
    tags: ["certificates", "devices", "security"]
  },
  {
    id: "binaryedge",
    title: "BinaryEdge",
    description: "Attack surface discovery platform that scans the internet for exposed assets and vulnerabilities.",
    url: "https://www.binaryedge.io/",
    category: "target-surface",
    tags: ["security", "vulnerabilities", "OSINT"]
  },
  {
    id: "zoomeye",
    title: "ZoomEye",
    description: "Cyberspace search engine that scans for open services and vulnerabilities.",
    url: "https://www.zoomeye.org/",
    category: "target-surface",
    tags: ["network", "vulnerabilities", "security"]
  },
  {
    id: "fullhunt",
    title: "FullHunt",
    description: "Attack surface management platform for discovering exposed assets.",
    url: "https://fullhunt.io/",
    category: "target-surface",
    tags: ["attack-surface", "security", "OSINT"]
  },
  {
    id: "greynoise",
    title: "GreyNoise",
    description: "Threat intelligence platform that analyzes internet-wide scanning activity.",
    url: "https://viz.greynoise.io/",
    category: "target-surface",
    tags: ["threat-intelligence", "security"]
  },
  {
    id: "securitytrails",
    title: "SecurityTrails",
    description: "Domain and IP intelligence platform for security research.",
    url: "https://securitytrails.com/",
    category: "target-surface",
    tags: ["domains", "IP", "security"]
  },
  {
    id: "criminalip",
    title: "Criminal IP",
    description: "Threat intelligence and attack surface analysis platform.",
    url: "https://www.criminalip.io/en",
    category: "target-surface",
    tags: ["threat-intelligence", "security", "OSINT"]
  },
  {
    id: "hunter-how",
    title: "Hunter.how",
    description: "Attack surface discovery and OSINT tool for cybersecurity research.",
    url: "https://hunter.how/",
    category: "target-surface",
    tags: ["OSINT", "attack-surface", "security"]
  },
  {
    id: "fofa",
    title: "FOFA",
    description: "Cybersecurity search engine for finding internet-exposed assets.",
    url: "https://en.fofa.info/",
    category: "target-surface",
    tags: ["network", "security", "OSINT"]
  },
  {
    id: "hudsonrock",
    title: "Hudson Rock",
    description: "Threat intelligence and cybercrime tracking tool.",
    url: "https://www.hudsonrock.com/threat-intelligence-cybercrime-tools",
    category: "target-surface",
    tags: ["threat-intelligence", "cybercrime", "security"]
  },

  // Business Recon

  {
    id: "crunchbase",
    title: "Crunchbase",
    description: "Business intelligence platform providing company insights, funding, and leadership details.",
    url: "https://www.crunchbase.com/",
    category: "business-recon",
    tags: ["companies", "startups", "intelligence"]
  },
  {
    id: "opencorporates",
    title: "OpenCorporates",
    description: "Largest open database of companies worldwide, providing corporate records and ownership details.",
    url: "https://opencorporates.com/",
    category: "business-recon",
    tags: ["companies", "corporate-data", "OSINT"]
  },
  {
    id: "dnb",
    title: "Dun & Bradstreet (D&B)",
    description: "Global business directory offering financial, risk, and corporate data insights.",
    url: "https://www.dnb.com/",
    category: "business-recon",
    tags: ["corporate", "finance", "risk-intelligence"]
  },
  {
    id: "gleif",
    title: "GLEIF",
    description: "Global Legal Entity Identifier Foundation (GLEIF) search for corporate LEIs.",
    url: "https://search.gleif.org/#/search/",
    category: "business-recon",
    tags: ["LEI", "corporate", "finance"]
  },
  {
    id: "openleis",
    title: "Open LEIs",
    description: "Search for Legal Entity Identifiers (LEIs) of registered businesses worldwide.",
    url: "http://openleis.com/",
    category: "business-recon",
    tags: ["LEI", "corporate", "OSINT"]
  },
  {
    id: "bizdirlib",
    title: "BizDirLib",
    description: "Global business directory providing company listings by country.",
    url: "https://bizdirlib.com/country",
    category: "business-recon",
    tags: ["directory", "corporate", "OSINT"]
  },
  {
    id: "panjiva",
    title: "Panjiva",
    description: "Global trade intelligence platform tracking import/export shipments.",
    url: "https://panjiva.com/search",
    category: "business-recon",
    tags: ["trade", "import-export", "OSINT"]
  },
  {
    id: "opensanctions",
    title: "OpenSanctions",
    description: "Database of sanctioned individuals, organizations, and entities worldwide.",
    url: "https://www.opensanctions.org/",
    category: "business-recon",
    tags: ["sanctions", "risk", "finance"]
  },
  {
    id: "tendersinfo",
    title: "Tendersinfo",
    description: "Global database for government and private sector tenders and procurement opportunities.",
    url: "https://www.tendersinfo.com/",
    category: "business-recon",
    tags: ["tenders", "procurement", "contracts"]
  },
  {
    id: "propublica-nonprofits",
    title: "ProPublica Nonprofits",
    description: "Database of U.S. nonprofit organizations with financial and operational details.",
    url: "https://projects.propublica.org/nonprofits/",
    category: "business-recon",
    tags: ["nonprofits", "finance", "OSINT"]
  },

  // Username Search
  {
    id: "sherlock",
    title: "Sherlock",
    description:
      "Hunt down social media accounts by username across social networks.",
    url: "https://github.com/sherlock-project/sherlock",
    category: "username-search",
    tags: ["username", "social-media", "python"],
  },
  {
    id: "maigret",
    title: "Maigret",
    description:
      "Collects a dossier on a person by username from thousands of sites.",
    url: "https://github.com/soxoj/maigret",
    category: "username-search",
    tags: ["OSINT", "username", "social-media"],
  },
  {
    id: "whatsmyname",
    title: "WhatsMyName",
    description: "Username enumeration across multiple platforms.",
    url: "https://whatsmyname.app",
    category: "username-search",
    tags: ["username", "enumeration"],
  },
  {
    id: "socialcatfish",
    title: "Social Catfish",
    description:
      "Find people online by username, email, phone, or image search.",
    url: "https://socialcatfish.com/",
    category: "username-search",
    tags: ["people-search", "social-media", "OSINT"],
  },
  {
    id: "blackbird",
    title: "Blackbird",
    description:
      "Username search tool that analyzes social media platforms for user profiles.",
    url: "https://github.com/p1ngul1n0/blackbird",
    category: "username-search",
    tags: ["OSINT", "username", "social-media"],
  },
  {
    id: "192com",
    title: "192.com",
    description:
      "UK-based people search tool providing addresses, phone numbers, and business records.",
    url: "https://www.192.com/",
    category: "username-search",
    tags: ["UK", "public-records", "address-search"],
  },
  {
    id: "bellingcat-name-variant",
    title: "Bellingcat Name Variant Search",
    description:
      "Searches multiple name variations across different languages.",
    url: "https://bellingcat.github.io/name-variant-search",
    category: "username-search",
    tags: ["name-search", "OSINT", "variant-analysis"],
  },
  {
    id: "fastpeoplesearch",
    title: "Fast People Search",
    description:
      "Finds people addresses, phone numbers, and email records in the US.",
    url: "https://www.fastpeoplesearch.com/",
    category: "username-search",
    tags: ["public-records", "phone-search", "US"],
  },
  {
    id: "intelx-username",
    title: "IntelX Username Search",
    description:
      "Find usernames across multiple data sources with IntelX tools.",
    url: "https://intelx.io/tools?tab=username",
    category: "username-search",
    tags: ["username", "OSINT", "dark-web"],
  },
  {
    id: "intelx-person",
    title: "IntelX Person Search",
    description: "Searches for people using IntelX intelligence database.",
    url: "https://intelx.io/tools?tab=person",
    category: "username-search",
    tags: ["OSINT", "public-records", "dark-web"],
  },
  {
    id: "publicrecords-searchsystems",
    title: "Public Records Search Systems",
    description:
      "Search for public records, including business, criminal, and government data.",
    url: "https://publicrecords.searchsystems.net/",
    category: "username-search",
    tags: ["public-records", "business", "government"],
  },

  // Temporary Services
  {
    id: "temp-mail",
    title: "Temp Mail",
    description: "Temporary, disposable email service.",
    url: "https://temp-mail.org",
    category: "temp-services",
    tags: ["temp-email", "temporary", "privacy"],
  },
  {
    id: "simplelogin",
    title: "SimpleLogin",
    description: "Anonymous email alias service for privacy and security.",
    url: "https://simplelogin.io/",
    category: "temp-services",
    tags: ["temp-email", "privacy", "security"]
  },
  {
    id: "guerrillamail",
    title: "Guerrilla Mail",
    description: "Free temporary email address with self-destructing messages.",
    url: "https://www.guerrillamail.com/",
    category: "temp-services",
    tags: ["temp-email", "anonymous", "disposable"]
  },
  {
    id: "10minutemail",
    title: "10 Minute Mail",
    description: "Quickly generate disposable email addresses that last for 10 minutes.",
    url: "https://10minutemail.com/",
    category: "temp-services",
    tags: ["temp-email", "temporary", "disposable"]
  },
  {
    id: "anonymousemail",
    title: "Anonymous Email",
    description: "Send anonymous emails without revealing your identity.",
    url: "https://anonymousemail.me/",
    category: "temp-services",
    tags: ["anonymous", "email", "privacy"]
  },
  {
    id: "tempumail",
    title: "TempuMail",
    description: "Temporary business email service for short-term communication.",
    url: "https://tempumail.com/temp-business-mail",
    category: "temp-services",
    tags: ["temp-email", "business", "disposable"]
  },
  {
    id: "receive-sms",
    title: "Receive SMS Online",
    description: "Free temporary phone numbers for receiving SMS.",
    url: "https://receive-smss.com",
    category: "temp-services",
    tags: ["SMS", "temp-phone", "verification"],
  },
  {
    id: "temp-number",
    title: "Temp Number",
    description: "Receive SMS with temporary phone numbers worldwide.",
    url: "https://temp-number.com/",
    category: "temp-services",
    tags: ["temp-phone", "SMS", "privacy"]
  },
  {
    id: "indiannumber",
    title: "IndianNumber",
    description: "Temporary Indian phone numbers for receiving OTPs and SMS.",
    url: "https://indiannumber.com/",
    category: "temp-services",
    tags: ["temp-phone", "India", "OTP"]
  },
  {
    id: "indiannumber-temp",
    title: "IndianNumber Temp",
    description: "Get free temporary Indian phone numbers for SMS verification.",
    url: "https://indiannumber.com/temp-number/india/",
    category: "temp-services",
    tags: ["temp-phone", "India", "disposable"]
  },
  {
    id: "sms24",
    title: "SMS24",
    description: "Public temporary phone numbers for receiving SMS verification codes.",
    url: "https://sms24.me/en",
    category: "temp-services",
    tags: ["temp-phone", "SMS", "disposable"]
  },

  // Indian Vehcile Recon
  {
    id: "vehicleinfo",
    title: "VehicleInfo",
    description: "Search vehicle registration details using RC number lookup.",
    url: "https://vehicleinfo.app/rc-search",
    category: "vehicle-recon",
    tags: ["RC lookup", "registration", "India"]
  },
  {
    id: "carinfo",
    title: "CarInfo",
    description: "Vehicle registration search providing RC details and owner information.",
    url: "https://www.carinfo.app/rc-search",
    category: "vehicle-recon",
    tags: ["car", "RC lookup", "India"]
  },
  {
    id: "knowvehicledetail",
    title: "Know Vehicle Detail",
    description: "RTO vehicle information search for registration and ownership details.",
    url: "https://know.vehicledetail.info/rto-vehicle-information/",
    category: "vehicle-recon",
    tags: ["RTO", "registration", "India"]
  },
  {
    id: "policybazaar-rto",
    title: "PolicyBazaar RTO",
    description: "Find vehicle owner details using RTO registration number.",
    url: "https://www.policybazaar.com/rto/vehicle-owner-details/",
    category: "vehicle-recon",
    tags: ["insurance", "RTO", "India"]
  },
  {
    id: "transportbook",
    title: "TransportBook",
    description: "Vahan Info database for checking vehicle details and history.",
    url: "https://transportbook.in/features/vahan-info",
    category: "vehicle-recon",
    tags: ["vahan", "vehicle-history", "India"]
  },
  {
    id: "rtovehicledetails",
    title: "RTO Vehicle Details",
    description: "Search RTO vehicle details including registration and insurance status.",
    url: "https://rtovehicledetails.com/",
    category: "vehicle-recon",
    tags: ["RTO", "registration", "India"]
  },
  {
    id: "parivahan",
    title: "Parivahan Vahan Search",
    description: "Official Government of India portal for vehicle registration details.",
    url: "https://vahan.parivahan.gov.in/vahanservice",
    category: "vehicle-recon",
    tags: ["RTO", "registration", "India", "government"]
  },

  // Code Search

  {
    id: "codefinder-dev",
    title: "CodeFinder",
    description: "Search code snippets and repositories across the web.",
    url: "https://codefinder.dev/",
    category: "code-search",
    tags: ["code", "search", "repositories"]
  },
  {
    id: "grepapp",
    title: "Grep.app",
    description: "Fast, indexed search of open-source repositories.",
    url: "https://grep.app/",
    category: "code-search",
    tags: ["code", "search", "open-source"]
  },
  {
    id: "searchcode",
    title: "SearchCode",
    description: "Search engine for source code, APIs, and code snippets.",
    url: "https://searchcode.com/",
    category: "code-search",
    tags: ["code", "search", "APIs"]
  },
  {
    id: "sourcebot",
    title: "SourceBot",
    description: "Advanced code search engine for finding code snippets and libraries.",
    url: "https://www.sourcebot.dev/search",
    category: "code-search",
    tags: ["code", "search", "libraries"]
  },
  {
    id: "sourcegraph",
    title: "Sourcegraph",
    description: "Universal code search for finding and fixing issues across repositories.",
    url: "https://sourcegraph.com/search",
    category: "code-search",
    tags: ["code", "search", "repositories"]
  },
  {
    id: "publicwww",
    title: "PublicWWW",
    description: "Source code search engine for web technologies and APIs.",
    url: "https://publicwww.com/",
    category: "code-search",
    tags: ["code", "search", "web-technologies"]
  },
  {
    id: "codefinder-org",
    title: "CodeFinder.org",
    description: "Global search engine for code snippets and programming resources.",
    url: "https://codefinder.org/",
    category: "code-search",
    tags: ["code", "search", "programming"]
  },

  // Sock Puppet

  {
    id: "thispersondoesnotexist",
    title: "This Person Does Not Exist",
    description: "AI-generated human faces using GAN technology, perfect for creating fake profiles.",
    url: "https://thispersondoesnotexist.com/",
    category: "sock-puppet",
    tags: ["sock-puppet", "AI", "fake profile", "identity"]
  },
  {
    id: "fakenamegenerator",
    title: "Fake Name Generator",
    description: "Generate complete fake identities including names, addresses, and more for online anonymity.",
    url: "http://fakenamegenerator.com/",
    category: "sock-puppet",
    tags: ["sock-puppet", "fake identity", "anonymity"]
  },
  {
    id: "fakeidentitygenerator",
    title: "Fake Identity Generator",
    description: "Quickly create a fake identity for online use, ideal for background checks and sock puppet accounts.",
    url: "https://backgroundchecks.org/justdeleteme/fake-identity-generator/",
    category: "sock-puppet",
    tags: ["sock-puppet", "fake identity", "identity"]
  },
  {
    id: "biographygenerator",
    title: "Biography Generator",
    description: "Create fictional biographies for characters or online personas using random details.",
    url: "https://www.character-generator.org.uk/bio/",
    category: "sock-puppet",
    tags: ["sock-puppet", "biography", "persona", "character"]
  },
  {
    id: "bighugelabs",
    title: "Big Huge Labs",
    description: "An easy-to-use tool for creating personalized ID cards, press passes, name tags, and badges.",
    url: "https://bighugelabs.com/badge.php",
    category: "sock-puppet",
    tags: ["sock-puppet", "name generation", "creative", "identity"]
  },
  {
    id: "bannerbear",
    title: "Bannerbear ID Card Generator",
    description: "Generate realistic event ID cards and badges to enhance your sock puppet profiles.",
    url: "https://www.bannerbear.com/generators/free-online-event-id-card-generator/",
    category: "sock-puppet",
    tags: ["sock-puppet", "ID card", "badge", "identity"]
  },
  {
    id: "thisxdoesnotexist",
    title: "This X Does Not Exist",
    description: "Generate a variety of AI-generated content—from images to text—for creating unique online personas.",
    url: "https://thisxdoesnotexist.com/",
    category: "sock-puppet",
    tags: ["sock-puppet", "AI", "fake content", "identity"]
  },
  {
    id: "behindthename",
    title: "Behind The Name Random",
    description: "Generate random names and identities based on real-world naming conventions for authentic sock puppet profiles.",
    url: "https://www.behindthename.com/random/",
    category: "sock-puppet",
    tags: ["sock-puppet", "name generation", "random", "identity"]
  },
  {
    id: "randomuser",
    title: "RandomUser",
    description: "A random user data generator for creating comprehensive fake profiles, including names and addresses.",
    url: "https://randomuser.me/",
    category: "sock-puppet",
    tags: ["sock-puppet", "fake identity", "profile", "data generation"]
  },




  // Techniques
  {
    id: "osint-case-studies",
    title: "OSINT Tools & Techniques with Case Studies",
    description: "A comprehensive video explaining various OSINT tools and techniques through illustrative case studies.",
    url: "https://www.youtube.com/watch?v=eFstzrL4ETU",
    category: "techniques",
    tags: ["OSINT", "tools", "techniques", "case studies", "youtube"]
  },
  {
    id: "invisible-online",
    title: "How to Be Invisible Online Using Expert OSINT Techniques",
    description: "David Bombal explains techniques and tools for maintaining online anonymity using OSINT methods.",
    url: "https://www.youtube.com/watch?v=QzmWzslT6QM&t=3606s",
    category: "techniques",
    tags: ["OSINT", "anonymity", "privacy", "youtube", "David Bombal"]
  },
  {
    id: "instagram-osint",
    title: "Instagram OSINT for Private Accounts",
    description: "Cybersudo demonstrates methods for gathering information from private Instagram accounts using OSINT techniques.",
    url: "https://www.youtube.com/watch?v=Mb8rlOFtGck",
    category: "techniques",
    tags: ["OSINT", "Instagram", "private accounts", "youtube", "Cybersudo"]
  },
  {
    id: "osint-tips",
    title: "10 Minute (or less!) OSINT Tips",
    description: "A playlist of quick and practical OSINT tips and tricks, each under 10 minutes.",
    url: "https://www.youtube.com/playlist?list=PL423I_gHbWUUOs09899rex4t2l5py9YIk",
    category: "techniques",
    tags: ["OSINT", "tips", "quick guides", "short tutorials", "playlist"]
  },



  // Case Studies
  {
    id: "bellingcat-cases",
    title: "Bellingcat Investigation Cases",
    description: "Notable OSINT investigations by Bellingcat.",
    url: "https://www.bellingcat.com/category/resources/case-studies/",
    category: "case-studies",
    tags: ["investigation", "methodology", "real-world"],
  },
  {
    id: "maltego-cases",
    title: "Maltego OSINT Case Studies",
    description: "Collection of OSINT case studies showcasing Maltego's investigation capabilities.",
    url: "https://www.maltego.com/categories/case-studies/",
    category: "case-studies",
    tags: ["OSINT", "case studies", "Maltego", "investigation"]
 },

  
];
