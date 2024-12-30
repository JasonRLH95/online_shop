import laptop_1 from '../images/products/Laptop/laptop_acer.jpg';
import laptop_2 from '../images/products/Laptop/laptop_asus.jpg';
import laptop_3 from '../images/products/Laptop/laptop_dell.webp';
import laptop_4 from '../images/products/Laptop/laptop_hp.jpg';
import laptop_5 from '../images/products/Laptop/laptop_lenovo.png';
import laptop_6 from '../images/products/Laptop/laptop_macbook.png';
import laptop_7 from '../images/products/Laptop/laptop_MSI.webp';
import laptop_8 from '../images/products/Laptop/laptop_samsung.png';
import TV_1 from '../images/products/TV/TV_fujicom.png';
import TV_2 from '../images/products/TV/TV_hisense.jpg';
import TV_3 from '../images/products/TV/TV_LG.jpg';
import TV_4 from '../images/products/TV/TV_samsung.jpg';
import TV_5 from '../images/products/TV/TV_sansui.webp';
import TV_6 from '../images/products/TV/TV_skyworth.jpg';
import TV_7 from '../images/products/TV/TV_sony.jpg';
import TV_8 from '../images/products/TV/TV_toshiba.jpg';
import TV_9 from '../images/products/TV/TV_xiaomi.webp';
import phone1 from "../images/products/Phone/apple_phone.jpg";
import phone2 from "../images/products/Phone/asus_phone.jpg";
import phone3 from "../images/products/Phone/google_phone.jpg";
import phone4 from "../images/products/Phone/honor_phone.jpg";
import phone5 from "../images/products/Phone/nokia_phone.jpg";
import phone6 from "../images/products/Phone/oneplus_phone.jpg";
import phone7 from "../images/products/Phone/oppo_phone.jpg";
import phone8 from "../images/products/Phone/realme_phone.jpg";
import phone9 from "../images/products/Phone/samsung_phone.jpg";
import phone10 from "../images/products/Phone/vivo_phone.png";
import phone11 from "../images/products/Phone/xiaomi_phone.jpg";


import companies from './companies';

