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

//Document Section & Transaction Channels
const OnlineApplicationForm = document.getElementById('OnlineApplicationForm');
const FinancialFlexibility = document.getElementById('FinancialFlexibility');
const DocumentSection = document.getElementById('DocumentSection');
const DocumentSectionDes = document.getElementById('DocumentSectionDes');
const PhotocopyMyKad = document.getElementById('PhotocopyMyKad');
const Statements = document.getElementById('Statements');
const Utilities = document.getElementById('Utilities');
const TransactionChannels = document.getElementById('TransactionChannels');
const MadeThrough = document.getElementById('MadeThrough');

//Apply Form
const LoanAmount = document.getElementById('LoanAmount');
const LoanAge = document.getElementById('LoanAge');
const NameAs = document.getElementById('NameAs');
const Email = document.getElementById('Email');
const Mobile = document.getElementById('Mobile');
const EmploymentSector = document.getElementById('EmploymentSector');
const PleaseSelect = document.getElementById('PleaseSelect');
const Government = document.getElementById('Government');
const GovernmentLink = document.getElementById('GovernmentLink');
const Private = document.getElementById('Private');
const MonthlyGrossSalary = document.getElementById('MonthlyGrossSalary');
const MonthlyNettSalary = document.getElementById('MonthlyNettSalary');
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
  updateDocumentSection('bm');
  updateApplyForm('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateDocumentSection('en');
  updateApplyForm('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateDocumentSection('bm');
    updateApplyForm('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateDocumentSection('en');
    updateApplyForm('en');
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

  function updateDocumentSection(language) {
    if (language === 'bm') {
        OnlineApplicationForm.textContent = 'Borang Permohonan Atas Talian';
        FinancialFlexibility.textContent = 'Kami boleh memberi anda fleksibiliti kewangan untuk menggunakan dana - untuk semua kemudahan dan keperluan anda.';
        DocumentSection.textContent = 'Bahagian Dokumen';
        DocumentSectionDes.textContent = 'Pastikan anda menyediakan dokumen ini:';
        PhotocopyMyKad.textContent = 'Salinan MyKad';
        Statements.textContent = 'Slip gaji, kenyataan bank & KWSP 3 bulan terkini';
        Utilities.textContent = 'Bil utiliti terkini (bil elektrik atau air)';
        TransactionChannels.textContent = 'Saluran Transaksi';
        MadeThrough.textContent = 'Semua transaksi dibuat melalui saluran ini:';
    } else {
        OnlineApplicationForm.textContent = 'Online Application Form';
        FinancialFlexibility.textContent = 'We can give you the financial flexibility to use the funds - for all your convenience and needs.';
        DocumentSection.textContent = 'Document Section';
        DocumentSectionDes.textContent = 'Make sure to prepare these documents:';
        PhotocopyMyKad.textContent = 'Photocopy MyKad';
        Statements.textContent = 'Latest 3 months’ payslip, bank statements & EPF statement';
        Utilities.textContent = 'Latest Utilities bill (electric or water bill)';
        TransactionChannels.textContent = 'Transaction Channels';
        MadeThrough.textContent = 'All transaction are made through these channels:';
    }
  }

  function updateApplyForm(language) {
    if (language === 'bm') {
        LoanAmount.textContent = 'Jumlah Pinjaman (RM):';
        LoanAge.textContent = 'umur:';
        NameAs.textContent = 'Nama seperti Dalam NRIC:';
        Email.textContent = 'Emel:';
        Mobile.textContent = 'Nombor telefon:';
        EmploymentSector.textContent = 'Sektor Pekerjaan:';
        PleaseSelect.textContent = 'Sila Pilih';
        Government.textContent = 'Kerajaan';
        GovernmentLink.textContent = 'Syarikat Berkaitan Kerajaan';
        Private.textContent = 'Swasta';
        MonthlyGrossSalary.textContent = 'Gaji Kasar Bulanan (RM):';
        MonthlyNettSalary.textContent = 'Gaji Bersih Bulanan (RM):';
        SendMessage.textContent = 'Menghantar mesej';
    } else {
        LoanAmount.textContent = 'Loan Amount (RM):';
        LoanAge.textContent = 'Age:';
        NameAs.textContent = 'Name as In NRIC:';
        Email.textContent = 'Email:';
        Mobile.textContent = 'Mobile Contact No.:';
        EmploymentSector.textContent = 'Employment Sector:';
        PleaseSelect.textContent = 'Please Select';
        Government.textContent = 'Government';
        GovernmentLink.textContent = 'Government Link';
        Private.textContent = 'Private';
        MonthlyGrossSalary.textContent = 'Monthly Gross Salary (RM):';
        MonthlyNettSalary.textContent = 'Monthly Nett Salary (RM):';
        SendMessage.textContent = 'Send message';

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