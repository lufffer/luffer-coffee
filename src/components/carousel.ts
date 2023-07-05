import styles from "./carousel.module.css";

export default class Carousel {
  private $carousel: HTMLDivElement;
  private $container: HTMLDivElement;
  private $left: HTMLElement;
  private $right: HTMLElement;
  private $indicators: Array<HTMLDivElement>;
  private images: Array<Array<string>>;
  private length: number;
  private current: number;

  constructor(images: Array<Array<string>>) {
    this.$carousel = document.createElement("div");
    this.$container = document.createElement("div");
    this.images = images;
    this.$indicators = new Array(this.length);
    this.length = images.length;
    this.current = 0;
  }

  private next = () => {
    if (this.current < this.length - 1) {
      this.$indicators[this.current].classList.remove(styles.active);
      this.current++;
      this.$indicators[this.current].classList.add(styles.active);
      this.$right.removeEventListener("click", this.next);
      this.$left.removeEventListener("click", this.previous);
      this.$container.scrollLeft += this.$container.clientWidth;
    }
  };

  private previous = () => {
    if (this.current > 0) {
      this.$indicators[this.current].classList.remove(styles.active);
      this.current--;
      this.$indicators[this.current].classList.add(styles.active);
      this.$right.removeEventListener("click", this.next);
      this.$left.removeEventListener("click", this.previous);
      this.$container.scrollLeft -= this.$container.clientWidth;
    }
  };

  private handleScroll = () => {
    if (
      Math.abs(
        this.$container.scrollLeft - this.$container.clientWidth * this.current
      ) < 10
    ) {
      this.$right.addEventListener("click", this.next);
      this.$left.addEventListener("click", this.previous);
    }
  };

  private handleIndicator = (e: MouseEvent) => {
    this.$indicators[this.current].classList.remove(styles.active);
    this.current = parseInt((e.target as HTMLDivElement).dataset.pos);
    this.$indicators[this.current].classList.add(styles.active);
    this.$right.removeEventListener("click", this.next);
    this.$left.removeEventListener("click", this.previous);
    this.$container.scrollLeft = this.$container.clientWidth * this.current;
  };

  public createCarousel = (carouselClass: string, imageClass: string) => {
    this.$carousel.setAttribute("class", `${carouselClass} ${styles.carousel}`);
    this.$container.setAttribute("class", styles.container);
    this.$carousel.appendChild(this.$container);
    const INDICATORS = document.createElement("div");
    INDICATORS.setAttribute("class", styles.indicators);

    for (let i = 0; i < this.length; i++) {
      const $SLIDE = document.createElement("div");
      $SLIDE.setAttribute("class", styles.slide);

      const $IMAGE = new Image();
      $IMAGE.setAttribute("src", this.images[i][0]);
      $IMAGE.setAttribute("class", imageClass);

      $SLIDE.appendChild($IMAGE);
      this.$container.appendChild($SLIDE);

      this.$indicators[i] = document.createElement("div");
      this.$indicators[i].setAttribute(
        "class",
        `${styles.indicator} ${i === 0 && styles.active}`
      );
      this.$indicators[i].setAttribute("data-pos", `${i}`);
      this.$indicators[i].addEventListener("click", this.handleIndicator);
      INDICATORS.appendChild(this.$indicators[i]);
      this.$container.appendChild(INDICATORS);
    }

    this.$left = document.createElement("i");
    this.$left.setAttribute("class", `${styles.left} fa-solid fa-chevron-left`);
    this.$carousel.appendChild(this.$left);

    this.$right = document.createElement("i");
    this.$right.setAttribute(
      "class",
      `${styles.right} fa-solid fa-chevron-right`
    );
    this.$carousel.appendChild(this.$right);

    this.$right.addEventListener("click", this.next);
    this.$left.addEventListener("click", this.previous);
    this.$container.addEventListener("scroll", this.handleScroll, true);
  };

  public getCarousel = () => {
    return this.$carousel;
  };
}
