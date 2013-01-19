EventsHeaderView = Backbone.View.extend(
  el: '#actionBarAttachmentPoint'
  render: () ->
    @$el.append 'hello actionBar'
)

EventsMainContentView = Backbone.View.extend(
  el: '#mainContentAttachmentPoint'
  render: () ->
    @$el.append 'hello mainContent'
)

EventsView = Backbone.View.extend(
  render: () ->
    header = new EventsHeaderView
    header.render()
    content = new EventsMainContentView
    content.render()
)

window.AOS = window.AOS || {}
window.AOS.EventsView = EventsView