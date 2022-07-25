<template>
  <div class="row q-gutter-xl">
    <template v-for="item of analyzers" :key="item.id">
      <div class="row items-center">
        <q-radio
          :model-value="analyzerId"
          :val="item.id"
          :label="item.label"
          @update:model-value="update"
        ></q-radio>
        <a :href="item.home" target="_blank" style="text-decoration: none"
          ><q-icon name="launch" size="sm" color="blue-grey-4" right> </q-icon
        ></a>
      </div>
    </template>
  </div>
</template>
<script setup>
defineProps({
  analyzers: {
    type: Array,
    required: true,
    default: () => [],
  },
  analyzerId: {
    type: String,
    required: true,
    default: '',
  },
})

const emit = defineEmits(['update:analyzerId'])

const update = newAnalyzerId => {
  emit('update:analyzerId', newAnalyzerId)
}
</script>
