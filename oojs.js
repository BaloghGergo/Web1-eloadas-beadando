class Movable {
    constructor(imageSrc) {
        this.img = document.createElement('img');
        this.img.src = imageSrc;
        this.img.style.position = 'absolute';
        this.img.style.left = '400px';
        this.img.style.top = '400px';
        this.img.style.width = '400px';
        document.body.appendChild(this.img);
    }

    move(x, y) {
        const currentLeft = parseInt(this.img.style.left);
        const currentTop = parseInt(this.img.style.top);
        this.img.style.left = (currentLeft + x) + 'px';
        this.img.style.top = (currentTop + y) + 'px';
    }
}

class MovableImage extends Movable {
    constructor(imageSrc) {
        super(imageSrc);
        this.speed = 20;
        this.initControls();
    }

    initControls() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    this.move(0, -this.speed);
                    break;
                case 'ArrowDown':
                    this.move(0, this.speed);
                    break;
                case 'ArrowLeft':
                    this.move(-this.speed, 0);
                    break;
                case 'ArrowRight':
                    this.move(this.speed, 0);
                    break;
            }
        });
    }
}


const myImage = new MovableImage('nje2.png');