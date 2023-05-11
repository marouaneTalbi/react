import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const VIDEOS_NAME = [
  'Video 1',
  'Video 2',
  'Video 3',
  'Video 4',
  'Video 6',
];
const VIDEOS_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const vidseos = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    id: faker.datatype.uuid(),

    name: VIDEOS_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 4, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && VIDEOS_COLOR.slice(0, 2)) ||
      (setIndex === 2 && VIDEOS_COLOR.slice(1, 3)) ||
      (setIndex === 3 && VIDEOS_COLOR.slice(2, 4)) ||
      (setIndex === 4 && VIDEOS_COLOR.slice(3, 6)) ||
      (setIndex === 23 && VIDEOS_COLOR.slice(4, 6)) ||
      (setIndex === 24 && VIDEOS_COLOR.slice(5, 6)) ||
      VIDEOS_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

const POST_TITLES = [
  'Whiteboard Templates By Industry Leaders',
  'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
  'Designify Agency Landing Page Design',
  '✨What is Done is Done ✨',
  'Fresh Prince',
  'Six Socks Studio',
  'vincenzo de cotiis’ crossing over showcases a research on contamination',
  'Simple, Great Looking Animations in Your Project | Video Tutorial',
  '40 Free Serif Fonts for Digital Designers',
  'Examining the Evolution of the Typical Web Design Client',
  'Katie Griffin loves making that homey art',
  'The American Dream retold through mid-century railroad graphics',
  'Illustration System Design',
  'CarZio-Delivery Driver App SignIn/SignUp',
  'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
  'Tylko Organise effortlessly -3D & Motion Design',
  'RAYO ?? A expanded visual arts festival identity',
  'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
  'Inside the Mind of Samuel Day',
  'Portfolio Review: Is This Portfolio Too Creative?',
  'Akkers van Margraten',
  'Gradient Ticket icon',
  'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
  'How to Animate a SVG with border-image',
];
const videos = [...Array(5)].map((_, index) => {
const setIndex = index + 1;
  
  return {
  id: faker.datatype.uuid(),
  cover: `/assets/images/img/vid${setIndex}.jpg`,
  url:`/assets/videos/vid${setIndex}.mp4`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}});

export default videos;
