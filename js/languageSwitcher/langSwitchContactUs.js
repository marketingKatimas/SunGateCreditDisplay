// Get the language toggle checkbox and the text elements
// Navbar
const languageToggle = document.getElementById('language-toggle');
const HomeNav = document.getElementById('HomeNav');
const AboutUsNav = document.getElementById('AboutUsNav');
const CalculatorNav = document.getElementById('CalculatorNav');
const PersonalLoanNav = document.getElementById('PersonalLoanNav');
const PaydayLoanNav = document.getElementById('PaydayLoanNav');
const DebtConsolidationNav = document.getElementById('DebtConsolidationNav');
const IslamicLoanNav = document.getElementById('IslamicLoanNav');
const WeddingLoanNav = document.getElementById('WeddingLoanNav');
const RenovationLoanNav = document.getElementById('RenovationLoanNav');
const MedicalLoanNav = document.getElementById('MedicalLoanNav');
const EducationLoanNav = document.getElementById('EducationLoanNav');
const OurServiceNav = document.getElementById('OurServiceNav');
const ContactUsNav = document.getElementById('ContactUsNav');
const ApplyNowNav = document.getElementById('ApplyNowNav');

//Contact Us
const GetInTouch = document.getElementById('GetInTouch');
const LoveHearFromYou = document.getElementById('LoveHearFromYou');
const fname = document.getElementById('name');
const fphone = document.getElementById('phone');
const femail = document.getElementById('email');
const fmessage = document.getElementById('message');
const SendMessage = document.getElementById('SendMessage');

//Footer
const SunGateFooter = document.getElementById('SunGateFooter');
const Explore = document.getElementById('Explore');
const HomeFooter = document.getElementById('HomeFooter');
const AboutUsFooter = document.getElementById('AboutUsFooter');
const OurServicesFooter = document.getElementById('OurServicesFooter');
const ContactUsFooter = document.getElementById('ContactUsFooter');
const OurServicesFooterTwo = document.getElementById('OurServicesFooterTwo');
const CalculatorFooter = document.getElementById('CalculatorFooter');
const PersonalLoanFooter = document.getElementById('PersonalLoanFooter');
const PaydayLoanFooter = document.getElementById('PaydayLoanFooter');
const DebtConsolidationFooter = document.getElementById('DebtConsolidationFooter');
const IslamicLoanFooter = document.getElementById('IslamicLoanFooter');
const WeddingLoanFooter = document.getElementById('WeddingLoanFooter');
const RenovationLoanFooter = document.getElementById('RenovationLoanFooter');
const MedicalLoanFooter = document.getElementById('MedicalLoanFooter');
const EducationLoanFooter = document.getElementById('EducationLoanFooter');
const ContactFooter = document.getElementById('ContactFooter');


// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateContact('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateContact('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateContact('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateContact('en');
    updateFooter('en');
    localStorage.setItem('language', 'en');
  }
});