const products =[
            {
                category:"Laptop",
                image:laptop_1,
                price:3200,
                name:"acer laptop",
                desc:"מחשב נייד מבית Acer בעל מסך ''15.6 ברזולוציית FHD (1920x1080), מעבד Intel® Core™ i7-1255U, זיכרון פנימי בנפח 16GB, כונן SSD בנפח 1TB וכולל מערכת הפעלה.",
                company:companies.acer,
            },
            {
                category:"Laptop",
                image:laptop_2,
                price:4000,
                name:"asus laptop",
                desc:"מחשב נייד מבית Asus בעל מסך 14 אינץ', מעבד Intel® Celeron® N4020, זיכרון פנימי בנפח 4GB, כונן SSD בנפח 128GB וללא מערכת הפעלה Windows 11 Home S.",
                company:companies.asus,
            },
            {
                category:"Laptop",
                image:laptop_3,
                price:2000,
                name:"dell laptop",
                desc:"מחשב נייד מבית Dell בגודל 14.0 אינטש ברזולוצית FHD (1920 x 1080), מעבד Intel® Core™ i5-1335U, זיכרון פנימי בנפח 8GB, כונן אחסון SSD בנפח 256GB וכולל מערכת הפעלה",
                company:companies.dell,
            },
            {
                category:"Laptop",
                image:laptop_4,
                price:2300,
                name:"hp laptop",
                desc:"מחשב נייד מבית HP בגודל ''16 ברזולוציית 2.8K (2880x1800) OLED, מעבד Intel® Core™ i7-13700H, מאיץ גרפי NVIDIA® GeForce RTX™ 4060 8GB, זיכרון פנימי בנפח 16GB, כונן SSD בנפח 1TB וכולל מערכת הפעלה.",
                company:companies.hp,
            },
            {
                category:"Laptop",
                image:laptop_5,
                price:2850,
                name:"lenovo laptop",
                desc:"מחשב נייד עם מסך מגע מבית Lenovo בגודל 14'' ברזולוציית WUXGA (1920x1200), מעבד Intel® Core™ i3-1315U, זיכרון פנימי בנפח 8GB, כונן SSD בנפח 512GB וכולל מערכת הפעלה.",
                company:companies.lenovo,
            },
            {
                category:"Laptop",
                image:laptop_6,
                price:5200,
                name:"macbook laptop",
                desc:"מחשב MacBook Pro מבית Apple בעל מסך בגודל 14.2'', מעבד Apple M2 Pro בעל 12 ליבות, מאיץ גרפי בעל 19 ליבות, כונן אחסון SSD בנפח 1TB, זיכרון RAM פנימי 16GB, מקלדת בעברית / אנגלית וכולל מערכת הפעלה macOS.",
                company:companies.macbook,
            },
            {
                category:"Laptop",
                image:laptop_7,
                price:2150,
                name:"MSI laptop",
                desc:"מחשב נייד ואיכותי מבית MSI בעל מסך ”16 ברזולוציית FHD+ (1920x1200), מעבד Intel® Core™ i5-1340P, זיכרון פנימי בנפח 16GB, כונן SSD בנפח 512GB, מקלדת מוארת וכולל מערכת הפעלה",
                company:companies.msi,
            },
            {
                category:"Laptop",
                image:laptop_8,// img of samsung
                price:3100,
                name:"thinkpad laptop",
                desc:"מחשב נייד Thinkpad מבית Lenovo בגודל ''13.3 ברזולוציית 2.8K (2880x1800) OLED ועם מסך מגע, מעבד AMD Ryzen™ 7 PRO 6850H, זיכרון פנימי בנפח 32GB, כונן SSD בנפח 1TB וכולל מערכת הפעלה.",
                company:companies.samsung,
            },
            {
                category:"TV",
                image:TV_1,
                price:2800,
                name:"fujicom TV",
                desc:"טלוויזיה איכותית מבית Fujicom בגודל 98 אינץ', רזולוציית 4K UHD, עם חיבורי HDMI ו-USB. עם חיבור מובנה לרשת WIFI ותמיכה בעידן פלוס.",
            },
            {
                category:"TV",
                image:TV_2,
                price:2400,
                name:"hisense TV",
                desc:"טלוויזיית UHD 4K חכמה מבית Hisense בעלת שמע שמכניס אתכם לאקשן וחדות תמונה מצוינת עם איכות תמונה ברזולוציית 4K.",
            },
            {
                category:"TV",
                image:TV_3,
                price:3200,
                name:"LG TV",
                desc:"טלוויזיה איכותית מבית LG בגודל 65 אינץ', כוללת פאנל OLED Evo עם פיקסלים המוארים באופן עצמאי ברזולוציית UHD 4K, יציאות HDMI ,USB ועוד, טכנולוגיית ThinQ Ai ועם מערכת הפעלה webOS.",
            },
            {
                category:"TV",
                image:TV_4,
                price:1600,
                name:"samsung TV",
                desc:"טלוויזיה איכותית מבית Samsung בגודל 50'', ברזולוציית Ultra HD 4K מדהימה, תאורת QLED, מעבד Quantum Processor Lite 4K, מגוון תכונות לחווית גיימינג עשירה וכוללת אפשרות שיקוף מסך מהטלפון הנייד.",
            },
            {
                category:"TV",
                image:TV_5,
                price:2100,
                name:"haier TV",
                desc:"טלוויזיה חכמה מבית Haier בעיצוב מינימליסטי מרהיב ללא מסגרת, בעלת רזולוציה 4K, כניסה לאפליקציות המובילות בלחיצת כפתור אחת בשלט, מערכת הפעלה Android TV 11 שיקוף מסך Chromecast מובנה ומערכת בינה מלאכותית המאפשרת לשלוט בבית חכם.",
            },
            {
                category:"TV",
                image:TV_6,
                price:1950,
                name:"skyworth TV",
                desc:"טלוויזיה איכותית מבית Skyworth בגודל 65'', רזולוציית Ultra HD 4K ותאורת QLED, מגוון תכנים וספקי תוכן בממשק אחד חכם באמצעות Google TV וטכנולוגיות מתקדמות לחווית צפייה מעולה.",
            },
            {
                category:"TV",
                image:TV_7,
                price:2350,
                name:"sony TV",
                desc:"טלוויזיה חכמה מבית Sony בגודל 75'', רזולוציית 4K UHD, תמיכת HDR, מערכת Google TV, חורים מובנים להתקן תליה על הקיר, רמקולים מובנים, קישוריות WiFi ו-Bluetooth ושלט אלחוטי.",
            },
            {
                category:"TV",
                image:TV_8,
                price:2400,
                name:"toshiba TV",
                desc:"טלוויזיה חכמה ואיכותית מבית Toshiba בגודל 65 אינטש, עם מערכת הפעלה Toshiba Smart VIDAA U5 וטכנולוגיית 4K לתמונה עשירה בפרטים ובצבע.",
            },
            {
                category:"TV",
                image:TV_9,
                price:1200,
                name:"xiaomi TV",
                desc:"טלוויזיה חכמה ואיכותית מבית Xiaomi בגודל 43 אינטש, ברזולוציית 4K UHD, עם מערכת הפעלה אנדרואיד, רמקולים מובנים, חורים מובנים להתקן תליה על הקיר, תמיכה בנטפליקס ושלט אלחוטי.",
            },
            {
                category:"Phone",
                image:phone1,
                price:5300,
                name:"apple phone",
                desc:"האייפון 13 מיני הקטן והעוצמתי מבית Apple, בעל מסך 5.4 אינטש Super Retina XDR OLED, עם חיישן זיהוי פנים, מעבד ראשי A15 Bionic, זוג מצלמות אחוריות 12 מגה פיקסל, מצלמת סלפי 12 מגה פיקסל, עם אפשרות טעינה אלחוטית ותמיכה ברשת הדור החמישי 5G.",
            },
            {
                category:"Phone",
                image:phone2,
                price:2300,
                name:"asus phone",
                desc:"טלפון סלולרי גיימינג מבית ASUS בעל מסך 6.78 אינטש, 3 מצלמות אחוריות 50+13+5 מגה פיקסל ומצלמת סלפי 32 מגה פיקסל, ערכת שבבים בעלת 8 ליבות, תומך ברשת 5G ובעל קורא טביעת אצבע.",
            },
            {
                category:"Phone",
                image:phone3,
                price:3200,
                name:"google phone",
                desc:"סמארטפון איכותי מבית Google, בעל מסך בגודל 6.7'', שלוש מצלמות 50+48+12 מגה פיקסל, מצלמת סלפי 10.8 מגה פיקסל, חיישן טביעת אצבע, ערכת שבבים בעלת 8 ליבות, מערכת הפעלה אנדרואיד מתקדמת.",
            },
            {
                category:"Phone",
                image:phone4,
                price:1600,
                name:"honor phone",
                desc:"טלפון סלולרי איכותי מבית Honor בעל מסך 6.81'', שלוש מצלמות אחוריות 50+50+64 מגה פיקסל ומצלמת סלפי 12מגה פיקסל, ערכת שבבים בעלת 8 ליבות, תומך ברשת הדור החמישי 5G ובעל קורא טביעת אצבע.",
            },
            {
                category:"Phone",
                image:phone5,
                price:1200,
                name:"nokia phone",
                desc:"טלפון סלולרי Nokia G42 5G מבית Nokia בעיצוב קלאסי מאפשר לכם לשמור קשר על חברים ומשפחה בקלות עם יכולות 5G שנותנות לכם שיחות חדות וברורות בנוסף למגוון תכונות שימושיות.",
            },
            {
                category:"Phone",
                image:phone6,
                price:1950,
                name:"opeplus phone",
                desc:"טלפון סלולרי איכותי מבית OnePlus, בעל מסך בגודל 6.72'', שלוש מצלמות אחוריות 108+2+2 מגה פיקסל ומצלמת סלפי 16 מגה פיקסל, מערכת אנדרואיד מתקדמת, קורא טביעת אצבע, סוללה חזקה ותומך ברשת הדור החמישי 5G.",
            },
            {
                category:"Phone",
                image:phone7,
                price:2350,
                name:"oppo phone",
                desc:"טלפון סלולרי איכותי מבית Oppo בעל מסך 6.43 אינטש, 4 מצלמות אחוריות 48+8+2+2 מגה פיקסל ומצלמת סלפי 16 מגה פיקסל, ערכת שבבים בעלת 8 ליבות, תומך ברשת הדור החמישי 5G ובעל קורא טביעת אצבע",
            },
            {
                category:"Phone",
                image:phone8,
                price:1950,
                name:"realme phone",
                desc:"טלפון סלולרי איכותי מבית Realme בעל מסך 6.74'', שלוש מצלמות אחוריות 50+8+2 מגה פיקסל ומצלמת סלפי 16 מגה פיקסל, ערכת שבבים בעלת 8 ליבות, תומך ברשת הדור החמישי 5G ובעל קורא טביעת אצבע.",
            },
            {
                category:"Phone",
                image:phone9,
                price:4300,
                name:"samsung phone",
                desc:"טלפון סלולרי איכותי מבית Samsung בעל מסך בגודל 6.8 אינץ', 4 מצלמות אחוריות ומצלמת סלפי קדמית, תמיכה ברשת הדור החמישי 5G ובעל קורא טביעת אצבע.",
            },
            {
                category:"Phone",
                image:phone10,
                price:3600,
                name:"vivo phone",
                desc:"טלפון סלולרי איכותי מבית vivo בעל מסך בגודל 6.58 אינץ', שלוש מצלמות אחוריות 50+2+2 מגה פיקסל ומצלמת סלפי 16 מגה פיקסל, ערכת שבבים בעלת 8 ליבות, תומך ברשת הדור החמישי 5G ובעל קורא טביעת אצבע.",
            },
            {
                category:"Phone",
                image:phone11,
                price:3200,
                name:"xiaomi phone",
                desc:"טלפון סלולרי איכותי מבית Xiaomi בעל מסך בגודל 6.67 אינץ', מערך שלוש מצלמות 200MP + 8MP + 2MP ומצלמת סלפי 16MP, ערכת שבבים בעלת 8 ליבות, תומך ברשת הדור החמישי 5G ובעל קורא טביעת אצבע.",
            },
]

export default products;