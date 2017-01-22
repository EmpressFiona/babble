import { createWidget } from 'discourse/widgets/widget';
import template from '../widgets/templates/babble-online'

export default createWidget('babble-online', {
  defaultState(attrs) {
    return { topic: attrs.topic }
  },

  html() { return template.render(this) },
})
