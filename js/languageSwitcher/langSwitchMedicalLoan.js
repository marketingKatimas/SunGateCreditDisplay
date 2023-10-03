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

//Title
const OurServicesTitle = document.getElementById('OurServicesTitle');

//Sidebar
const OurServicesSidebar = document.getElementById('OurServicesSidebar');
const PersonalLoanSidebar = document.getElementById('PersonalLoanSidebar');
const PaydayLoanSidebar = document.getElementById('PaydayLoanSidebar');
const DebtConsolidationSidebar = document.getElementById('DebtConsolidationSidebar');
const IslamicLoanSidebar = document.getElementById('IslamicLoanSidebar');
const WeddingLoanSidebar = document.getElementById('WeddingLoanSidebar');
const RenovationLoanSidebar = document.getElementById('RenovationLoanSidebar');
const MedicalLoanSidebar = document.getElementById('MedicalLoanSidebar');
const EducationLoanSidebar = document.getElementById('EducationLoanSidebar');

//Medical Loan
const MedicalLoanDetail = document.getElementById('MedicalLoanDetail');
const MedicalLoanDetailDes = document.getElementById('MedicalLoanDetailDes');
const ApplyNowServices = document.getElementById('ApplyNowServices');

//The Benefit
const Benefits = document.getElementById('Benefits');
const TheBenefits = document.getElementById('TheBenefits');
const BetterCreditScore = document.getElementById('BetterCreditScore');
const Flexible = document.getElementById('Flexible');
const EaseApproval = document.getElementById('EaseApproval');
const Convenience = document.getElementById('Convenience');

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
  updateTitle('bm');
  updateSidebar('bm');
  updateMedicalLoan('bm');
  updateBenefits('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateTitle('en');
  updateSidebar('en');
  updateMedicalLoan('en');
  updateBenefits('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateTitle('bm');
    updateSidebar('bm');
    updateMedicalLoan('bm');
    updateBenefits('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateTitle('en');
    updateSidebar('en');
    updateMedicalLoan('en');
    updateBenefits('en');
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

function updateTitle(language) {
    if (language === 'bm') {
        OurServicesTitle.textContent = 'Perkhidmatan Kami';
    } else {
        OurServicesTitle.textContent = 'Our Services';
    }
  }

  function updateSidebar(language) {
    if (language === 'bm') {
      OurServicesSidebar.textContent = 'Perkhidmatan Kami';
      PersonalLoanSidebar.textContent = 'Pembiayaan Peribadi';
      PaydayLoanSidebar.textContent = 'Pembiayaan Hari Gaji';
      DebtConsolidationSidebar.textContent = 'Penyatuan Hutang';
      IslamicLoanSidebar.textContent = 'Pembiayaan Islamik';
      WeddingLoanSidebar.textContent = 'Pembiayaan Kahwin';
      RenovationLoanSidebar.textContent = 'Pembiayaan Renovasi';
      MedicalLoanSidebar.textContent = 'Pembiayaan Perubatan';
      EducationLoanSidebar.textContent = 'Pembiayaan Pendidikan';
    } else {
      OurServicesSidebar.textContent = 'Our Services';
      PersonalLoanSidebar.textContent = 'Personal Loan';
      PaydayLoanSidebar.textContent = 'Payday Loan';
      DebtConsolidationSidebar.textContent = 'Debt Consolidation';
      IslamicLoanSidebar.textContent = 'Islamic Loan';
      WeddingLoanSidebar.textContent = 'Wedding Loan';
      RenovationLoanSidebar.textContent = 'Renovation Loan';
      MedicalLoanSidebar.textContent = 'Medical Loan';
      EducationLoanSidebar.textContent = 'Education Loan';
    }
  }

  function updateMedicalLoan(language) {
    if (language === 'bm') {
        MedicalLoanDetail.textContent = 'Pembiayaan Perubatan';
        MedicalLoanDetailDes.textContent = 'Kesihatan anda keutamaan kami. Dengan pembiayaan perubatan kami, dapatkan sokongan yang anda perlukan. Tumpukan kebajikan diri anda dengan pilihan bayaran balik kami yang fleksibel dan proses kelulusan yang pantas.';
      ApplyNowServices.textContent = 'Mohon Sekarang';
    } else {
        MedicalLoanDetail.textContent = 'Medical Loan';
        MedicalLoanDetailDes.textContent = 'Your health is our priority, and with our medical loan, you can receive the support you need. Focus on your well-being with our flexible repayment options and quick approval process.';
      ApplyNowServices.textContent = 'Apply Now';
    }
  }

  function updateBenefits(language) {
    if (language === 'bm') {
      Benefits.textContent = 'Faedah Pinjaman Peribadi Dengan Kami:';
      TheBenefits.textContent = 'Pinjaman kami menonjol kerana kami menyediakan peminjam kami dengan pelbagai manfaat unik.';
      BetterCreditScore.textContent = 'Skor Kredit yang Lebih Baik dan Diperbaiki';
      Flexible.textContent = 'Tempoh Pinjaman Fleksibel';
      EaseApproval.textContent = 'Kemudahan Permohonan dan Kelulusan';
      Convenience.textContent = 'Meningkatkan Keselesaan';
    } else {
      Benefits.textContent = 'Benefits Of A Personal Loan With Us:';
      TheBenefits.textContent = 'Our loans stand out as we provide our borrowers with a wide range of unique benefits.';
      BetterCreditScore.textContent = 'Better and Improved Credit Score';
      Flexible.textContent = 'Flexible Loan Tenure';
      EaseApproval.textContent = 'Ease of Application and Approval';
      Convenience.textContent = 'Increased Convenience';
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