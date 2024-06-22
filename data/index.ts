import Link from "next/link";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Credential & Cookies malware",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BOTNET Masterclass",
    des: "Learn efficient spamming techniques with our comprehensive Botnet Masterclass, perfect for both professionals and enthusiasts.",
    img: "/z1.png",
    link: "/ui.botnet.com",
  },
  {
    id: 2,
    title: "Live VC Softwares",
    des: "Simplify your video conferencing experience with deepfak full-body and static software. Seamlessly connect and build trust with colleagues and friends.",
    img: "/z2.png",
    link: "/ui.deepfake.com",
  },
  {
    id: 3,
    title: "Website Development",
    des: "Unleash a digital storm with our web development, bulletproof banking sites, law firm, corporate hubs, mining platforms, portfolios, and blogs.",
    img: "/z3.png",
    link: "/ui.websitedevelopment.com",
  },
  {
    id: 4,
    title: "Voice Changer/Call Spoofing",
    des: "Enhance your calls with RealTime Voice Changer, seamlessly transforming voice inputs into female or male voices and various accents of your choice.",
    img: "/z4.png",
    link: "/ui.voice.com",
  },
  {
    id: 5,
    title: "Cookies Hijacker",
    des: "Exploit cookie hijacking to gain unauthorized access and manipulate user data, bypass OTP and gain full control over targeted accounts.",
    img: "/z5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.cookieshijacking.com",
  },
  {
    id: 6,
    title: "RTX Gaming Laptops",
    des: "Unlock peak performance with RTX Gaming Laptops, designed to maximize efficiency across our suite of software solutions.",
    img: "/z6.png",
    link: "/ui.laptop.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Horizon Ginx was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Horizon's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Sophia Davis",
    title: "Lead Developer at CodeCraft Ltd.",
  },
  {
    quote:
      "Using Cookies Hijacker, we meticulously combed through our system and uncovered a significant security loophole that, if left unchecked, could have potentially resulted in severe consequences for our organization. It's exhilarating to take charge, leveraging this tool to ensure our data remains safeguarded and our operations secure.",
    name: "Jonathan Soris",
    title: "CEO of Tech Innovators",
  },
  {
    quote:
      "I'm thoroughly impressed by how seamlessly integrated and user-friendly Deepfake Live Video Call is. It has truly revolutionized my approach to video calls and presentations, allowing me to explore new realms of creativity and engagement. With this innovative tool at my fingertips, I can effortlessly enhance my presentations with captivating visuals and engaging content, making each interaction memorable and impactful. It's a game-changer in how I connect with my audience, offering endless possibilities for storytelling and communication that resonate long after the call ends",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "The Botnet Masterclass has equipped me with the expertise to confidently detect and mitigate botnet attacks, safeguarding our digital assets effectively. This investment in knowledge has strengthened our cybersecurity defenses and ensures the ongoing protection of our organization's critical infrastructure.",
    name: "Michael Brown",
    title: "Client",
  },
  {
    quote:
      "Partnering with Horizon ginz for our website redesign was transformative. Their team not only understood our vision but also brought it to life with creative flair and technical excellence. The result is a stunning digital presence that captures our brand essence and engages our audience effortlessly.",
    name: "David Wilson",
    title: "DFounder of Creative Solutions",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Played a major role in the design and development of a web-based platform using React.js, Next.js, and TypeScript, significantly enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    desc: "Designed mobile apps for both iOS and Android platforms using Adobe XD, Figma, and created mockups with Adobe Photoshop.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Graphic Designer",
    desc: "Directed the creative design process for numerous clients, overseeing everything from contract signing and initial concept development to final execution.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer",
    desc: "Develop and implement robust security solutions to protect systems and data from cyber threats, ensuring the integrity and confidentiality of digital assets и наоборот.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
    link: "https://instagram.com/thehorizonginx",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
