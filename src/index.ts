import "../node_modules/spin.js/spin.css";
import "../node_modules/toastify-js/src/toastify.css";
import "./styles.css";
import { PageFlip, SizeType } from "page-flip";
import { Spinner } from "spin.js";
import Toastify, { Options } from "toastify-js";
import { Validator, enLang, createLang } from "@upjs/facile-validator";
import Carousel from "./components/carousel";
import Book from "./components/book";
import {
  spinneConfig,
  toastifyConfigError,
  toastifyConfigSuccess,
} from "./config/config";
import { IMAGES } from "./data/data";
import sendForm from "./services/api";

const CAROUSEL = new Carousel(IMAGES);
CAROUSEL.createCarousel("carousel", "image");
document.getElementById("gallery").appendChild(CAROUSEL.getCarousel());

const BOOK = new Book();
const $BOOK = BOOK.createFlipBook();
document.getElementById("menu").appendChild($BOOK);
const pageFlip = new PageFlip($BOOK, {
  width: (30 * window.innerWidth) / 100,
  height: (75 * window.innerHeight) / 100,
  showCover: true,
  size: "stretch" as SizeType,
  maxWidth: (30 * window.innerWidth) / 100,
  maxHeight: (75 * window.innerHeight) / 100,
});
pageFlip.loadFromHTML(document.querySelectorAll(`.${BOOK.getClassName()}`));
window.addEventListener("resize", () => {
  pageFlip.getSettings().width = (30 * window.innerWidth) / 100;
  pageFlip.getSettings().height = (75 * window.innerHeight) / 100;
  pageFlip.getSettings().maxWidth = (30 * window.innerWidth) / 100;
  pageFlip.getSettings().maxHeight = (70 * window.innerHeight) / 100;
  pageFlip.loadFromHTML(document.querySelectorAll(`.${BOOK.getClassName()}`));
});

const $FORM = document.getElementById("form");
const $BUTTON = document.getElementById("button");
const LANG = createLang({
  required: "This fiel is required",
  "between-length": "This field must contain between 2 and 30 characters",
  email: "Please, enter a valid email",
});
const V = new Validator($FORM, {
  ...enLang,
  lang: LANG,
  onFieldChangeValidation: true,
});
$FORM.addEventListener("submit", async (e: SubmitEvent) => {
  e.preventDefault();
  if (!V.validate()) return;

  const spinner = new Spinner(spinneConfig).spin($BUTTON);
  try {
    $BUTTON.classList.add("invicible");
    await sendForm(e.currentTarget as HTMLFormElement);
    Toastify(toastifyConfigSuccess as Options).showToast();
  } catch (err) {
    console.error(err);
    Toastify(toastifyConfigError as Options).showToast();
  }
  $BUTTON.classList.remove("invicible");
  (e.target as HTMLFormElement).reset();
  spinner.stop();
});
