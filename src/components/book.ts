import styles from "./book.module.css";
import { IMAGES } from "../data/data";
import coffee from "../assets/coffee.svg";

export default class Book {
  private $book: HTMLDivElement;

  public getClassName = () => {
    return styles.page;
  };

  private createBook = () => {
    this.$book = document.createElement("div");
    this.$book.setAttribute("class", styles["book"]);
  };

  private createCover = () => {
    const $COVER = document.createElement("div");
    $COVER.setAttribute("data-density", "hard");
    $COVER.setAttribute("class", styles["page"]);
    $COVER.innerHTML = `
      <div class=${styles["cover-title-container"]}>
    <h3 class=${styles["cover-title"]} >
    Luffee <br /> Coffee
    <br />
    <br />
          Menu
      </h3>
      </div>
      <div class= ${styles["cover-image-container"]} >
    <Image src=${coffee} alt = "Logo image" class= ${styles["cover-image"]} />
    </div>
      `;

    this.$book.appendChild($COVER);
  };

  private createEmptyPage = (class1 = "", class2 = "", class3 = "") => {
    const $EMPTYPAGE = document.createElement("div");
    $EMPTYPAGE.setAttribute(
      "class",
      `${styles["empty-page"]} ${styles["page"]} ${class1} ${class2} ${class3}`
    );

    this.$book.appendChild($EMPTYPAGE);
  };

  private createMiddlePages = () => {
    for (let i = 0; i < IMAGES.length; i++) {
      const $PAGE = document.createElement("div");
      $PAGE.setAttribute(
        "class",
        `${
          i % 2 === 0 ? styles["page-shadow-right"] : styles["page-shadow-left"]
        } ${styles["page"]} ${styles["middle-page"]}`
      );
      $PAGE.innerHTML = `
    <h3 class= ${styles["middle-page-title"]} >
    ${IMAGES[i][1]}
    </h3>
    <image
  src=${IMAGES[i][0]}
  alt=${IMAGES[i][1]}
  class=${styles["middle-page-image"]}
    />
    <p class='${styles["no-scrollbar"]} ${styles["middle-page-paragraph"]}'>
    ${IMAGES[i][2]}
    </p>
      `;

      this.$book.appendChild($PAGE);
    }
  };

  public createFlipBook = () => {
    this.createBook();
    this.createCover();
    this.createEmptyPage();
    this.createMiddlePages();
    this.createEmptyPage(
      styles["page"],
      styles["middle-page"],
      styles["page-shadow-right"]
    );
    this.createEmptyPage(
      styles["page"],
      styles["middle-page"],
      styles["page-shadow-left"]
    );
    this.createCover();
    return this.$book;
  };
}
