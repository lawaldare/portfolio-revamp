export interface Project {
  name: string;
  imageURL: string;
  stack: string;
  viewLink: string;
  repoLink: string;
  desc: string;
}

export interface Job {
  title: string;
  companyName: string;
  location: string;
  date: string;
  dateStart: string;
  dateEnd: string;
  themeColor: string;
}

export interface Paper {
  title: string;
  venue: string;
  link: string;
}

export interface Social {
  kind: 'github' | 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'mail' | 'phone';
  label: string;
  link: string;
}

export interface Daily {
  name: string;
  link: string;
  repo: string;
}

export const projects: Project[] = [
  {
    name: 'Molecular Structure Viewer',
    imageURL: 'images/msv.png',
    stack: 'angular',
    viewLink: 'https://cif-molstar-viewer-angular.vercel.app/',
    repoLink: 'https://github.com/lawaldare/cif-molstar-viewer-angular',
    desc: 'View molecular structures from a given .cif file — built with Angular and the Mol* library for 3D rendering.',
  },
  {
    name: 'Postcode Lookup',
    imageURL: 'images/postcode.png',
    stack: 'angular',
    viewLink: 'https://host-app-theta.vercel.app/',
    repoLink: 'https://github.com/lawaldare/host-app',
    desc: 'Search UK addresses by postcode, built with Angular.',
  },
  {
    name: 'Infinite Scroll Gallery',
    imageURL: 'images/isga.png',
    stack: 'angular',
    viewLink: 'https://infinite-scroll-gallery-jet.vercel.app/',
    repoLink: 'https://github.com/lawaldare/infinite-scroll-gallery',
    desc: 'An infinite-scroll image gallery built with Angular 20 and signals.',
  },
  {
    name: 'QR Code Generator',
    imageURL: 'images/qr-code.png',
    stack: 'angular',
    viewLink: 'https://qrcodeform.netlify.app/',
    repoLink: 'https://github.com/lawaldare/qrcode',
    desc: 'Generate a QR code for any text or URL — Angular 20 and signals.',
  },
  {
    name: 'Ecommerce',
    imageURL: 'images/ecommerce.png',
    stack: 'angular',
    viewLink: 'https://ecommerce-angular-ngrx.vercel.app/',
    repoLink: 'https://github.com/lawaldare/ecommerce-angular-ngrx',
    desc: 'An Amazon-style ecommerce application built with Angular and NgRx for state management.',
  },
  {
    name: 'YouTube Trending Videos',
    imageURL: 'images/youtube.png',
    stack: 'angular',
    viewLink: 'https://youtube-trending-video-repo.vercel.app/',
    repoLink: 'https://github.com/lawaldare/youtube-trending-video-repo',
    desc: "Browse YouTube's trending videos from any country — Angular 16 with signals.",
  },
  {
    name: 'Countries With Themes',
    imageURL: 'images/countries.png',
    stack: 'angular',
    viewLink: 'https://countries-theme-switch.vercel.app',
    repoLink: 'https://github.com/lawaldare/countries-theme-switch',
    desc: 'Details for 250+ countries with dark/light mode, search, and region filtering.',
  },
  {
    name: 'Clock',
    imageURL: 'images/clock.jpg',
    stack: 'javascript',
    viewLink: 'https://lawaldare.github.io/clock/',
    repoLink: 'https://github.com/lawaldare/clock',
    desc: 'A real-time analogue clock.',
  },
  {
    name: 'ThreeJS Animation',
    imageURL: 'images/animation.png',
    stack: 'animation',
    viewLink: 'https://threejs-portfolio-homepage.netlify.app/',
    repoLink: 'https://threejs-portfolio-homepage.netlify.app/',
    desc: 'A 3D animation experiment using Three.js and WebGL.',
  },
  {
    name: 'Expense Tracker',
    imageURL: 'images/expense-tracker.png',
    stack: 'angular',
    viewLink: 'https://expense-tracker-pi-sable.vercel.app/',
    repoLink: 'https://github.com/lawaldare/expenseTracker',
    desc: 'Track expenses and income at a glance.',
  },
  {
    name: 'Neumorphic Calculator',
    imageURL: 'images/calculator.png',
    stack: 'javascript',
    viewLink: 'https://lawaldare.github.io/neumorphic-calculator/',
    repoLink: 'https://github.com/lawaldare/neumorphic-calculator',
    desc: 'A calculator with a neumorphic design.',
  },
  {
    name: 'Mentor Coven',
    imageURL: 'images/mentor.jpg',
    stack: 'javascript',
    viewLink: 'https://mentor-coven.netlify.app/',
    repoLink: 'https://mentor-coven.netlify.app/',
    desc: 'Landing page for a mentorship website.',
  },
  {
    name: 'College Website',
    imageURL: 'images/college.png',
    stack: 'javascript',
    viewLink: 'https://lawaldare.github.io/college-website/',
    repoLink: 'https://github.com/lawaldare/college-website',
    desc: 'Landing page for a college website.',
  },
  {
    name: 'Bookstore',
    imageURL: 'images/bookstore.png',
    stack: 'angular',
    viewLink: 'https://bookstore-angular-bice.vercel.app/',
    repoLink: 'https://github.com/lawaldare/bookstore-angular',
    desc: 'Search for books online from the Google Books store.',
  },
  {
    name: 'Weather App',
    imageURL: 'images/weather.png',
    stack: 'angular',
    viewLink: 'https://weather-sigma-inky.vercel.app/',
    repoLink: 'https://github.com/lawaldare/weather',
    desc: 'Current weather for any city in the world.',
  },
  {
    name: 'Color Game',
    imageURL: 'images/color-game.jpg',
    stack: 'javascript',
    viewLink: 'https://lawaldare.github.io/color-game/',
    repoLink: 'https://github.com/lawaldare/color-game',
    desc: 'Pick the color matching a random RGB value — easy and hard modes.',
  },
  {
    name: 'Mealy App',
    imageURL: 'images/mealy.png',
    stack: 'angular',
    viewLink: 'https://meal-angular-repo.vercel.app/',
    repoLink: 'https://github.com/lawaldare/meal-angular-repo',
    desc: 'A random meal with its history, ingredients, and a video on how to prepare it.',
  },
  {
    name: 'Train With Talia',
    imageURL: 'images/trainwithtalia.jpg',
    stack: 'wordpress',
    viewLink: 'https://trainwithtalia.com/',
    repoLink: 'https://trainwithtalia.com/',
    desc: 'Website for a physical fitness coach based in California, USA.',
  },
  {
    name: 'Data Info',
    imageURL: 'images/data-info.png',
    stack: 'angular',
    viewLink: 'https://data-info-blush.vercel.app/',
    repoLink: 'https://github.com/lawaldare/data-info',
    desc: 'Displays JSONPlaceholder data with filtering and pagination.',
  },
  {
    name: 'Data Warehouse',
    imageURL: 'images/data-warehouse.png',
    stack: 'javascript',
    viewLink: 'https://data-warehouse-2021.netlify.app/',
    repoLink: 'https://github.com/lawaldare/data-warehouse',
    desc: 'Landing page for a data warehouse company.',
  },
  {
    name: 'Bitcoin Calculator',
    imageURL: 'images/bitcoin.png',
    stack: 'angular',
    viewLink: 'https://bitcoin-angular.vercel.app/',
    repoLink: 'https://github.com/lawaldare/bitcoin-angular',
    desc: 'Know your current bitcoin position — profit or not.',
  },
  {
    name: 'Github Search',
    imageURL: 'images/github.png',
    stack: 'angular',
    viewLink: 'https://github-search-angular-rho.vercel.app/',
    repoLink: 'https://github.com/lawaldare/github-search-angular',
    desc: 'Search any GitHub account by username and explore its details and followers.',
  },
  {
    name: 'Shortly',
    imageURL: 'images/shortly.png',
    stack: 'angular',
    viewLink: 'https://shortly-black.vercel.app/',
    repoLink: 'https://github.com/lawaldare/shortly',
    desc: 'Shorten long URLs with hashed keys.',
  },
  {
    name: 'PJ Confidential',
    imageURL: 'images/pjconfidential.png',
    stack: 'wordpress',
    viewLink: 'https://pjconfidential.com/',
    repoLink: 'https://pjconfidential.com/',
    desc: 'An ecommerce website.',
  },
];

