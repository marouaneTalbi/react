import axios from "axios";

export  function getChaines() {
    return fetch('http://localhost:3100/chaines')
    .then(response => response.json())
    .catch(error => {
    console.error('Une erreur est survenue lors de la récupération des chaines:', error);
    throw error;
    });
}

export function getUrlUpdatedVideosFromTelechargement() {
    return fetch('http://localhost:3100/videos')
    .then(response => response.json())
    .catch(error => {
    console.error('Une erreur est survenue lors de la récupération la list des videos modifiés', error);
    throw error;
    });
}

export  function getEmissions() {
    return fetch('http://localhost:3100/emissions')
    .then(response => response.json())
    .catch(error => {
    console.error('Une erreur est survenue lors de la récupération des Missions:', error);
    throw error;
    });
}

export  function getVideosFromBdd() {
    return fetch('http://localhost:3100/updated_videos')
    .then(response => response.json())
    .catch(error => {
    console.error('Une erreur est survenue lors de la récupération des  videos modifiés:', error);
    throw error;
    });
}

export  function getVideo(videoName) {
    return fetch(`http://localhost:3100/videos/${videoName}`, {
        method: 'GET',
        responseType: 'blob'
      })
        .then(response => response.blob())
        .then(videoBlob => {
          const blob = new Blob([videoBlob], { type: 'video/mp4' });
          const videoUrl = URL.createObjectURL(blob);
          return videoUrl;
        })
        .catch(error => {
          console.error(error);
          throw error;
        });
}

// export async function uploadVideo(formData) {
//     return fetch('http://localhost:3100/api/upload', {
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Erreur lors de la requête vers le serveur');
//       }
//       console.log('Côté client', response);
//     })
//     .catch(error => {
//       console.log(error)
//     });
// }

export function insertUpdatedVideo(video, filename) {

  return  axios.post('http://localhost:3100/updated_videos',{
      name: video.name,
      url: filename,
      chaine_id: video.chaine_id,
      emission_id: video.id,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la requête vers le serveur');
      }
    })
    .catch(error => {
      console.log(error)
    });

}