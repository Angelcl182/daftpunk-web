import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

// Sustituye los diseños tipográficos por las portadas de los cuatro álbumes.
const albumCovers = [
  {
    selector: '.cover-homework',
    src: '/album_covers/homework.jpg',
    alt: 'Portada del álbum Homework de Daft Punk'
  },
  {
    selector: '.cover-discovery',
    src: '/album_covers/discovery.jpg',
    alt: 'Portada del álbum Discovery de Daft Punk'
  },
  {
    selector: '.cover-human',
    src: '/album_covers/human.jpg',
    alt: 'Portada del álbum Human After All de Daft Punk'
  },
  {
    selector: '.cover-ram',
    src: '/album_covers/ram.jpg',
    alt: 'Portada del álbum Random Access Memories de Daft Punk'
  }
];

albumCovers.forEach(({ selector, src, alt }) => {
  const cover = document.querySelector(selector);
  if (!cover) return;

  cover.replaceChildren();
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  image.loading = 'lazy';
  image.className = 'album-cover-image';
  cover.append(image);
});

// Fotografía de Coachella 2006 donde se distingue la pirámide luminosa.
const alivePhoto = document.querySelector('.live-photo');
if (alivePhoto) {
  alivePhoto.src = 'https://commons.wikimedia.org/wiki/Special:FilePath/Daft_punk_at_coachella.jpg';
  alivePhoto.alt = 'Daft Punk actuando en Coachella 2006 dentro de su icónica pirámide luminosa';
  alivePhoto.loading = 'lazy';
}

// La cronología queda como última sección, justo antes del cierre final.
const main = document.querySelector('main');
const chronology = document.querySelector('#cronologia');
const ending = document.querySelector('#separacion');
if (main && chronology && ending) main.insertBefore(chronology, ending);