export const jobs: Job[] = [
  {
    title: 'Frontend Engineer',
    companyName: 'European Bioinformatics Institute | EMBL-EBI',
    location: 'Cambridge, United Kingdom',
    date: 'June, 2024 - Present',
    dateStart: '2024-06-01',
    dateEnd: '',
    themeColor: '#7b68ee',
  },
  {
    title: 'Frontend Engineer',
    companyName: 'Mida Technologies',
    location: 'Delaware, United States',
    date: 'June, 2025 - September, 2025',
    dateStart: '2025-06-01',
    dateEnd: '2025-09-30',
    themeColor: '#49ccf9',
  },
  {
    title: 'Senior Frontend Engineer',
    companyName: 'EPG Financial Services Ltd',
    location: 'Sliema, Malta',
    date: 'April, 2024 - June, 2024',
    dateStart: '2024-04-01',
    dateEnd: '2024-06-30',
    themeColor: '#fd71af',
  },
  {
    title: 'Frontend Engineer',
    companyName: 'Betsson Group',
    location: 'Ta`Xbiex, Malta',
    date: 'July, 2023 - April, 2024',
    dateStart: '2023-07-01',
    dateEnd: '2024-04-30',
    themeColor: '#00b884',
  },
  {
    title: 'Frontend Engineer',
    companyName: 'Origin Markets',
    location: 'London, United Kingdom',
    date: 'March, 2022 - June, 2023',
    dateStart: '2022-03-01',
    dateEnd: '2023-06-30',
    themeColor: '#7b68ee',
  },
  {
    title: 'Frontend Engineer',
    companyName: 'Code & Care',
    location: 'Kharkiv, Ukraine',
    date: 'September, 2021 - March, 2022',
    dateStart: '2021-09-01',
    dateEnd: '2022-03-31',
    themeColor: '#fd7171',
  },
  {
    title: 'Frontend Engineer',
    companyName: 'Renmoney MFB',
    location: 'Lagos, Nigeria',
    date: 'March, 2020 - March, 2022',
    dateStart: '2020-03-01',
    dateEnd: '2022-03-31',
    themeColor: '#49ccf9',
  },
  {
    title: 'Frontend Engineer',
    companyName: 'Tr1pp',
    location: 'London, United Kingdom',
    date: 'July, 2021 - November, 2021',
    dateStart: '2021-07-01',
    dateEnd: '2021-11-30',
    themeColor: '#fd71af',
  },
  {
    title: 'Wordpress Developer',
    companyName: 'NXT Factor',
    location: 'New York, USA',
    date: 'October, 2019 - June, 2021',
    dateStart: '2019-10-01',
    dateEnd: '2021-06-30',
    themeColor: '#ffc800',
  },
  {
    title: 'Frontend Engineer',
    companyName: 'Terragon Group',
    location: 'Lagos, Nigeria',
    date: 'June, 2019 - February, 2020',
    dateStart: '2019-07-01',
    dateEnd: '2020-02-28',
    themeColor: '#fd7171',
  },
  {
    title: 'Math Tutor',
    companyName: 'Phoebestar Royalty Schools',
    location: 'Osogbo, Nigeria',
    date: 'October 2014 - July 2018',
    dateStart: '2014-10-01',
    dateEnd: '2018-07-31',
    themeColor: '#49ccf9',
  },
];

