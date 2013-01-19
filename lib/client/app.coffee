App = () ->
  start: () ->
    eventsView = new AOS.EventsView()
    eventsView.render()

window.AOS = window.AOS || {};
window.AOS.App = App;