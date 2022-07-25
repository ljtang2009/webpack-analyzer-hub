import { ref, watch } from 'vue'
import { Dark, LocalStorage } from 'quasar'

export const isDark = ref(false)

const isDarkKeyName = 'is_dark'

if (LocalStorage.has(isDarkKeyName)) {
  isDark.value = LocalStorage.getItem(isDarkKeyName)
  Dark.set(isDark.value)
} else {
  isDark.value = Dark.isActive
}
export const setDark = val => {
  isDark.value = val
  Dark.set(isDark.value)
  LocalStorage.set(isDarkKeyName, isDark.value)
}

watch(
  () => Dark.isActive,
  newValue => {
    if (!LocalStorage.has(isDarkKeyName)) {
      isDark.value = newValue
    }
  }
)
