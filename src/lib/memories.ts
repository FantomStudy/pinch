export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  takenAt: string;
}

export interface Memory {
  id: number;
  title: string;
  note?: string;
  coordinates: {
    lng: number;
    lat: number;
  };
  photos: [Photo, ...Photo[]];
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "Работа у окна",
    note: "Светлое кафе, ноутбук и капучино. Хороший день, чтобы что-нибудь доделать.",
    coordinates: { lng: 55.1012, lat: 51.7741 },
    photos: [
      {
        src: "/photos/20260927_163127.webp",
        alt: "Ноутбук и чашка кофе на деревянном столе у большого окна кафе",
        width: 3060,
        height: 4080,
        takenAt: "2026-09-27T16:31:27+05:00",
      },
    ],
  },
  {
    id: 2,
    title: "DIO вечером",
    coordinates: { lng: 55.0957, lat: 51.7698 },
    photos: [
      {
        src: "/photos/20261004_203416.webp",
        alt: "Кофейня DIO ночью: светящаяся вывеска и тёплые окна",
        width: 3060,
        height: 4080,
        takenAt: "2026-10-04T20:34:15+05:00",
      },
    ],
  },
  {
    id: 3,
    title: "Пирог и латте",
    note: "Яблочный пирог с мороженым и латте с рисунком.",
    coordinates: { lng: 55.0963, lat: 51.7702 },
    photos: [
      {
        src: "/photos/20261011_143459.webp",
        alt: "Кусок яблочного пирога с шариком мороженого на белой тарелке",
        width: 4080,
        height: 3060,
        takenAt: "2026-10-11T14:34:58+05:00",
      },
      {
        src: "/photos/20261011_144119.webp",
        alt: "Латте с рисунком в керамической чашке",
        width: 3060,
        height: 4080,
        takenAt: "2026-10-11T14:41:20+05:00",
      },
    ],
  },
  {
    id: 4,
    title: "Жёлтые листья",
    coordinates: { lng: 55.1105, lat: 51.7789 },
    photos: [
      {
        src: "/photos/20261014_203331.webp",
        alt: "Ковёр из жёлтых листьев и носки ботинок",
        width: 3060,
        height: 4080,
        takenAt: "2026-10-14T20:33:31+05:00",
      },
    ],
  },
  {
    id: 5,
    title: "Кофе в парке",
    coordinates: { lng: 55.0881, lat: 51.7652 },
    photos: [
      {
        src: "/photos/20261015_195927.webp",
        alt: "Кофейный киоск в ночном парке под гирляндами",
        width: 2296,
        height: 4080,
        takenAt: "2026-10-15T19:59:28+05:00",
      },
    ],
  },
  {
    id: 6,
    title: "Мост ночью",
    coordinates: { lng: 55.1031, lat: 51.7512 },
    photos: [
      {
        src: "/photos/20261027_202020.webp",
        alt: "Мост с голубой подсветкой отражается в тёмной реке",
        width: 4080,
        height: 2296,
        takenAt: "2026-10-27T20:20:20+05:00",
      },
    ],
  },
  {
    id: 7,
    title: "Башня в огнях",
    coordinates: { lng: 55.0798, lat: 51.7605 },
    photos: [
      {
        src: "/photos/20261101_201951.webp",
        alt: "Башня-маяк с гирляндами на фоне ночного неба",
        width: 2296,
        height: 4080,
        takenAt: "2026-11-01T20:19:52+05:00",
      },
    ],
  },
  {
    id: 8,
    title: "Допоздна над сайтом",
    note: "Почти полночь, на экране — мой сайт.",
    coordinates: { lng: 55.1152, lat: 51.7724 },
    photos: [
      {
        src: "/photos/20261102_234732.webp",
        alt: "Экран ноутбука в темноте с открытым личным сайтом",
        width: 2296,
        height: 4080,
        takenAt: "2026-11-02T23:47:32+05:00",
      },
    ],
  },
];
