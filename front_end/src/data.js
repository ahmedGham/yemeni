import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import { MdLocationOn } from "react-icons/md";
import { FaBong } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { BiWifi } from "react-icons/bi";
export const root_contacts = [
  {
    id: 1,
    icon: <BsTelephoneFill className="contact-icon" />,
    name: "phone",
    name_ru: "телефон",
    name_ar: "الهاتف",
    content: "+793776441777",
  },
  {
    id: 2,
    icon: <MdEmail className="contact-icon" />,
    name: "email",
    name_ru: "почта",
    name_ar: "البريد الالكتروني",
    content: "emil@gmail.com",
  },
  {
    id: 3,
    icon: <MdLocationOn className="contact-icon" />,
    name: "location",
    name_ru: "расположение",
    name_ar: "الموقع",
    content: "Большой просп. Петроградской стороны, 67",
  },
];

export const root_reviews = [
  {
    text: "yemeni Fakhsa is a masterpiece! The meat is blended to the fibers. Fresh cake. Very hospitable. Thanks!",
    text_ar:
      "فحسة اليمنية هي تحفة! يتم مزج اللحم مع الألياف. كعكة طازجة. مضياف جدا. شكرًا",
    text_ru:
      "Иеменская фахса - это шедевр! мясо растушено до волокон. свежая лепешка. очень гостеприимно. спасибо!",
  },
  {
    text: "Tasty, big portions. You definitely need to take national dishes and what, thank you very much",
    text_ar:
      "لذيذ ، أجزاء كبيرة. أنت بالتأكيد بحاجة إلى أخذ الأطباق الوطنية وماذا ، شكرا جزيلا لك",
    text_ru:
      "Вкусно, большие порции. однозначно надо брать национальные блюда а какое отношение, спасибо большое",
  },
  {
    text: "Everything is over! .. A good atmosphere, clean, positive and sociable staff!",
    text_ar: "كل شيء قد انتهى! .. جو جيد ، طاقم نظيف ، إيجابي ومرئي!",
    text_ru:
      "Все на должном!.. хорошая атмосфера, чисто, позитивный и общителен персонал!...",
  },
  {
    text: "A good place. I have been there are several times: everything is tasty and not expensive",
    text_ar: "مكان جيد.ذهبت هناك عدة مرات: كل شيء لذيذ وليس باهظ الثمن",
    text_ru: "Хорошее место. но там несколько раз:все вкусно и не дорого",
  },
  {
    text: "Delicious food, quick service a lot of delicious dishes",
    text_ar: "طعام لذيذ ، خدمة سريعة الكثير من الأطباق اللذيذة",
    text_ru: "Вкусная еда,быстрое обслуживание много всяких вкусных блюда",
  },
];


export const root_services = [
  {
    id: 1,
    icon: <Ri24HoursLine className="service-icon" />,
    name: "24h / 7d work",
    name_ru: "24ч / 7д работа",
    name_ar: "عمل على مدار الساعة",
    description: "We work 24 hours a day,7 days a week",
    description_ar: "نعمل طوال الوقت.24 ساعة في اليوم,7 أيام في الأسبوع",
    description_ru: "Мы всё времья работаем.24 часов в день,7 дней в неделью",
  },
  {
    id: 2,
    icon: <FaBong className="service-icon" />,
    name: "Kalian",
    name_ru: "Кальян",
    name_ar: "شيشة",
    description: "We serve kalian in our restaurant",
    description_ar: "نقدم في مطعمنا الشيشة",
    description_ru: "мы обслуживаем Кальян в нашем рестране",
  },

  {
    id: 3,
    icon: <BiWifi className="service-icon" />,
    name: "Wifi",
    name_ru: "интернет",
    name_ar: "أنترنت",
    description: "Customers have access to a free WiFi",
    description_ar: "لدى الزبائين امكانية الوصول لانترنت مجاني",
    description_ru: "клиенты имеют доступ к бесплатному интернету",
  },
];



