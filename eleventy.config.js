import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles.css")
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
}
