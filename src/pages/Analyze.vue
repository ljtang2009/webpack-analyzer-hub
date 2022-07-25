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
        <q-file
          v-model="statsJson"
          class="col-12"
          label="Stats json file"
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
      <div class="row q-pt-lg">
        <div class="col">
          <div class="row justify-center items-center q-col-gutter-md">
            <div class="col row justify-end">
              <q-btn
                type="submit"
                color="primary"
                :loading="submitLoading"
                no-caps
                label="Analyze"
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
import { post } from '../lib/fetch'
import { useQuasar } from 'quasar'
import {
  webpackBundleAnalyzer,
  bundleStats,
  webpackStatsReport,
} from '../lib/analyzers'
import AnalyzerRadioGroup from '../components/AnalyzerRadioGroup.vue'
import DemoResultTip from '../components/DemoResultTip.vue'
import open from '../lib/open'

const $q = useQuasar()

const demo = process.env.DEMO

const analyzers = [webpackBundleAnalyzer, bundleStats, webpackStatsReport]

/* #region analyzerId */
const defaultAnalyzerId = analyzers[0].id
const analyzerId = ref(defaultAnalyzerId)
const resetAnalyzerId = () => (analyzerId.value = defaultAnalyzerId)
/* #endregion  */

/* #region statsJson */
const defaultStatsJson = null
const statsJson = ref(defaultStatsJson)
const statsJsonRules = [val => val !== null || 'Please select stats json file']
const resetStatsJson = () => (statsJson.value = defaultStatsJson)
/* #endregion */

const onReset = () => {
  resetAnalyzerId()
  resetStatsJson()
}

const submitLoading = ref(false)

const successNotify = () => {
  $q.notify({
    type: 'positive',
    message: 'Analyze successfully.',
  })
}

const submit = async () => {
  submitLoading.value = true
  const formData = new FormData()
  formData.append('analyzerId', analyzerId.value)
  formData.append('statsJson', statsJson.value)
  const requestConfig = {
    header: {
      'Content-Type': 'multipart/form-data',
    },
  }
  try {
    await post('/api/analyze', formData, requestConfig, {
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
      // analyze result html file should be in public/demo-page/analyze
      open(`demo-page/analyze/${analyzerId.value}.html`)
      successNotify()
      submitLoading.value = false
      resolve()
    }, 1000)
  })

const onSubmit = async () => {
  const submitFunction = demo ? demoSubmit : submit
  await submitFunction()
}
</script>