export const root_categories = [
  {
    name: "yemeni",
    grid_name: "yemeni",
    name_ru: "йеменский",
    name_ar: "يمني",
    img: "/images/hero.jpg",
  },
  {
    name: "shawarma",
    grid_name: "shawarma",
    name_ru: "шаверма",
    name_ar: "شورما",

    img: "/images/hero.jpg",
  },
  {
    name: "dinner",
    grid_name: "dinner",
    name_ru: "обед",
    name_ar: "وجبة",

    img: "/images/hero.jpg",
  },
  {
    name: "bakery",
    grid_name: "bakery",
    name_ru: "выпечка",
    name_ar: "معجنات",

    img: "/images/hero.jpg",
  },
  {
    name: "hot",
    grid_name: "hot",
    name_ru: "гарячые",
    name_ar: "ساخن",

    img: "/images/hero.jpg",
  },
  {
    name: "cold",
    grid_name: "cold",

    name_ru: "холодные",
    name_ar: "بارد",

    img: "/images/hero.jpg",
  },
  {
    name: "falafel",
    grid_name: "falafel",
    name_ru: "фалафель",
    name_ar: "فلافل",

    img: "/images/hero.jpg",
  },
  {
    name: "kalian",
    grid_name: "kalian",
    name_ru: "кальян",
    name_ar: "شيشة",

    img: "/images/hero.jpg",
  },
  {
    name: "all",
    grid_name: "all",
    name_ru: "всё",
    name_ar: "الجميع",

    img: "/images/hero.jpg",
  },
];


export const food = [
  {
    id: 1,
    name: "food",
    description: "",
    price: "",
    category: "yemeni",
  },
  {
    id: 2,
    name: "food",
    description: "",
    price: "",
    category: "yemeni",
  },
  {
    id: 3,
    name: "food",
    description: "",
    price: "",
    category: "yemeni",
  },
  {
    id: 4,
    name: "food",
    description: "",
    price: "",
    category: "yemeni",
  },
  {
    id: 5,
    name: "food",
    description: "",
    price: "",
    category: "yemeni",
  },
  {
    id: 6,
    name: "",
    description: "",
    price: "",
    category: "food",
  },
  {
    id: 7,
    name: "food",
    description: "",
    price: "",
    category: "dinner",
  },
  {
    id: 8,
    name: "food",
    description: "",
    price: "",
    category: "dinner",
  },
  {
    id: 9,
    name: "food",
    description: "",
    price: "",
    category: "bakery",
  },
  {
    id: 10,
    name: "food",
    description: "",
    price: "",
    category: "bakery",
  },
  {
    id: 11,
    name: "food",
    description: "",
    price: "",
    category: "bakery",
  },
  {
    id: 12,
    name: "food",
    description: "",
    price: "",
    category: "kialan",
  },
  {
    id: 13,
    name: "food",
    description: "",
    price: "",
    category: "kialan",
  },
  {
    id: 14,
    name: "food",
    description: "",
    price: "",
    category: "shawarma",
  },
  {
    id: 15,
    name: "food",
    description: "",
    price: "",
    category: "shawarma",
  },
  {
    id: 16,
    name: "food",
    description: "",
    price: "",
    category: "shawarma",
  },
  {
    id: 17,
    name: "food",
    description: "",
    price: "",
    category: "shawarma",
  },
  {
    id: 18,
    name: "food",
    description: "",
    price: "",
    category: "cold",
  },
  {
    id: 19,
    name: "food",
    description: "",
    price: "",
    category: "cold",
  },
  {
    id: 20,
    name: "food",
    description: "",
    price: "",
    category: "cold",
  },
  {
    id: 21,
    name: "food",
    description: "",
    price: "",
    category: "hot",
  },
  {
    id: 22,
    name: "food",
    description: "",
    price: "",
    category: "hot",
  },
];
