// Daily challenge : Creating Objects

//1
class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }
//2
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}

//3
const video = new Video("JavaScript Tutorial", "Zakaria", 300);
video.watch();
//4
const video2 = new Video("Python Tutorial", "Fouad", 500);
video2.watch();
//5
const data = [
    { title: "React Basics", uploader: "Alice", time: 450 },
    { title: "Node.js Express", uploader: "Bob", time: 700 },
    { title: "CSS Grid & Flexbox", uploader: "Charlie", time: 350 },
    { title: "Machine Learning Intro", uploader: "David", time: 900 },
    { title: "Full Stack Development", uploader: "Eve", time: 1200 }
];

const videos = data.map(video => new Video(video.title,video.uploader,video.time))

videos.forEach(video => video.watch())