function updateNavbar(language) {
    if (language === 'bm') {
      HomeNav.textContent = 'Laman Utama';
      AboutUsNav.textContent = 'Tentang Kami';
      OurServiceNav.textContent = 'Perkhidmatan Kami';
      CalculatorNav.textContent = 'Kalkulator Pinjaman Peribadi';
      PersonalLoanNav.textContent = 'Pembiayaan Peribadi';
      PaydayLoanNav.textContent = 'Pembiayaan Hari Gaji';
      DebtConsolidationNav.textContent = 'Penyatuan Hutang';
      IslamicLoanNav.textContent = 'Pembiayaan Islamik';
      WeddingLoanNav.textContent = 'Pembiayaan Kahwin';
      RenovationLoanNav.textContent = 'Pembiayaan Renovasi';
      MedicalLoanNav.textContent = 'Pembiayaan Perubatan';
      EducationLoanNav.textContent = 'Pembiayaan Pendidikan';
      ContactUsNav.textContent = 'Hubungi Kami';
      ApplyNowNav.textContent = 'Mohon Sekarang';
    } else {
      HomeNav.textContent = 'Home';
      AboutUsNav.textContent = 'About us';
      OurServiceNav.textContent = 'Our Services';
      CalculatorNav.textContent = 'Personal Loan Calculator';
      PersonalLoanNav.textContent = 'Personal Loan';
      PaydayLoanNav.textContent = 'Payday Loan';
      DebtConsolidationNav.textContent = 'Debt Consolidation';
      IslamicLoanNav.textContent = 'Islamic Loan';
      WeddingLoanNav.textContent = 'Wedding Loan';
      RenovationLoanNav.textContent = 'Renovation Loan';
      MedicalLoanNav.textContent = 'Medical Loan';
      EducationLoanNav.textContent = 'Education Loan';
      ContactUsNav.textContent = 'Contact Us';
      ApplyNowNav.textContent = 'Apply Now';
    }
  }

  function updateContact(language) {
    if (language === 'bm') {
      GetInTouch.textContent = 'HUBUNGI KAMI';
      LoveHearFromYou.textContent = 'Kami Ingin Mendengar Daripada Anda, Mari Hubungi Kami';
      fname.placeholder = 'Nama *';
      fphone.placeholder = 'Telefon *';
      femail.placeholder = 'E-mel *';
      fmessage.placeholder = 'Mesej';
      SendMessage.textContent = 'MENGHANTAR MESEJ'
    } else {
        GetInTouch.textContent = 'GET IN TOUCH';
        LoveHearFromYou.textContent = "We'd Love to Hear From You, Let's Get In Touch";
        fname.placeholder = 'Name *';
        fphone.placeholder = 'Phone *';
        femail.placeholder = 'Email *';
        fmessage.placeholder = 'Message';
        SendMessage.textContent = 'SEND MESSAGE'
    }
  }

  function updateFooter(language) {
    if (language === 'bm') {
        SunGateFooter.textContent = 'Sun Gate membantu anda dalam perjalanan kewangan anda. Setiap maklumat akan disampaikan dengan tepat dan profesional, maka anda berada di tangan yang baik. ';
        Explore.textContent = 'PAUTAN BERGUNA';
        HomeFooter.textContent = 'Laman Utama';
        AboutUsFooter.textContent = 'Tentang Kami';
        OurServicesFooter.textContent = 'Perkhidmatan Kami';
        ContactUsFooter.textContent = 'Hubungi Kami';
        OurServicesFooterTwo.textContent = 'Perkhidmatan Kami';
        CalculatorFooter.textContent = 'Kalkulator Pinjaman Peribadi';
        PersonalLoanFooter.textContent = 'Pembiayaan Peribadi';
        PaydayLoanFooter.textContent = 'Pembiayaan Hari Gaji';
        DebtConsolidationFooter.textContent = 'Penyatuan Hutang';
        IslamicLoanFooter.textContent = 'Pembiayaan Islamik';
        WeddingLoanFooter.textContent = 'Pembiayaan Kahwin';
        RenovationLoanFooter.textContent = 'Pembiayaan Renovasi';
        MedicalLoanFooter.textContent = 'Pembiayaan Perubatan';
        EducationLoanFooter.textContent = 'Pembiayaan Pendidikan';
        ContactFooter.textContent = ' Hubungi';

    } else {
        SunGateFooter.textContent = 'In Sun Gate Credit every piece of information will be relayed easily and accurately to promote total transparency so you know you’re in good hands.';
        Explore.textContent = 'USEFUL LINKS';
        HomeFooter.textContent = 'Home';
        AboutUsFooter.textContent = 'About us';
        OurServicesFooter.textContent = 'Our Services';
        ContactUsFooter.textContent = 'Contact us';
        OurServicesFooterTwo.textContent = 'Our Services';
        CalculatorFooter.textContent = 'Personal Loan Calculator';
        PersonalLoanFooter.textContent = 'Personal Loan';
        PaydayLoanFooter.textContent = 'Payday Loan';
        DebtConsolidationFooter.textContent = 'Debt Consolidation';
        IslamicLoanFooter.textContent = 'Islamic Loan';
        WeddingLoanFooter.textContent = 'Wedding Loan';
        RenovationLoanFooter.textContent = 'Renovation Loan';
        MedicalLoanFooter.textContent = 'Medical Loan';
        EducationLoanFooter.textContent = 'Education Loan';
        ContactFooter.textContent = 'CONTACT';
    }
  }