// this is really counterintuitive but due to time constraints and realizing i set this up wrong im going to use --light-x as the default and set them equal to other colors to handle dark mode

function setLightMode() {
    const r = $(':root');

    r.css('--primary', $(':root').css('--light-primary'));
    r.css('--surface-tint', $(':root').css('--light-surface-tint'));
    r.css('--on-primary', $(':root').css('--light-on-primary'));
    r.css('--primary-container', $(':root').css('--light-primary-container'));
    r.css('--on-primary-container', $(':root').css('--light-on-primary-container'));
    r.css('--secondary', $(':root').css('--light-secondary'));
    r.css('--on-secondary', $(':root').css('--light-on-secondary'));
    r.css('--secondary-container', $(':root').css('--light-secondary-container'));
    r.css('--on-secondary-container', $(':root').css('--light-on-secondary-container'));
    r.css('--teritary', $(':root').css('--light-teritary'));
    r.css('--on-teritary', $(':root').css('--light-on-teritary'));
    r.css('--teritary-container', $(':root').css('--light-teritary-container'));
    r.css('--on-teritary-container', $(':root').css('--light-on-teritary-container'));
    r.css('--error', $(':root').css('--light-error'));
    r.css('--on-error', $(':root').css('--light-on-error'));
    r.css('--error-container', $(':root').css('--light-error-container'));
    r.css('--on-error-container', $(':root').css('--light-on-error-container'));
    r.css('--background', $(':root').css('--light-background'));
    r.css('--on-background', $(':root').css('--light-on-background'));
    r.css('--surface', $(':root').css('--light-surface'));
    r.css('--on-surface', $(':root').css('--light-on-surface'));
    r.css('--surface-variant', $(':root').css('--light-surface-variant'));
    r.css('--on-surface-variant', $(':root').css('--light-on-surface-variant'));
    r.css('--outline', $(':root').css('--light-outline'));
    r.css('--outline-variant', $(':root').css('--light-outline-variant'));
    r.css('--shadow', $(':root').css('--light-shadow'));
    r.css('--scrim', $(':root').css('--light-scrim'));
    r.css('--inverse-surface', $(':root').css('--light-inverse-surface'));
    r.css('--inverse-on-surface', $(':root').css('--light-inverse-on-surface'));
    r.css('--inverse-primary', $(':root').css('--light-inverse-primary'));
    r.css('--primary-fixed', $(':root').css('--light-primary-fixed'));
    r.css('--on-primary-fixed', $(':root').css('--light-on-primary-fixed'));
    r.css('--primary-fixed-dim', $(':root').css('--light-primary-fixed-dim'));
    r.css('--secondary-fixed', $(':root').css('--light-secondary-fixed'));
    r.css('--on-secondary-fixed', $(':root').css('--light-on-secondary-fixed'));
    r.css('--secondary-fixed-dim', $(':root').css('--light-secondary-fixed-dim'));
    r.css('--teritary-fixed', $(':root').css('--light-teritary-fixed'));
    r.css('--on-teritary-fixed', $(':root').css('--light-on-teritary-fixed'));
    r.css('--teritary-fixed-dim', $(':root').css('--light-teritary-fixed-dim'));
    r.css('--on-teritary-fixed-variant', $(':root').css('--light-on-teritary-fixed-variant'));
    r.css('--surface-dim', $(':root').css('--light-surface-dim'));
    r.css('--surface-bright', $(':root').css('--light-surface-bright'));
    r.css('--surface-container-lowest', $(':root').css('--light-surface-container-lowest'));
    r.css('--surface-container', $(':root').css('--light-surface-container'));
    r.css('--surface-container-high', $(':root').css('--light-surface-container-high'));
    r.css('--surface-container-highest', $(':root').css('--light-surface-container-highest'));
}

