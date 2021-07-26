<template>
  <div class="modal-button">
    <div class="flex items-center">
      <img :src="source.brandUrl" class="img" />
      <p class="ml-4 flex flex-col">
        {{ source.label }}
      </p>
    </div>
    <base-icon name="chevron-right"></base-icon>
  </div>
</template>
<script>
export default {
  props: {
    source: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>