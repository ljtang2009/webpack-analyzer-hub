<template>
  <q-page class="q-pa-lg row">
    <q-form class="col-10 offset-1" @submit="onSubmit" @reset="onReset">
      <div>
        <div>Analyzer:</div>
        <AnalyzerRadioGroup
          v-model:analyzer-id="analyzerId"
          :analyzers="analyzers"
        />
      </div>
      <div class="row">
        <div class="col">
          <div class="row items-center q-col-gutter-md">
            <q-file
              v-model="statsJson1"
              class="col-6"
              label="Stats json file #1"
              accept=".json"
              :rules="statsJsonRules"
              lazy-rules="ondemand"
              hint="Webpack stats json file"
            >
              <template #prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <q-file
              v-model="statsJson2"
              class="col-6"
              label="Stats json file #2"
              accept=".json"
              :rules="statsJsonRules"
              lazy-rules="ondemand"
              hint="Webpack stats json file"
            >
              <template #prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
        </div>
      </div>
      <div class="row q-pt-lg">
        <div class="col">
          <div class="row justify-center items-center q-col-gutter-md">
            <div class="col row justify-end">
              <q-btn
                type="submit"
                color="primary"
                :loading="submitLoading"
                no-caps
                label="Compare"
              />
            </div>
            <div class="col">
              <q-btn type="reset" color="primary" no-caps label="Reset" flat />
            </div>
          </div>
        </div>
      </div>
      <DemoResultTip v-if="demo" />
    </q-form>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { bundleStats } from '../lib/analyzers'
import AnalyzerRadioGroup from '../components/AnalyzerRadioGroup.vue'
import { post } from '../lib/fetch'
import { useQuasar } from 'quasar'
import DemoResultTip from '../components/DemoResultTip.vue'
import open from '../lib/open'

const $q = useQuasar()

const demo = process.env.DEMO

const analyzers = [bundleStats]

/* #region analyzerId */
const defaultAnalyzerId = analyzers[0].id
const analyzerId = ref(defaultAnalyzerId)
const resetAnalyzerId = () => (analyzerId.value = defaultAnalyzerId)
/* #endregion  */

/* #region statsJson */
const defaultStatsJson = null
const statsJsonRules = [val => val !== null || 'Please select stats json file']
const statsJson1 = ref(defaultStatsJson)
const statsJson2 = ref(defaultStatsJson)
const resetStatsJson = () =>
  (statsJson1.value = statsJson2.value = defaultStatsJson)
/* #endregion */

const submitLoading = ref(false)

const successNotify = () => {
  $q.notify({
    type: 'positive',
    message: 'Compare successfully.',
  })
}

const submit = async () => {
  submitLoading.value = true
  const formData = new FormData()
  formData.append('analyzerId', analyzerId.value)
  formData.append('statsJson1', statsJson1.value)
  formData.append('statsJson2', statsJson2.value)
  const requestConfig = {
    header: {
      'Content-Type': 'multipart/form-data',
    },
  }
  try {
    await post('/api/compare', formData, requestConfig, {
      needThrow: true,
    })
    successNotify()
  } catch (error) {
    // error had shown
  }
  submitLoading.value = false
}

const demoSubmit = () =>
  new Promise(resolve => {
    submitLoading.value = true
    setTimeout(() => {
      // analyze result html file should be in public/demo-page/compare
      open(`demo-page/compare/${analyzerId.value}.html`)
      successNotify()
      submitLoading.value = false
      resolve()
    }, 1000)
  })

const onSubmit = async () => {
  const submitFunction = demo ? demoSubmit : submit
  await submitFunction()
}

const onReset = () => {
  resetAnalyzerId()
  resetStatsJson()
}
</script>
