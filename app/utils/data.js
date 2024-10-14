import { BriefcaseBusiness, ShieldCheck, DollarSign, Factory, Lightbulb, Images, Building, Usb, ChartNoAxesCombined, RefreshCcw, Recycle, Users} from 'lucide-react';
import { title } from 'process';

export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about', key: 'about', label: 'About Us' },
    { href: '/services', key: 'service', label: 'Services' },

    { href: '/contact', key: 'contact', label: 'Contact' },
  ];


export const ITEMS = [
  {
    icons: 'https://tinypic.host/images/2024/10/13/freepik-export-20241013124818bAhM.jpeg',
    title: 'Human Resources Planning',
    description: 'Quema Consulting would help evaluate your firm’s present and future demands for various types of labour and attempt to match the demand with the supply of job applicants. ',
  },
  {
    icons: 'https://tinypic.host/images/2024/10/11/tenweb_media_CcuLf4EL.webp',
    title: 'Recruitment & Selection Process',
    description: 'Quema Consulting is committed to employing the best qualified candidates while engaging in recruitment and selection practices that comply with all applicable employment laws.',
  },
  {
    icons: 'https://tinypic.host/images/2024/10/13/freepik-export-202410131230271oRy.jpeg',
    title: 'Job Analysis',
    description: 'Job analysis is the process of gathering and analyzing information about the content and the human requirements of jobs, as well as, the context in which jobs are performed.',
  },
  {
    icons: 'https://tinypic.host/images/2024/10/13/freepik-export-202410131239441j5p.jpeg',
    title: 'Performance Management',
    description: 'Quema Consulting will help the customer to measure their organizational strategic objectives with their operational objective',
  },
  {
    icons: 'https://tinypic.host/images/2024/10/11/tenweb_media_tZxnz09g.webp',
    title: 'Compensation & Benefits',
    description: 'Quema Consulting will set the guidelines for the organization to develop the employee’s career and help to achieve a high retention rate within the organization to do the following tasks',
  },

]


export const MIDDLE = [
  {
    icons: <Building />,  // This can be replaced with a more relevant HR icon
    title: 'Leadership Development',
    description: 'Empowering leaders through tailored training and mentorship programs to drive organizational success.'
  },
  {
    icons: <Usb />,  // This can be replaced with an icon like a "Team" or "Users"
    title: 'Employee Engagement',
    description: 'Fostering a culture of engagement through initiatives that improve employee satisfaction and retention.'
  },
  {
    icons: <ChartNoAxesCombined />,  // Can be replaced with a "Graph" or "Growth" icon
    title: 'Performance Management',
    description: 'Optimizing employee performance through continuous feedback, goal-setting, and structured reviews.'
  },
  {
    icons: <RefreshCcw />,  // Can be replaced with a "Sync" or "Cycle" icon
    title: 'Organizational Alignment',
    description: 'Ensuring that your business objectives are aligned with workforce capabilities to drive efficiency and results.'
  },
];


export const BOTTOM = [
  {
    icons: <ChartNoAxesCombined />,  // Icon for performance management or data analysis
    title: 'Performance Analysis',
    description: 'We provide comprehensive analysis of employee performance to identify key areas for improvement and ensure alignment with your business goals.'
  },
  {
    icons: <Recycle />,  // Icon for resilience or organizational sustainability
    title: 'Resilience & Adaptability',
    description: 'Our resilience training helps organizations and employees adapt to change, ensuring a strong, agile workforce that can thrive in dynamic environments.'
  },
  {
    icons: <Users />,  // Icon for collaboration and teamwork
    title: 'Team Collaboration',
    description: 'Facilitate seamless collaboration across teams with tailored strategies that enhance communication, productivity, and project success.'
  },
];

