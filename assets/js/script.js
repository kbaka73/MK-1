const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggel = document.querySelector(".dark-light"),
      seaechToggel = document.querySelector(".searchtoggle"),
      siderbarOpen = document.querySelector(".siderbarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");



let getmode = localStorage.getItem("mode");
  if (getmode && getmode === "dark-mode") {
    body.classList.add("dark");
  }

  
// js code toggle dark and light mood
modeToggel.addEventListener("click" , ()=>{
  modeToggel.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refrsh of file reopen
  if(!body.classList.contains("dark")){
    localStorage.setItem("mode", "ligth-mode");
  }else{
    
    localStorage.setItem("mode", "dark-mode");
  }
})
// js code toggle search box
seaechToggel.addEventListener("click" , ()=>{
  seaechToggel.classList.toggle("active");

})

// js code to  toggle sidebar

siderbarOpen.addEventListener("click", ()=>{
  nav.classList.add("active");
})





body.addEventListener("click", e =>{
  let clickdElm = e.target;
  if(!clickdElm.classList.contains("siderbarOpen") && !clickdElm.classList.contains("menu")){
    nav.classList.remove("active")
  }
});



const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-en");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    Portfolio: "Portfolio",
    PORTFOLIO: "PORTFOLIO",
    services: "Services",
    general: "General stats",
    english: "En",
    MKAdvertising:"MK Advertising was founded and managed by a professional team with extensive experience in the field of information technology and design, with the aim of meeting all the needs of individuals and companies. Small businesses in the field of information technology and providing excellent software solutions of high quality helped your business grow and grow",
    offer:"Offer ends in",
    Excellentreturn:"Excellent return with us",
    Workingwithus:"Working with us means saving a lot of money. We will provide you marketing packagesIntegrated electronic and web services at market competitive prices and the highest possible qualityto satisfy our customers.",
    Convertingvisitors: "Help your business take off and grow faster",
    mk: "MK Advertising Company",
    specializedteam:"specialized team",
    Wetakethetime:"We take the time to update our knowledge and skills that have helped us Develop broad experience, deeper knowledge and expertise.",
    Designexpertise:"Design expertise",
    Wehaveateamof:"We have a team of specialists in web design and advertising, planning a strategy Integrated to target your audience to help your business reach the best possible performance.",
    arabic: "Ar",
    Whyshouldyou:"Why should you work with us?",
    Allourdigitalmarketingp:"All our digital marketing packages are available at competitive prices. We guarantee returns Great for every penny you invest.",
    customerssatisfaction:"customers satisfaction",
    Wehavearigorousquality:"We have a rigorous quality control process to ensure that everything we offer meets expectations and our customers' needs.",
    SupportTeam:"Support Team",
    Wehaveacustomer:"We have a 24/7 customer support team We are always in touch with our current and future customers.",
    Learnmore:"Learn more",
    Buynow:"Buy now",
    priceplans:"price plans",
    Chooseyouridealplan:"Choose your ideal plan",
    Weofferyouafullrange:"We offer you a full range of integrated web and e-marketing services. There are no limits to theway our marketing services packages can be designed to help your company reach its full potential. We are hereto help you move forward.",
    Basicpackage:"Basic package",
    Basicsite:"Basic site",
    ArticlesWritingandOne:"8-12 Articles Writing and Submission",
    pagesOne:"3-5 pages",
    Hostingemailaccounts:"Hosting & email accounts",
    MobileandtabletResponsiveWebsite:"Mobile and tablet Responsive Website",
    DomainNameRegistration:"Domain Name Registration",
    SEOfriendly:"SEO friendly",
    Standardpackage:"Standard Package",
    customsite:"custom Site",
    Writingandpreparingarticlestow:"Writing and preparing 20 articles",
    pagestow:"6 - 10 pages",
    Fullycustomizedwebsite:"Fully customized website",
  },
  ar: {
    home: "الصفحة الرئيسية",
    about: "من نحن",
    contact: "تواصل معنا",
    Portfolio: "اعمالنا",
    services: "الخدمات",
    general: "إحصائيات العام ",
    PORTFOLIO: "اعمالنا",
    MKAdvertising:"تأسست شركة MK للإعلان وإدارتها من قبل فريق محترف يتمتع بخبرة واسعة في مجال تقنية المعلومات والتصميم ، بهدف تلبية جميع احتياجات الأفراد والشركات. ساعدت الشركات الصغيرة في مجال تكنولوجيا المعلومات وتقديم حلول برمجية ممتازة ذات جودة عالية على نمو عملك وتنميت",
    Convertingvisitors: "ساعد مشروعك على أن ينطلق ينمو يتسارع",
    offer:"ينتهي العرض في",
    Excellentreturn:"عائد ممتاز معنا",
    mk: "شركة MK للدعاية والاعلان",
    Designexpertise:"خبرة التصميم",
    specializedteam:"فريق  متخصص",
    Wehaveateamof:"            لدينا فريق المتخصصين في تصميم المواقع والاعلانات ، نخطط لاستراتيجية متكاملة لاستهداف جمهورك لمساعدة عملك على الوصول إلى أفضل أداء ممكن.",
    Wetakethetime:"   نحن نأخذ الوقت الكافي لتحديث معرفتنا ومهاراتنا التي ساعدتنا على تطوير خبرة واسعة ومعرفة وخبرة أعمق.",
    Workingwithus:"العمل معنا يعني توفير الكثير من المال . سوف نقدم لك باقات تسويق الكتروني وخدمات ويب متكاملة بأسعار تنافسية السوق وباعلا جاوده ممكنه لارضاء عملائنا.",
    english: "en",
    arabic: "ar",
    Whyshouldyou:"لماذا يجب أن تعمل معنا؟",
    Allourdigitalmarketingp:"جميع حزم التسويق الرقمي لدينا متوفرة بأسعار تنافسية.نحن نضمن عوائد كبيرة لكل قرش تستثمره.",
    customerssatisfaction:"رضا العملاء",
    Wehavearigorousquality:"لدينا عملية صارمة لمراقبة الجودة لضمان أن كل ما نقدمه يلبي توقعات واحتياجات عملائنا.",
    SupportTeam:"فريق الدعم",
Wehaveacustomer:" لدينا فريق دعم عملاء يعمل على مدار 24 الساعة طوال أيام الأسبوع حتى نتواصل دائمًا مع عملائنا الحاليين والمستقبليين.",
Learnmore:"المزيد",
Buynow:"اشتري الان",
priceplans:"خطط الاسعار",
Chooseyouridealplan:"اختر خطتك المثالية",
Weofferyouafullrange:"نقدم لك مجموعة كاملة من خدمات الويب والتسويق الإلكتروني المتكاملة. لا توجد حدود ل    الطريقة التي يمكن بها تصميم حزم خدمات التسويق لدينا لمساعدة شركتك على الوصول إلى إمكاناتها الكاملة. نحن هنا    لمساعدتك على المضي قدمًا.",
Basicpackage:"الحزمة الأساسية",
Basicsite:"الموقع ألاساسي",
ArticlesWritingandOne:"8-12 مقالات كتابة وتقديم",
pagesOne:"3-5 صفحات",
Hostingemailaccounts:"الاستضافة وحسابات البريد الإلكتروني",
MobileandtabletResponsiveWebsite:"موقع مستجيب للجوّال والجهاز اللوحي",
DomainNameRegistration:"تسجيل اسم النطاق",
SEOfriendly:"ودية SEO",
Standardpackage:"الحزمة القياسية",
customsite:"موقع مخصص",
Writingandpreparingarticlestow:"كتابة وإعداد 20 مقالاً",
pagestow:"6 - 10 صفحات",
Fullycustomizedwebsite:"موقع مخصص بالكامل",
},
};

