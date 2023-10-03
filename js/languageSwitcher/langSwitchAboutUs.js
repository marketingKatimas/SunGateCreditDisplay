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

//CallOut Banner
const WisestChoice = document.getElementById('WisestChoice');
const OurPurpose = document.getElementById('OurPurpose');
const ContactUsCallOutBanner = document.getElementById('ContactUsCallOutBanner');

//What Makes Us Different
const WhatMakesUsDifferent = document.getElementById('WhatMakesUsDifferent');
const FastApprovalProcess = document.getElementById('FastApprovalProcess');
const FastApprovalProcessDes = document.getElementById('FastApprovalProcessDes');
const LowInterestRate = document.getElementById('LowInterestRate');
const LowInterestRateDes = document.getElementById('LowInterestRateDes');
const ShariahComplaint = document.getElementById('ShariahComplaint');
const ShariahComplaintDes = document.getElementById('ShariahComplaintDes');
const FlexibleRepaymentPlan = document.getElementById('FlexibleRepaymentPlan');
const FlexibleRepaymentPlanDes = document.getElementById('FlexibleRepaymentPlanDes');

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
  updateCalloutBanner('bm');
  updateWhatMakesUsDifferent('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateCalloutBanner('en');
  updateWhatMakesUsDifferent('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateCalloutBanner('bm');
    updateWhatMakesUsDifferent('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateCalloutBanner('en');
    updateWhatMakesUsDifferent('en');
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

function updateCalloutBanner(language) {
    if (language === 'bm') {
        WisestChoice.innerHTML = 'Sun Gate Credit ialah pilihan bijak anda untuk pinjaman yang selamat. ';
        OurPurpose.textContent = 'Objektif utama kami adalah untuk membantu anda dalam perjalanan kewangan anda, tidak kira apa matlamat anda. Wise Capital Credit mereka pelan khas pinjaman berdasarkan pendapatan bulanan anda supaya anda tidak mengalami beban kewangan.';
        ContactUsCallOutBanner.textContent = 'HUBUNGI KAMI';
    } else {
        WisestChoice.innerHTML = 'Sun Gate Credit is <br>your wisest choice <br>for safe financing.';
        OurPurpose.textContent = 'Our core purpose is to help you in your financial journey, regardless of your goals and intentions. We will personalize a financing plan that caters to your budget to ease your financial burden.';
        ContactUsCallOutBanner.textContent = 'CONTACT US';
    }
  }

function updateWhatMakesUsDifferent(language) {
    if (language === 'bm') {
        WhatMakesUsDifferent.textContent = 'APA YANG MEMBEZAKAN KAMI?';
        FastApprovalProcess.textContent = 'Proses Kelulusan Pantas';
        FastApprovalProcessDes.textContent = 'Proses senang & pantas membenarkan anda untuk meluangkan masa lebih untuk diri sendiri kerana kelulusan pinjaman kami hanya memakan masa yang pendek selepas penyemakan dokumen';
        LowInterestRate.textContent = 'Kadar Faedah Rendah';
        LowInterestRateDes.textContent = 'Buang risau dengan kadar faedah rendah untuk bayaran balik bulanan yang senang. ';
        ShariahComplaint.textContent = 'Patuh Syariah';
        ShariahComplaintDes.textContent = 'Kami terapkan khidmat pinjaman yang halal dan diluluskan seiring dengan undang-undang syariah. Setiap transaksi adalah sah & selamat.';
        FlexibleRepaymentPlan.textContent = 'Pelan Bayaran Balik Fleksibel';
        FlexibleRepaymentPlanDes.textContent = 'Berdasarkan kelayakan kredit & pendapatan bulanan, anda akan menerima pelan pinjaman khas dari konsultan anda untuk meringankan beban kewangan anda.';
    } else {
        WhatMakesUsDifferent.textContent = 'WHAT MAKES US DIFFERENT?';
        FastApprovalProcess.textContent = 'Fast Approval Process';
        FastApprovalProcessDes.textContent = 'Our time-efficient & convenient process leaves you with more time to spend on yourself after document submission.';
        LowInterestRate.textContent = 'Low Interest Rate';
        LowInterestRateDes.textContent = 'Throw your worries out the window with our low interest rate to ease your monthly repayments.';
        ShariahComplaint.textContent = 'Shariah-Complaint';
        ShariahComplaintDes.textContent = 'We implement a halal financing service, approved in accordance with Shariah law, to ensure every transaction is legal and safe.';
        FlexibleRepaymentPlan.textContent = 'Flexible Repayment Plan';
        FlexibleRepaymentPlanDes.textContent = 'We personalise a loan plan that caters to your needs based on your creditworthiness and income, so you won’t have to live from paycheck to paycheck every month.';
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