function setDarkMode() {
    const r = $(':root');

    r.css('--primary', $(':root').css('--dark-primary'));
    r.css('--surface-tint', $(':root').css('--dark-surface-tint'));
    r.css('--on-primary', $(':root').css('--dark-on-primary'));
    r.css('--primary-container', $(':root').css('--dark-primary-container'));
    r.css('--on-primary-container', $(':root').css('--dark-on-primary-container'));
    r.css('--secondary', $(':root').css('--dark-secondary'));
    r.css('--on-secondary', $(':root').css('--dark-on-secondary'));
    r.css('--secondary-container', $(':root').css('--dark-secondary-container'));
    r.css('--on-secondary-container', $(':root').css('--dark-on-secondary-container'));
    r.css('--teritary', $(':root').css('--dark-teritary'));
    r.css('--on-teritary', $(':root').css('--dark-on-teritary'));
    r.css('--teritary-container', $(':root').css('--dark-teritary-container'));
    r.css('--on-teritary-container', $(':root').css('--dark-on-teritary-container'));
    r.css('--error', $(':root').css('--dark-error'));
    r.css('--on-error', $(':root').css('--dark-on-error'));
    r.css('--error-container', $(':root').css('--dark-error-container'));
    r.css('--on-error-container', $(':root').css('--dark-on-error-container'));
    r.css('--background', $(':root').css('--dark-background'));
    r.css('--on-background', $(':root').css('--dark-on-background'));
    r.css('--surface', $(':root').css('--dark-surface'));
    r.css('--on-surface', $(':root').css('--dark-on-surface'));
    r.css('--surface-variant', $(':root').css('--dark-surface-variant'));
    r.css('--on-surface-variant', $(':root').css('--dark-on-surface-variant'));
    r.css('--outline', $(':root').css('--dark-outline'));
    r.css('--outline-variant', $(':root').css('--dark-outline-variant'));
    r.css('--shadow', $(':root').css('--dark-shadow'));
    r.css('--scrim', $(':root').css('--dark-scrim'));
    r.css('--inverse-surface', $(':root').css('--dark-inverse-surface'));
    r.css('--inverse-on-surface', $(':root').css('--dark-inverse-on-surface'));
    r.css('--inverse-primary', $(':root').css('--dark-inverse-primary'));
    r.css('--primary-fixed', $(':root').css('--dark-primary-fixed'));
    r.css('--on-primary-fixed', $(':root').css('--dark-on-primary-fixed'));
    r.css('--primary-fixed-dim', $(':root').css('--dark-primary-fixed-dim'));
    r.css('--secondary-fixed', $(':root').css('--dark-secondary-fixed'));
    r.css('--on-secondary-fixed', $(':root').css('--dark-on-secondary-fixed'));
    r.css('--secondary-fixed-dim', $(':root').css('--dark-secondary-fixed-dim'));
    r.css('--teritary-fixed', $(':root').css('--dark-teritary-fixed'));
    r.css('--on-teritary-fixed', $(':root').css('--dark-on-teritary-fixed'));
    r.css('--teritary-fixed-dim', $(':root').css('--dark-teritary-fixed-dim'));
    r.css('--on-teritary-fixed-variant', $(':root').css('--dark-on-teritary-fixed-variant'));
    r.css('--surface-dim', $(':root').css('--dark-surface-dim'));
    r.css('--surface-bright', $(':root').css('--dark-surface-bright'));
    r.css('--surface-container-lowest', $(':root').css('--dark-surface-container-lowest'));
    r.css('--surface-container', $(':root').css('--dark-surface-container'));
    r.css('--surface-container-high', $(':root').css('--dark-surface-container-high'));
    r.css('--surface-container-highest', $(':root').css('--dark-surface-container-highest'));
}