// count date

let countDownDate = new Date("Mar 3, 2023 23:59:59").getTime();
let counter = setInterval(()=>{

  // get date new
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 *60 * 60 *24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60 ) / (1000));



  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

if (dateDiff < 0)
{
clearInterval(counter);
alert("fish time")

}

},1000)

let nums = document.querySelectorAll(".nun");
let section = document.querySelector(".statistic");
let started =false;

window.onscroll = function(){
  if(window.scrollY >= section.offsetTop){
    if(!started){

      nums.forEach((num)=> startCont(num))
    }
    started = true;
  }
}

function startCont(el){
  let goal = el.dataset.goal;
  let count = setInterval(()=>{
    el.textContent++;
    if(el.textContent === goal){
      clearInterval(count);
    }
  },2000/goal)
}

//social-media
const socialMedia = document.querySelector(".social-media"),
        toogleBtn = socialMedia.querySelector(".toggle-btn");

toogleBtn.addEventListener("click", ()=>{
  socialMedia.classList.toggle("open")
})







// function onDrag({movementY}){
//   const navStyle = window.getComputedStyle(socialMedia);
//   navTop = parseInt(navStyle.top),
//   navHight = parseInt(navStyle.height),
//   windHight = window.innerHTML;
//   socialMedia.style.top = navTop > 0 ? `${navTop + movementY}px`: "1px";
//   if(navTop > windHight - navHight){
//     socialMedia.style.top = `${windHight - navHigh}px`
//   }
// }




// socialMedia.addEventListener("mousedown", ()=>{
//   socialMedia.addEventListener("mousemove", onDrag);
// })

// socialMedia.addEventListener("mouseup", ()=>{
//   socialMedia.addEventListener("mousemove", onDrag);
// })

// socialMedia.addEventListener("mouseleavr", ()=>{
//   socialMedia.addEventListener("mousemove", onDrag);
// })