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

//Calculator
const PersonalLoanCalculatorSubText = document.getElementById('PersonalLoanCalculatorSubText');
const YourMonthlyPayment = document.getElementById('YourMonthlyPayment');
const TotalAmountYouPay = document.getElementById('TotalAmountYouPay');
const months = document.getElementById('months');
const ApplyNowBtn = document.getElementById('ApplyNowBtn');
const Estimation = document.getElementById('Estimation');
const LoanAmount = document.getElementById('LoanAmount');
const TenureInMonths = document.getElementById('TenureInMonths');

//Loan Application Eligibility
const LoanApplicationEligibility = document.getElementById('LoanApplicationEligibility');
const LoanApplicationEligibilityDes = document.getElementById('LoanApplicationEligibilityDes');
const Malaysian = document.getElementById('Malaysian');
const MalaysianDes = document.getElementById('MalaysianDes');
const EPFContributor = document.getElementById('EPFContributor');
const EPFContributorDes = document.getElementById('EPFContributorDes');
const SalaryRequirement = document.getElementById('SalaryRequirement');
const SalaryRequirementDes = document.getElementById('SalaryRequirementDes');
const ApplyNowEligibility = document.getElementById('ApplyNowEligibility');

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
  updateCalculator('bm');
  updateEligibility('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateTitle('en');
  updateCalculator('en');
  updateEligibility('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateTitle('bm');
    updateCalculator('bm');
    updateEligibility('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateTitle('en');
    updateCalculator('en');
    updateEligibility('en');
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

  function updateCalculator(language) {
    if (language === 'bm') {
        PersonalLoanCalculatorSubText.textContent = 'Kalkulator Pinjaman Peribadi';
        YourMonthlyPayment.textContent = 'Bayaran Bulanan Anda:';
        TotalAmountYouPay.textContent = 'Jumlah amaun yang anda bayar dalam';
        months.textContent = 'bulan';
        ApplyNowBtn.textContent = 'Mohon Sekarang';
        Estimation.textContent = 'Gunakan kalkulator ini untuk mendapatkan anggaran.';
        LoanAmount.textContent = 'Jumlah Pinjaman';
        TenureInMonths.textContent = 'Tempoh (dalam bulan)';
    } else {
        PersonalLoanCalculatorSubText.textContent = 'Personal Loan Calculator';
        YourMonthlyPayment.textContent = 'Your Monthly Payment:';
        TotalAmountYouPay.textContent = 'Total amount you pay in';
        months.textContent = 'months';
        ApplyNowBtn.textContent = 'Apply Now';
        Estimation.textContent = 'Use this calculator to get an estimation.';
        LoanAmount.textContent = 'Loan Amount:';
        TenureInMonths.textContent = 'Tenure (in months):';
    }
  }

  function updateEligibility(language) {
    if (language === 'bm') {
        LoanApplicationEligibility.textContent = 'Kelayakan Permohonan Pinjaman';
        LoanApplicationEligibilityDes.textContent = 'Jika anda menjawab “YA” kepada semua soalan di bawah, maka anda layak! Mohon segera untuk dapatkan bantuan kewangan untuk keperluan anda.';
        Malaysian.textContent = 'Malaysian';
        MalaysianDes.textContent = 'Adakah anda warganegara Malaysia berumur 18 - 60?';
        EPFContributor.textContent = 'Pencarum KWSP';
        EPFContributorDes.textContent = 'Adakah anda pencarum KWSP?';
        SalaryRequirement.textContent = 'Keperluan Gaji';
        SalaryRequirementDes.textContent = 'Adakah anda menerima gaji minimum RM1,200 dan dibayar melalui akaun bank?';
        ApplyNowEligibility.textContent = 'Mohon sekarang';
    } else {
        LoanApplicationEligibility.textContent = 'Loan Application Eligibility';
        LoanApplicationEligibilityDes.textContent = 'If you answer “YES” to all the below questions, then you are eligible! Apply for our loan and get the financial relief you need.';
        Malaysian.textContent = 'Malaysian';
        MalaysianDes.textContent = 'Are you a Malaysian aged 18 - 60?';
        EPFContributor.textContent = 'EPF Contributor';
        EPFContributorDes.textContent = 'Are you a consistent EPF contributor?';
        SalaryRequirement.textContent = 'Salary Requirement';
        SalaryRequirementDes.textContent = 'Do you have a minimum salary of RM1,200 and you receive the salary through your bank account?';
        ApplyNowEligibility.textContent = 'Apply Now';
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