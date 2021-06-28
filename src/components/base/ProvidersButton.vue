<template>
  <div class="modal-button">
    <div class="flex items-center">
      <base-icon :name="source.icon"></base-icon>
      <p class="ml-4 flex flex-col">
        {{ source.title }}
        <span> {{ source.fee }} </span>
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