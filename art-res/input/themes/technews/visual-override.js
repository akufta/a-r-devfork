/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = '';

    if(params.minFontSize !== '1.1' || params.maxFontSize !== '1.3') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 220));
          }
        }

        @media screen and (min-width: 240rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }
	 if(params.textColor !== '#2c2e35') {
        output += `
        body {
               color: ${params.textColor};
        }`;
    }

    if(params.headingColor !== '#2c2e35') {
        output += `
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
               color: ${params.headingColor};
        }
        .box--gray > .box__title {
               color: ${params.headingColor};
        }`;
    }

    if(params.linkColor !== '#2c2e35') {
        output += `
        a {
               color: ${params.linkColor};
        }`;
    } 
	
    if(params.linkHoverColor !== '#448aff') {
        output += `
        a:hover,
        a:active,
        a:focus {
               color: ${params.linkHoverColor};
        }
        .post__entry a,
        .post__entry a:hover,
        .post__entry a:active,
        .post__entry a:focus {
               color: ${params.linkHoverColor};
        }
        .post__nav__link:hover h5 {
               color: ${params.linkHoverColor};
        }
        .footer__nav-item > a:hover,
        .footer__nav-item > a:active,
        .footer__nav-item > a:focus {
               color: ${params.linkHoverColor};
        }`;
    }
	
	if(params.primaryColor !== '#448aff') {
        output += `
        .topbar {
               background: ${params.primaryColor};
        }
        .btn,
        [type=button],
        [type=submit],
        button {
               background: ${params.primaryColor};
               border-color: ${params.primaryColor};
        }   
        [type=text]:focus,
        [type=url]:focus,
        [type=tel]:focus,
        [type=number]:focus,
        [type=email]:focus,
        [type=search]:focus,
        textarea:focus,
        select:focus {
               -webkit-box-shadow: inset 0 0 2px ${params.primaryColor};
               box-shadow: inset 0 0 2px ${params.primaryColor};
        }

        [type=checkbox]:checked+.checkbox:before {
               color: ${params.primaryColor};
        }
        [type=radio]:checked + .radio:before {
               background: ${params.primaryColor};
        }
        select[multiple]:focus {
               border-color: ${params.primaryColor};  
        }
        .u-comment-count {
               background: ${params.primaryColor};
        } 
        .u-comment-count:after {
               border-color: ${params.primaryColor} transparent transparent transparent;
        }
        .post__bio { 
               border-color: ${params.primaryColor}; 
        }`;
    }

    if(params.mainWidth !== '46rem' || params.sidebarWidth !== '17rem') {
        output += `
        .topbar__inner {
               max-width: calc(${params.mainWidth} + ${params.sidebarWidth} + 3.85714rem + 1vw);
        }
        @media all and (min-width: 56.25em) {
           .content {
               grid-template-columns: 1fr minmax(auto, ${params.mainWidth}) calc(${params.sidebarWidth} + 1.28571rem + 0.5vw) 1fr;
           }
        }`;
    }

    if(params.submenu === 'custom') {
        output += `
        @media all and (min-width: 56.25em) {
           .navbar__submenu  {
               width: ${params.submenuWidth}rem;
           }
        }`;
    }

    if(params.linkColorMenu !== '#ffffff') {
        output += `
        .navbar__menu li a,
        .navbar__menu li span {
               color: ${params.linkColorMenu};
        }`;
    }

    if(params.linkHoverColorMenu !== '#ffffff') {
        output += `
        .navbar__menu li a:hover:not(span),
        .navbar__menu li span:hover:not(span) {
               color: ${params.linkHoverColorMenu};
        }`;
    }


    return output;
}

module.exports = generateOverride;
