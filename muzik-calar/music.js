class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Kendime Yalan Söyledim", "Seksendört", "1.jpg", "1.mp3"),
  new Music("Benden Bana", "Adamlar", "2.jpg", "2.mp3"),
  new Music("Derinden", "Barış Diri", "3.jpeg", "3.mp3"),
];
