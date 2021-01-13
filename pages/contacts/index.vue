<!--suppress HtmlUnknownTarget -->
<template lang="pug">
  div
    a.d-block(href="mailto:info@ntp-help.ru") info@ntp-help.ru
    a.d-block(href="tel:+79253911742") + 7 (925) 391 17 42
    br
    p {{ $t("ntp.address") }}
    iframe(
      width="100%"
      height="400"
      frameborder="0"
      style="border: 0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASzqnCrYBWXhFtdlXXBg_KCLxQTa1I5Y4&q=55.776580263%2C37.6757242201&center=55.7770871264%2C37.6721837042&zoom=14&maptype=roadmap"
      allowfullscreen="true"
    )
</template>
