import logo1 from "../assets/heroLogos/amazon.png";
import logo2 from "../assets/heroLogos/dribbble.png";
import logo3 from "../assets/heroLogos/hubspot.png";
import logo4 from "../assets/heroLogos/netflix.png";
import logo5 from "../assets/heroLogos/notion.png";
import logo6 from "../assets/heroLogos/zoom.png";

import card1 from "../assets/services/card1.svg";
import card2 from "../assets/services/card2.svg";
import card3 from "../assets/services/card3.svg";
import card4 from "../assets/services/card4.svg";
import card5 from "../assets/services/card5.svg";
import card6 from "../assets/services/card6.svg";

import link1 from "../assets/services/link1.png";
import link2 from "../assets/services/link2.png";
import link3 from "../assets/services/link3.png";
import link4 from "../assets/services/link4.png";
import link5 from "../assets/services/link5.png";
import link6 from "../assets/services/link6.png";

import person1 from "../assets/teamLogos/person1.svg";
import person2 from "../assets/teamLogos/person2.svg";
import person3 from "../assets/teamLogos/person3.svg";
import person4 from "../assets/teamLogos/person4.svg";
import person5 from "../assets/teamLogos/person5.svg";
import person6 from "../assets/teamLogos/person6.svg";

import icon1 from "../assets/footerIcons/linkedIn.png";
import icon2 from "../assets/footerIcons/facebook.png";
import icon3 from "../assets/footerIcons/twitter.png";

const menuItems = [
  {
    name: "About us",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Use Cases",
    href: "#use-cases",
  },
  {
    name: "Team",
    href: "#team",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

const logoCarousels = [
  {
    imgPath: logo1,
    name: "amazon",
  },
  {
    imgPath: logo2,
    name: "dribbble",
  },
  {
    imgPath: logo3,
    name: "hubspot",
  },
  {
    imgPath: logo4,
    name: "netflix",
  },
  {
    imgPath: logo5,
    name: "notion",
  },
  {
    imgPath: logo6,
    name: "zoom",
  },
];

const servicesData = [
  {
    id: 1,
    title1: "Search engine",
    title2: "optimization",
    imgPath: card1,
    backgroundColor: "bg-tartiary",
    foregroundColor: "bg-primary",
    textColor: "text-secondary",
    linkColor: "text-black",
    imgLink: link1,
  },
  {
    id: 2,
    title1: "Pay-per-click",
    title2: "advertising",
    imgPath: card2,
    backgroundColor: "bg-primary",
    foregroundColor: "bg-white",
    textColor: "text-secondary",
    linkColor: "text-black",
    imgLink: link2,
  },
  {
    id: 3,
    title1: "Social Media",
    title2: "Marketing",
    imgPath: card3,
    backgroundColor: "bg-black",
    foregroundColor: "bg-white",
    textColor: "text-secondary",
    linkColor: "text-white",
    imgLink: link3,
  },
  {
    id: 4,
    title1: "Email",
    title2: "Marketing",
    imgPath: card4,
    backgroundColor: "bg-tartiary",
    foregroundColor: "bg-primary",
    textColor: "text-secondary",
    linkColor: "text-black",
    imgLink: link4,
  },
  {
    id: 5,
    title1: "Content",
    title2: "Creation",
    imgPath: card5,
    backgroundColor: "bg-primary",
    foregroundColor: "bg-white",
    textColor: "text-secondary",
    linkColor: "text-black",
    imgLink: link5,
  },
  {
    id: 6,
    title1: "Analytics and ",
    title2: "Tracking",
    imgPath: card6,
    backgroundColor: "bg-[#191A23]",
    foregroundColor: "bg-primary",
    textColor: "text-secondary",
    linkColor: "text-white",
    imgLink: link6,
  },
];

const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    link: "#",
    imgPath: link1,
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    link: "#",
    imgPath: link1,
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    link: "#",
    imgPath: link1,
  },
];

const processSteps = [
  {
    number: "01",
    question: "Consultation",
    answer:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    question: "Research and Strategy Development",
    answer:
      "We conduct thorough research to develop a customized marketing strategy that aligns with your goals and objectives.",
  },
  {
    number: "03",
    question: "Implementation",
    answer:
      "Our team will execute the strategy with precision, ensuring all aspects are carried out effectively.",
  },
  {
    number: "04",
    question: "Monitoring and Optimization",
    answer:
      "We continuously monitor the performance of the implemented strategy and make adjustments as needed to maximize results.",
  },
  {
    number: "05",
    question: "Reporting and Communication",
    answer:
      "Regular reports and open communication keep you informed about the progress and success of the marketing efforts.",
  },
  {
    number: "06",
    question: "Continual Improvement",
    answer:
      "We are committed to ongoing optimization and improvement to ensure your marketing strategy evolves with your business.",
  },
];

const teamCards = [
  {
    id: 1,
    name: "John Smith",
    prof: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    imgPath: person1,
  },
  {
    id: 2,
    name: "Jane Doe",
    prof: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    imgPath: person2,
  },
  {
    id: 3,
    name: "Michael Brown",
    prof: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    imgPath: person3,
  },
  {
    id: 4,
    name: "Emily Johnson",
    prof: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    imgPath: person4,
  },
  {
    id: 5,
    name: "Brian Williams",
    prof: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    imgPath: person5,
  },
  {
    id: 6,
    name: "Sarah Kim",
    prof: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    imgPath: person6,
  },
];

const testimonialCards = [
  {
    id: 1,
    text: "This service is fantastic! My business has seen remarkable growth since we started using it.",
    name: "- John Doe",
  },
  {
    id: 2,
    text: "Working with this team was a game changer! Creative content and real results. Highly recommend!",
    name: "- Emily Carter",
  },
  {
    id: 3,
    text: "Professional ! Their social media and content strategies truly elevated our brand presence.",
    name: "- James Walker",
  },
  {
    id: 4,
    text: "Their creative approach brought our online presence to the next level.",
    name: "- Olivia Bennett",
  },
  {
    id: 5,
    text: "Impressive results! The team's strategy and execution exceeded expectations.",
    name: "- Ethan Parker",
  },
  {
    id: 6,
    text: "Highly reliable! Their content and social media work made a real impact.",
    name: "- Isabella Reed",
  },
  {
    id: 7,
    text: "Great collaboration! They understood our vision and delivered excellent results.",
    name: "- Mason Clarke",
  },
];

const footerNavs = [
  {
    index: 1,
    name: "About us",
    href: "#about",
  },
  {
    index: 2,
    name: "Services",
    href: "#services",
  },
  {
    index: 3,
    name: "Use Cases",
    href: "#use-cases",
  },
  {
    index: 4,
    name: "Pricing",
    href: "#pricing",
  },
  {
    index: 5,
    name: "Blog",
    href: "#blog",
  },
];

const footerIcons = [
  {
    index: 1,
    href: "#",
    imgPath: icon1,
  },
  {
    index: 2,
    href: "#",
    imgPath: icon2,
  },
  {
    index: 3,
    href: "#",
    imgPath: icon3,
  },
];
export {
  menuItems,
  logoCarousels,
  servicesData,
  caseStudies,
  processSteps,
  teamCards,
  testimonialCards,
  footerNavs,
  footerIcons,
};