export const papers: Paper[] = [
  {
    title:
      'PDBe-KB Complexes: Enabling Functional Insight from Macromolecular Complexes in the PDB',
    venue: 'SSRN',
    link: 'https://ssrn.com/abstract=5688656',
  },
  {
    title: 'PDBe: enhanced structural data exploration to facilitate discovery',
    venue: 'Nucleic Acids Research',
    link: 'https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkaf1120/8376690',
  },
  {
    title:
      'AlphaFold Protein Structure Database 2025: a redesigned interface and updated structural coverage',
    venue: 'Nucleic Acids Research',
    link: 'https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkaf1226/8340156',
  },
];

export const socials: Social[] = [
  { kind: 'github', label: 'GitHub', link: 'https://github.com/lawaldare' },
  { kind: 'linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/dare-lawal/' },
  { kind: 'twitter', label: 'Twitter / X', link: 'https://twitter.com/lawaldarekayode' },
  { kind: 'instagram', label: 'Instagram', link: 'https://www.instagram.com/lawaldarekayode/' },
  { kind: 'facebook', label: 'Facebook', link: 'https://www.facebook.com/lawal.dare' },
  { kind: 'mail', label: 'Email', link: 'mailto:lawaldare@gmail.com' },
  { kind: 'phone', label: 'Phone', link: 'tel:+2349051450310' },
];