function setLightModeHighContrast() {
    const r = $(':root');

    r.css('--primary', $(':root').css('--light-high-contrast-primary'));
    r.css('--surface-tint', $(':root').css('--light-high-contrast-surface-tint'));
    r.css('--on-primary', $(':root').css('--light-high-contrast-on-primary'));
    r.css('--primary-container', $(':root').css('--light-high-contrast-primary-container'));
    r.css('--on-primary-container', $(':root').css('--light-high-contrast-on-primary-container'));
    r.css('--secondary', $(':root').css('--light-high-contrast-secondary'));
    r.css('--on-secondary', $(':root').css('--light-high-contrast-on-secondary'));
    r.css('--secondary-container', $(':root').css('--light-high-contrast-secondary-container'));
    r.css('--on-secondary-container', $(':root').css('--light-high-contrast-on-secondary-container'));
    r.css('--teritary', $(':root').css('--light-high-contrast-teritary'));
    r.css('--on-teritary', $(':root').css('--light-high-contrast-on-teritary'));
    r.css('--teritary-container', $(':root').css('--light-high-contrast-teritary-container'));
    r.css('--on-teritary-container', $(':root').css('--light-high-contrast-on-teritary-container'));
    r.css('--error', $(':root').css('--light-high-contrast-error'));
    r.css('--on-error', $(':root').css('--light-high-contrast-on-error'));
    r.css('--error-container', $(':root').css('--light-high-contrast-error-container'));
    r.css('--on-error-container', $(':root').css('--light-high-contrast-on-error-container'));
    r.css('--background', $(':root').css('--light-high-contrast-background'));
    r.css('--on-background', $(':root').css('--light-high-contrast-on-background'));
    r.css('--surface', $(':root').css('--light-high-contrast-surface'));
    r.css('--on-surface', $(':root').css('--light-high-contrast-on-surface'));
    r.css('--surface-variant', $(':root').css('--light-high-contrast-surface-variant'));
    r.css('--on-surface-variant', $(':root').css('--light-high-contrast-on-surface-variant'));
    r.css('--outline', $(':root').css('--light-high-contrast-outline'));
    r.css('--outline-variant', $(':root').css('--light-high-contrast-outline-variant'));
    r.css('--shadow', $(':root').css('--light-high-contrast-shadow'));
    r.css('--scrim', $(':root').css('--light-high-contrast-scrim'));
    r.css('--inverse-surface', $(':root').css('--light-high-contrast-inverse-surface'));
    r.css('--inverse-on-surface', $(':root').css('--light-high-contrast-inverse-on-surface'));
    r.css('--inverse-primary', $(':root').css('--light-high-contrast-inverse-primary'));
    r.css('--primary-fixed', $(':root').css('--light-high-contrast-primary-fixed'));
    r.css('--on-primary-fixed', $(':root').css('--light-high-contrast-on-primary-fixed'));
    r.css('--primary-fixed-dim', $(':root').css('--light-high-contrast-primary-fixed-dim'));
    r.css('--secondary-fixed', $(':root').css('--light-high-contrast-secondary-fixed'));
    r.css('--on-secondary-fixed', $(':root').css('--light-high-contrast-on-secondary-fixed'));
    r.css('--secondary-fixed-dim', $(':root').css('--light-high-contrast-secondary-fixed-dim'));
    r.css('--teritary-fixed', $(':root').css('--light-high-contrast-teritary-fixed'));
    r.css('--on-teritary-fixed', $(':root').css('--light-high-contrast-on-teritary-fixed'));
    r.css('--teritary-fixed-dim', $(':root').css('--light-high-contrast-teritary-fixed-dim'));
    r.css('--on-teritary-fixed-variant', $(':root').css('--light-high-contrast-on-teritary-fixed-variant'));
    r.css('--surface-dim', $(':root').css('--light-high-contrast-surface-dim'));
    r.css('--surface-bright', $(':root').css('--light-high-contrast-surface-bright'));
    r.css('--surface-container-lowest', $(':root').css('--light-high-contrast-surface-container-lowest'));
    r.css('--surface-container', $(':root').css('--light-high-contrast-surface-container'));
    r.css('--surface-container-high', $(':root').css('--light-high-contrast-surface-container-high'));
    r.css('--surface-container-highest', $(':root').css('--light-high-contrast-surface-container-highest'));
}

