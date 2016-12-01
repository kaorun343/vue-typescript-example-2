declare module '*.html' {
  import * as Vue from 'vue'
  import { ComponentOptions } from 'vue'

  var template: <V extends Vue>(options: ComponentOptions<V>) => ComponentOptions<V>

  export = template
}
