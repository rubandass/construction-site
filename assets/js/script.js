jQuery().ready(function () {
    console.log('Script starting' + $('.language-change').text());
    let navbarText = {
        'home': {
            'en': 'Home',
            'fr': 'Accueil',
            'md': 'Home'
        },
        'our-projects': {
            'en': 'Our Projects',
            'fr': 'Nos projets',
            'md': 'Ny tetikasanay',
        },
        'about-us': {
            'en': 'About Us',
            'fr': 'À propos de nous',
            'md': 'Momba ANAY'
        },
        'slno': {
            'en': 'Sl.No',
            'fr': 'Sl.Non',
            'md': 'Sl.No'
        },
        'name': {
            'en': 'Name',
            'fr': 'Nom',
            'md': 'Anarana'
        },
        'address': {
            'en': 'Address',
            'fr': 'Adresse',
            'md': 'Address'
        },
        'property': {
            'en': 'Property',
            'fr': 'Propriété',
            'md': 'Property'
        }
    }
    setLanguageString(localStorage.getItem('language'));

    $(".dropdown-menu .dropdown-item").click(function () {
        // $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        // $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        languageChange(this);
    });
    function languageChange(element) {
        let selectedLanguage = '';
        if ($(element).text().includes('English')) {
            console.log('English');
            selectedLanguage = 'en';
            setLanguageString(selectedLanguage);
        } else if ($(element).text().includes('French')) {
            console.log('French');
            selectedLanguage = 'fr';
            setLanguageString(selectedLanguage);
        } else {
            console.log('Madagascar');
            selectedLanguage = 'md';
            setLanguageString(selectedLanguage);
        }
        $(element).parents(".nav-item").find('.nav-link span').html($(element).html());
        localStorage.setItem('language', selectedLanguage);
    }

    function setLanguageString(language) {
        $('.home').text(navbarText.home[language]);
        $('.our-projects').text(navbarText["our-projects"][language]);
        $('.about-us').text(navbarText["about-us"][language]);
        $('#language-selection').html($('#' + language).html());
        $('.sl-no').text(navbarText.slno[language]);
        $('.name').text(navbarText.name[language]);
        $('.address').text(navbarText.address[language]);
        $('.property').text(navbarText.property[language]);
    }
}); 