const slugify = require('slugify');

const slugifyBootcampNamePreSave = function (next) {
    const bootcamp = this;

    bootcamp.slug = slugify(bootcamp.name, { lower: true });

    next();
};

module.exports = slugifyBootcampNamePreSave;