module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('src/brand/');
    eleventyConfig.addPassthroughCopy('src/icon/');
    eleventyConfig.addPassthroughCopy('src/img/');
    eleventyConfig.addPassthroughCopy('src/script/');
    eleventyConfig.addPassthroughCopy('src/style/');
    eleventyConfig.setServerOptions({
        port: 3001,
    });
    return {
        dir: {
            output: 'dist',
            input: 'src'
        }
    };
};