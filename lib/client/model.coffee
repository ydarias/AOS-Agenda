Event = Backbone.Model.extend()

Events = Backbone.Collection.extend(
  model: Event
)

window.AOS = window.AOS || {};
window.AOS.Event = Event;
window.AOS.Events = Events;