export const dailies: Daily[] = [
  { name: 'Pricing Plan', link: 'https://daily-projects.github.io/Loop-1---Step-1/', repo: 'https://github.com/daily-projects/Loop-1---Step-1' },
  { name: 'Payment Screen', link: 'https://daily-projects.github.io/Loop-1---Step-2/', repo: 'https://github.com/daily-projects/Loop-1---Step-2' },
  { name: 'Order Confirmation', link: 'https://priceless-kare-72c3cc.netlify.app/', repo: 'https://github.com/daily-projects/Loop-1---Step-3' },
  { name: 'Messenger', link: 'https://daily-projects.github.io/Loop-1---Step-4/', repo: 'https://github.com/daily-projects/Loop-1---Step-4' },
  { name: 'Boarding Pass', link: 'https://daily-projects.github.io/Loop-1---Step-5/', repo: 'https://github.com/daily-projects/Loop-1---Step-5' },
  { name: 'Login Screen', link: 'https://daily-projects.github.io/Loop-1---Step-6/', repo: 'https://github.com/daily-projects/Loop-1---Step-6' },
  { name: 'Blog Post', link: 'https://daily-projects.github.io/Loop-1---Step-7/', repo: 'https://github.com/daily-projects/Loop-1---Step-7' },
  { name: 'Travel Guide', link: 'https://daily-projects.github.io/Loop-1---Step-8/', repo: 'https://github.com/daily-projects/Loop-1---Step-8' },
  { name: 'Wallet', link: 'https://daily-projects.github.io/Loop-1---Step-9/', repo: 'https://github.com/daily-projects/Loop-1---Step-9' },
  { name: 'Apple Watch', link: 'https://daily-projects.github.io/apple-watch/', repo: 'https://github.com/daily-projects/apple-watch' },
  { name: 'Wash Cycle', link: 'https://daily-projects.github.io/wash-cycle/', repo: 'https://github.com/daily-projects/wash-cycle' },
  { name: 'Account Settings', link: 'https://daily-projects.github.io/account-settings/', repo: 'https://github.com/daily-projects/account-settings' },
  { name: 'The Menu', link: 'https://daily-projects.github.io/the-menu/', repo: 'https://github.com/daily-projects/the-menu' },
  { name: 'Progress Navigation', link: 'https://daily-projects.github.io/quick-change-tab/', repo: 'https://github.com/daily-projects/quick-change-tab' },
  { name: 'Smart Timer', link: 'https://daily-projects.github.io/smart-timer/', repo: 'https://github.com/daily-projects/smart-timer' },
  { name: 'Toggles', link: 'https://daily-projects.github.io/toggles/', repo: 'https://github.com/daily-projects/toggles' },
  { name: 'Toggling Tabs', link: 'https://daily-projects.github.io/toggling-tabs/', repo: 'https://github.com/daily-projects/toggling-tabs' },
  { name: 'Step Progress', link: 'https://daily-projects.github.io/step-progress/', repo: 'https://github.com/daily-projects/step-progress' },
  { name: 'Sidebar', link: 'https://daily-projects.github.io/sidebar/', repo: 'https://github.com/daily-projects/sidebar' },
  { name: 'Custom Video Player', link: 'https://daily-projects.github.io/video-player/', repo: 'https://github.com/daily-projects/video-player' },
];

export const stackChips: string[] = [
  'Angular',
  'TypeScript',
  'JavaScript',
  'RxJS',
  'NgRx',
  'Signals',
  'HTML5',
  'CSS / SCSS',
  'GraphQL',
  'Nx',
  'WordPress',
];
