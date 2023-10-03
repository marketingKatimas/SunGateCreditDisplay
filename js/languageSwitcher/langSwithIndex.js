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

//Banner
const SunGateOne = document.getElementById('SunGateOne');
const FlexiblePlans = document.getElementById('FlexiblePlans');
const ContactUsBanner = document.getElementById('ContactUsBanner');
const SunGateTwo = document.getElementById('SunGateTwo');
const PlanYourFinancing = document.getElementById('PlanYourFinancing');
const LearnMoreBanner = document.getElementById('LearnMoreBanner');
const SunGateThree = document.getElementById('SunGateThree');
const EnjoyExpertAdvice = document.getElementById('EnjoyExpertAdvice');
const ApplyNowBanner = document.getElementById('ApplyNowBanner');

//CallOut-Banner
const WeHelps = document.getElementById('WeHelps');
const RelayedAccurate = document.getElementById('RelayedAccurate');
const LearnMoreCallout = document.getElementById('LearnMoreCallout');

//Why Choose Us
const WhyChooseUs = document.getElementById('WhyChooseUs');
const TotalTransparency = document.getElementById('TotalTransparency');
const TotalTransparencyDes = document.getElementById('TotalTransparencyDes');
const DataPrivacyConfidentiality = document.getElementById('DataPrivacyConfidentiality');
const DataPrivacyConfidentialityDes = document.getElementById('DataPrivacyConfidentialityDes');
const ExcellentClientServicing = document.getElementById('ExcellentClientServicing');
const ExcellentClientServicingDes = document.getElementById('ExcellentClientServicingDes');

