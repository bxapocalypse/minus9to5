import childCareIcon from './images/Find_a_Preschool_Program_icon.svg'
import educationIcon from './images/Kindergarten_Class_icon.svg'
import parentIcon from './images/Families_icon.svg'
import newsIcon from './images/In_the_News_icon.svg'

//Icons

import netIcon from './images/Baby-Toddler_Related_Networking_icon.svg'
import impactIcon from './images/Baby-Toddler_Related_Impact_icon.svg'
import commuteIcon from './images/Baby-Toddler_Community_icon.svg'

//work images
import work1 from './images/teddybear.png'
import work2 from './images/baby-dad.jpeg'
import work3 from './images/girl-learning.jpeg'
import work4 from './images/girl-playing.jpeg'
import work5 from './images/meeting.jpeg'
import work6 from './images/three-gears.jpeg'

export const quickLinks = [
  {
    id: 1,
    name: 'Childcare/Kindergarten',
    href: 'resources/ready_set_register',
    img: childCareIcon,
  },
  {
    id: 2,
    name: 'Educators/Directors',
    href: 'resources/ready_region_southeastern',
    img: educationIcon,
  },
  {
    id: 3,
    name: 'Parent Resources',
    href: 'resources/parenting_resources',
    img: parentIcon,
  },
  {
    id: 4,
    name: 'Minus 9 to 5 in the News',
    href: 'resources/news',
    img: newsIcon,
  },
]

export const mainNav = [
  { id: 1, name: 'HOME', href: '/' },
  { id: 2, name: 'ABOUT US', href: 'about' },
  { id: 3, name: 'WORKING GROUPS', href: 'working' },
  { id: 4, name: 'RESOURCES', href: 'resources' },
]

export const hamburgerNav = [
  { id: 1, name: 'HOME', href: 'Home' },
  { id: 2, name: 'ABOUT US', href: 'About' },
  { id: 3, name: 'WORKING GROUPS', href: 'Work' },
  { id: 4, name: 'RESOURCES', href: 'Resources' },
]

export const homeIcons = [
  {
    id: 1,
    icon: netIcon,
    text: 'Learn about our network of more than 100 community members and local organizations.',
    btnTxt: 'WHO WE ARE',
    href: 'about/Who',
  },
  {
    id: 2,
    icon: impactIcon,
    text: 'See how we use collective impact to unite a diverse group to work towards common goals.',
    btnTxt: 'HOW WE WORK',
    href: 'about/How',
  },
  {
    id: 3,
    icon: commuteIcon,
    text: 'Explore the nine indicators we use to measure our progress and evaluate our impact.',
    btnTxt: 'OUR IMPACT',
    href: 'about/Impact',
  },
]

export const working = [
  {
    id: 1,
    title: 'Healthy Homes, Healthy Children',
    img: work1,
    href: 'working/healthy',
  },
  {
    id: 2,
    title: 'Thriving Families',
    img: work2,
    href: 'working/thriving',
  },
  {
    id: 3,
    title: 'Community Connections',
    img: work3,
    href: 'working/community',
  },
  {
    id: 4,
    title: 'Early Learning and Development',
    img: work4,
    href: 'working/early',
  },
  {
    id: 5,
    title: 'Data and Knowledge Sharing',
    img: work5,
    href: 'working/data',
  },
  {
    id: 6,
    title: 'Policy and Advocacy',
    img: work6,
    href: 'working/policy',
  },
]
