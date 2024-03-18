var config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1Ijoiazk2bXoiLCJhIjoiY2x0eGN1M3JjMDR1czJrdWtkZmdmdG02aiJ9.LGN3H5W1dlsR6-c1T2TXOQ",
  showMarkers: true,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "ストーリーテリングを作ってみました。。",
  subtitle: "A descriptive and interesting subtitle to draw in the reader",
  byline: "By k96mz",
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "United Nations Secretariat Building",
      image: "./path/to/image/unhq.jpg",
      description: "UN building",
      location: {
        center: [-73.96806, 40.74897],
        zoom: 16.0,
        pitch: 45.0,
        bearing: -40.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      title: "新橋辺りです。",
      image: "./path/to/image/shimbashi.jpg",
      description: "飲み屋が多いです。",
      location: {
        center: [139.75953, 35.66599],
        zoom: 15.08,
        pitch: 40.76,
        bearing: 62.4,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      title: "中央アフリカ共和国の首都バンギです。",
      image: "./path/to/image/Bangui.jpg",
      description: "4月のイベントの作業候補地です。",
      location: {
        center: [18.5289, 4.40521],
        zoom: 11.17,
        pitch: 48.76,
        bearing: -53.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-chapter",
      alignment: "fully",
      hidden: false,
      title: "イタリアのブリンディシです。",
      image: "./path/to/image/Brindisi.jpg",
      description: "UNGSC(国連グローバルサービスセンター)があります。",
      location: {
        center: [17.91092, 40.64877],
        zoom: 12.01,
        pitch: 58.76,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
