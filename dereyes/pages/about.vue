<template>
  <section>
    <h1>
      About
    </h1>
    <p>
      Darin was born in Los Angeles, California. He graduated from UC Davis in
      2016 with a BA in Design.
    </p>
    <p>
      Darin uses light and code to create immersive interactive experiences. At
      times, he aims to move people further along the path of vital
      developmental experiences. At times, he simply aims to create moments of
      delight.
    </p>
    <p>
      He has been recognized for his
      <a
        href="https://2018.sfdesignweek.org/2016-enrichment-scholarship-winners/"
      >
        “clean, smart design solutions with well-researched foundations”,
        “ability to transform personal stories into useful tools”,</a
      >
      and
      <a
        href="https://www.ladancechronicle.com/joe-kye-ching-ching-wong-launch-their-international-tour-at-navel-la/"
        >“visual magic”.</a
      >
    </p>
    <Timeline />
  </section>
</template>

<script>
import Timeline from '~/components/about/timeline.vue'

export default {
  components: {
    Timeline
  }
}
</script>
