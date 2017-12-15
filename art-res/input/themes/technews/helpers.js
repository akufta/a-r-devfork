/*
 * Custom theme helpers for Handlebars.js
 */

let themeHelpers = {
    lazyLoadForContentImages: function(postText) {
        let modifiedPostText = postText;
        // Select all images from the content
        modifiedPostText = modifiedPostText.replace(/<img[a-zA-Z0-9\s\"\'\=\-]*?src="(.*?)".*?>/gmi, function(match, url) {
            // Create *-xs image path
            let image = url.split('.');

            if(
                image[image.length - 1] === 'jpeg' ||
                image[image.length - 1] === 'jpg' ||
                image[image.length - 1] === 'png' ||
                image[image.length - 1] === 'JPEG' ||
                image[image.length - 1] === 'JPG' ||
                image[image.length - 1] === 'PNG'
            ) {
                let xsImage = image.slice(0, image.length - 1) + '-xs.' + image[image.length - 1];
                // Replace src attribute with *-xs image path
                match = match.replace(/src=".*?"/gi, 'src="' + xsImage + '"');
                // change srcset to data-srcset
                match = match.replace('srcset="', 'data-srcset="');
                // set srcset to gif
                match = match.replace('data-srcset="', 'srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="');
                // replace sizes with data-sizes
                match = match.replace(/sizes=".*?"/i, 'data-sizes="auto"');
                // add necessary CSS classes
                if(match.indexOf('class="') > -1) {
                    match = match.replace('class="', 'class="lazyload blur-up ');
                } else {
                    match = match.replace('<img', '<img class="lazyload blur-up"');
                }
            }
            // return modified <img> tag
            return match;
        });

        return modifiedPostText;
    },

    getTagColor: function(tag, tagsConfig = '') {
        if(tagsConfig.trim() === '') {
            return 'u-tag--1';
        }

        tagsConfig = tagsConfig.split(',');

        if(tagsConfig.length) {
            tagsConfig = tagsConfig.map(item => item.split('='));

            for(let tagConfig of tagsConfig) {
                if(tagConfig.length !== 2) {
                    continue;
                }

                if(tagConfig[0].trim() === tag) {
                    return 'u-tag--' + tagConfig[1];
                }
            }
        } else {
            return 'u-tag--1';
        }

        return 'u-tag--1';
    }
};

module.exports = themeHelpers;
