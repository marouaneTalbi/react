
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const emissions = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
    return [
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid1.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:1
          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid2.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:1

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid3.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:1

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid4.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:1

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid5.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:1

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid1.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:2

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid2.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:2

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid3.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:2

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid4.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:2

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid5.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:2

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid1.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:3

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid2.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:3

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid3.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:3

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid4.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:3

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid5.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:3

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid1.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:4

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid2.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:4

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid3.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:4

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid4.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:4

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid5.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:4

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid1.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:5

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid2.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:5

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid3.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:5

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid4.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:5

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid5.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:5

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid1.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:6

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid2.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:6
          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid3.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:6
          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid4.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:6

          },
          {
            id: faker.datatype.uuid(),
            cover: `/assets/images/img/vid${setIndex}.jpg`,
            url:`/assets/videos/vid5.mp4`,
            title: `titre${setIndex}`,
            createdAt: faker.date.past(),
            view: faker.datatype.number(),
            comment: faker.datatype.number(),
            share: faker.datatype.number(),
            favorite: faker.datatype.number(),
            author: {
              name: faker.name.fullName(),
              avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
            },
            chaine_id:6
          },

    ]

  });

export default emissions;