//Services List
const PersonalLoanServices = document.getElementById('PersonalLoanServices');
const PaydayLoanServices = document.getElementById('PaydayLoanServices');
const DebtConsolidationServices = document.getElementById('DebtConsolidationServices');
const IslamicLoanServices = document.getElementById('IslamicLoanServices');
const WeddingLoanServices = document.getElementById('WeddingLoanServices');
const RenovationLoanServices = document.getElementById('RenovationLoanServices');
const MedicalLoanServices = document.getElementById('MedicalLoanServices');
const EducationLoanServices = document.getElementById('EducationLoanServices');
const LearnMoreServices = document.getElementById('LearnMoreServices');

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
  updateBanner('bm');
  updateCallout('bm');
  updateWhyChooseUs('bm');
  updateServicesList('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateBanner('en');
  updateCallout('en');
  updateWhyChooseUs('en');
  updateServicesList('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateBanner('bm');
    updateCallout('bm');
    updateWhyChooseUs('bm');
    updateServicesList('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateBanner('en');
    updateCallout('en');
    updateWhyChooseUs('en');
    updateServicesList('en');
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

function updateBanner(language) {
    if (language === 'bm') {
      SunGateOne.textContent = 'Selamat Datang Ke Sun Gate Credit';
      FlexiblePlans.innerHTML = 'Pelan Fleksibel <br>untuk Setiap Keperluan';
      ContactUsBanner.textContent = 'Hubungi Kami';
      SunGateTwo.textContent = 'Selamat Datang Ke Sun Gate Credit';
      PlanYourFinancing.innerHTML = 'Rancang kewangan <br>anda dengan hati yang senang.';
      LearnMoreBanner.textContent = 'Ketahui Lebih Lanjut';
      SunGateThree.textContent = 'Selamat Datang Ke Sun Gate Credit';
      EnjoyExpertAdvice.innerHTML = 'Nikmati Nasihat Pakar <br>dengan Kadar yang Berpatutan';
      ApplyNowBanner.textContent = 'Mohon Sekarang';
    } else {
        SunGateOne.textContent = 'Welcome to Sun Gate Credit';
        FlexiblePlans.innerHTML = 'Flexible Plans <br>for Every Need.';
        ContactUsBanner.textContent = 'Contact Us';
        SunGateTwo.textContent = 'Welcome to Sun Gate Credit';
        PlanYourFinancing.innerHTML = 'Plan your financing <br>with ease of heart.';
        LearnMoreBanner.textContent = 'Learn More';
        SunGateThree.textContent = 'Welcome to Sun Gate Credit';
        EnjoyExpertAdvice.innerHTML = 'Enjoy Expert Advice & <br>Affordable Rates';
        ApplyNowBanner.textContent = 'Apply Now';
    }
  }

  function updateCallout(language) {
    if (language === 'bm') {
        WeHelps.innerHTML = 'Kami membantu anda dalam perjalanan pembiayaan anda';
        RelayedAccurate.innerHTML = 'Sun Gate Credit membantu anda dalam perjalanan kewangan anda. Setiap maklumat akan disampaikan dengan tepat dan profesional, maka anda berada di tangan yang baik.';
        LearnMoreCallout.textContent = 'Ketahui Lebih Lanjut';

    } else {
        WeHelps.innerHTML = 'We help you in your <br>financing journey';
        RelayedAccurate.innerHTML = 'In Sun Gate Credit every piece of information will be relayed easily and accurately to promote total transparency so you know you’re in good hands.';
        LearnMoreCallout.textContent = 'Learn More';
    }
  }

  function updateWhyChooseUs(language) {
    if (language === 'bm') {
        WhyChooseUs.textContent = 'kenapa pilih kami';
        TotalTransparency.innerHTML = 'Ketelusan';
        TotalTransparencyDes.textContent = 'Membantu pelanggan dan memberi jalan penyelesaian kepada masalah kewangan merupakan benda yang lumrah. Maka kami memastikan anda tahu semua yang berlaku agar anda boleh membuat keputusan yang baik';
        DataPrivacyConfidentiality.textContent = 'Perlindungan Data Peribadi';
        DataPrivacyConfidentialityDes.textContent = 'Kami menghargai privasi data peribadi anda, maka segala maklumat yang telah kami terima akan disimpan ketat. Anda juga akan dilindungi di bawah Akta Perlindungan Data Peribadi 2010. ';
        ExcellentClientServicing.textContent = 'Khidmat Langgan Unggul';
        ExcellentClientServicingDes.textContent = 'Pelanggan penting untuk kami & kami berdedikasi untuk memberi jalan penyelesaian kepada anda. Dengan pasukan pakar dan profesional kami, kami pastikan perkhidmatan langgan yang terbaik untuk anda.';

    } else {
        WhyChooseUs.textContent = 'Why Choose Us';
        TotalTransparency.innerHTML = 'Total Transparency';
        TotalTransparencyDes.textContent = 'Serving our clients and providing solutions to their financial problems is our main role. We give you full transparency on the whole process so you can make';
        DataPrivacyConfidentiality.textContent = 'Data Privacy & Confidentiality';
        DataPrivacyConfidentialityDes.textContent = 'We value your data privacy and all your details are kept strictly confidential. You will also be protected under Personal Data Protection Act 2010.';
        ExcellentClientServicing.textContent = 'Excellent Client Servicing';
        ExcellentClientServicingDes.textContent = 'We are client-centric & we love providing solutions to you. With our trained team of professionals and experts, we make sure our customer service is the best. ';

    }
  }

  function updateServicesList(language) {
    if (language === 'bm') {
        PersonalLoanServices.textContent = 'Pembiayaan Peribadi';
        PaydayLoanServices.innerHTML = 'Pembiayaan Hari Gaji';
        DebtConsolidationServices.textContent = 'Penyatuan Hutang';
        IslamicLoanServices.textContent = 'Pembiayaan Islamik';
        WeddingLoanServices.textContent = 'Pembiayaan Kahwin';
        RenovationLoanServices.textContent = 'Pembiayaan Renovasi';
        MedicalLoanServices.textContent = 'Pembiayaan Perubatan';
        EducationLoanServices.textContent = 'Pembiayaan Pendidikan';
        LearnMoreServices.textContent = 'KETAHUI LEBIH LANJUT';

    } else {
        PersonalLoanServices.textContent = 'Personal Loan';
        PaydayLoanServices.innerHTML = 'Payday Loan';
        DebtConsolidationServices.textContent = 'Debt Consolidation';
        IslamicLoanServices.textContent = 'Islamic Loan';
        WeddingLoanServices.textContent = 'Wedding Loan';
        RenovationLoanServices.textContent = 'Renovation Loan';
        MedicalLoanServices.textContent = 'Medical Loan';
        EducationLoanServices.textContent = 'Education Loan';
        LearnMoreServices.textContent = 'LEARN MORE';
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