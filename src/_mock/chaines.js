import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const nomsChaine = ['TF1','FRANCE 1','FRANCE 2','M6','Canal +','MTV', 'mdmd']

const chaines = [...Array(6)].map((_, index) => (
  
  {
    id: `${index + 1}`,
    image: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    isVerified: faker.datatype.boolean(),
    name: nomsChaine[index + 1],
    status: sample(['active', 'banned']),

}));



export default chaines;



