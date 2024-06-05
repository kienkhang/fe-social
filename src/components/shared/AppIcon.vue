<template lang="pug">
.app-icon(:style='iconStyle' :class='cn("w-6 h-6", props.class)')

</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { encodeSvgForCss } from "@iconify/utils/lib/svg/encode-svg-for-css";
import { cn } from "@/utils/cn";
// https://bl.ocks.org/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
// https://antfu.me/posts/icons-in-pure-css'
// https://github.com/unocss/unocss/blob/main/packages/preset-icons/src/core.ts
const props = withDefaults(
  defineProps<{
    icon: string;
    mode?: "auto" | "mask" | "bg";
    class?: HTMLAttributes["class"];
  }>(),
  {
    mode: "auto",
  }
);
// src\assets\vue.svg
// function encodeSvg(svg: string) {
//   return svg
//     .replace('<svg', ~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"')
//     .replace(/"/g, "'")
//     .replace(/%/g, '%25')
//     .replace(/#/g, '%23')
//     .replace(/{/g, '%7B')
//     .replace(/}/g, '%7D')
//     .replace(/</g, '%3C')
//     .replace(/>/g, '%3E')
//     .replace(/\s+/g, ' ')
// }

// function pxToEm(val: number) {
//   const body = document.body
//   const bodyStyle = window.getComputedStyle(body, null).getPropertyValue('font-size')
//   const fontSize = parseFloat(bodyStyle)
//   return val / fontSize
// }

function generateProperties(svg: string) {
  let mode = props.mode;
  // if an SVG icon have the `currentColor` value,
  // it's very likely to be a monochrome icon
  if (props.mode === "auto")
    mode = svg.includes("currentColor") ? "mask" : "bg";

  const uri = `url("data:image/svg+xml;utf8,${encodeSvgForCss(svg)}")`;

  // monochrome
  if (mode === "mask") {
    // Thanks to https://codepen.io/noahblon/post/coloring-svgs-in-css-background-images
    return {
      "-webkit-mask": `${uri} no-repeat`,
      mask: `${uri} no-repeat`,
      "-webkit-mask-size": "100% 100%",
      "mask-size": "100% 100%",
      "background-color": "currentColor",
      // for Safari https://github.com/elk-zone/elk/pull/264
    };
  } else {
    return {
      background: `${uri} no-repeat`,
      "background-size": "100% 100%",
      "background-color": "transparent",
    };
  }
}

const iconStyle = computed(() => generateProperties(props.icon));
</script>

<style lang="stylus" scoped></style>