function setDarkModeHighContrast() {
    const r = $(':root');

    r.css('--primary', $(':root').css('--dark-high-contrast-primary'));
    r.css('--surface-tint', $(':root').css('--dark-high-contrast-surface-tint'));
    r.css('--on-primary', $(':root').css('--dark-high-contrast-on-primary'));
    r.css('--primary-container', $(':root').css('--dark-high-contrast-primary-container'));
    r.css('--on-primary-container', $(':root').css('--dark-high-contrast-on-primary-container'));
    r.css('--secondary', $(':root').css('--dark-high-contrast-secondary'));
    r.css('--on-secondary', $(':root').css('--dark-high-contrast-on-secondary'));
    r.css('--secondary-container', $(':root').css('--dark-high-contrast-secondary-container'));
    r.css('--on-secondary-container', $(':root').css('--dark-high-contrast-on-secondary-container'));
    r.css('--teritary', $(':root').css('--dark-high-contrast-teritary'));
    r.css('--on-teritary', $(':root').css('--dark-high-contrast-on-teritary'));
    r.css('--teritary-container', $(':root').css('--dark-high-contrast-teritary-container'));
    r.css('--on-teritary-container', $(':root').css('--dark-high-contrast-on-teritary-container'));
    r.css('--error', $(':root').css('--dark-high-contrast-error'));
    r.css('--on-error', $(':root').css('--dark-high-contrast-on-error'));
    r.css('--error-container', $(':root').css('--dark-high-contrast-error-container'));
    r.css('--on-error-container', $(':root').css('--dark-high-contrast-on-error-container'));
    r.css('--background', $(':root').css('--dark-high-contrast-background'));
    r.css('--on-background', $(':root').css('--dark-high-contrast-on-background'));
    r.css('--surface', $(':root').css('--dark-high-contrast-surface'));
    r.css('--on-surface', $(':root').css('--dark-high-contrast-on-surface'));
    r.css('--surface-variant', $(':root').css('--dark-high-contrast-surface-variant'));
    r.css('--on-surface-variant', $(':root').css('--dark-high-contrast-on-surface-variant'));
    r.css('--outline', $(':root').css('--dark-high-contrast-outline'));
    r.css('--outline-variant', $(':root').css('--dark-high-contrast-outline-variant'));
    r.css('--shadow', $(':root').css('--dark-high-contrast-shadow'));
    r.css('--scrim', $(':root').css('--dark-high-contrast-scrim'));
    r.css('--inverse-surface', $(':root').css('--dark-high-contrast-inverse-surface'));
    r.css('--inverse-on-surface', $(':root').css('--dark-high-contrast-inverse-on-surface'));
    r.css('--inverse-primary', $(':root').css('--dark-high-contrast-inverse-primary'));
    r.css('--primary-fixed', $(':root').css('--dark-high-contrast-primary-fixed'));
    r.css('--on-primary-fixed', $(':root').css('--dark-high-contrast-on-primary-fixed'));
    r.css('--primary-fixed-dim', $(':root').css('--dark-high-contrast-primary-fixed-dim'));
    r.css('--secondary-fixed', $(':root').css('--dark-high-contrast-secondary-fixed'));
    r.css('--on-secondary-fixed', $(':root').css('--dark-high-contrast-on-secondary-fixed'));
    r.css('--secondary-fixed-dim', $(':root').css('--dark-high-contrast-secondary-fixed-dim'));
    r.css('--teritary-fixed', $(':root').css('--dark-high-contrast-teritary-fixed'));
    r.css('--on-teritary-fixed', $(':root').css('--dark-high-contrast-on-teritary-fixed'));
    r.css('--teritary-fixed-dim', $(':root').css('--dark-high-contrast-teritary-fixed-dim'));
    r.css('--on-teritary-fixed-variant', $(':root').css('--dark-high-contrast-on-teritary-fixed-variant'));
    r.css('--surface-dim', $(':root').css('--dark-high-contrast-surface-dim'));
    r.css('--surface-bright', $(':root').css('--dark-high-contrast-surface-bright'));
    r.css('--surface-container-lowest', $(':root').css('--dark-high-contrast-surface-container-lowest'));
    r.css('--surface-container', $(':root').css('--dark-high-contrast-surface-container'));
    r.css('--surface-container-high', $(':root').css('--dark-high-contrast-surface-container-high'));
    r.css('--surface-container-highest', $(':root').css('--dark-high-contrast-surface-container-highest'));
}

$(() => {
    
    if (!localStorage.getItem('colorMode')) {
        localStorage.setItem('colorMode', 'light')
    } else {
        const mode = localStorage.getItem('colorMode');
        const ms = $('#select-color-mode');
        if (mode==='light') {setLightMode()
            ms.val('light');
        }
        else if (mode==='dark') {setDarkMode()
            ms.val('dark');
        }
        else if (mode==='light-high-contrast') {setLightModeHighContrast()
            ms.val('light-high-contrast');
        }
        else if (mode==='dark-high-contrast') {setDarkModeHighContrast()
            ms.val('dark-high-contrast');
        }
        else setLightMode();//light mode fallback
    }

    
    
})

