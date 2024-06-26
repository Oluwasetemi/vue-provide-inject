import { reactify } from '@vueuse/shared'
import YAML from 'js-yaml'

export const stringify = reactify(
  (input) => YAML.dump(input, {
    skipInvalid: true,
    forceQuotes: true,
    condenseFlow: true,
    noCompatMode: true,
    quotingType: '\'',
  }),
)
