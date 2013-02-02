this["JST"] = this["JST"] || {};

this["JST"]["adminEvent"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                <tr>\r\n                    <td>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\r\n                    <td>";
  foundHelper = helpers.tags;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tags; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\r\n                    <td>";
  foundHelper = helpers.time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\r\n                </tr>\r\n            ";
  return buffer;}

  buffer += "<h1>Admin Event</h1>\r\n\r\n\r\n<form class=>\r\n    <fieldset>\r\n        <legend>Event info</legend>\r\n        <label>Name</label>\r\n        <input type=\"text\">\r\n        <label>Description</label>\r\n        <textarea rows=\"5\"></textarea>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <legend>Location</legend>\r\n        <div class=\"map\"></div>\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <legend>Inside map</legend>\r\n        <input type=\"file\">\r\n    </fieldset>\r\n\r\n    <fieldset>\r\n        <legend>Slots</legend>\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>Title</th>\r\n                <th>Tags</th>\r\n                <th>Time</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            ";
  stack1 = depth0.slots;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tbody>\r\n        </table>\r\n    </fieldset>\r\n\r\n\r\n    <fieldset>\r\n\r\n    </fieldset>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n</form>";
  return buffer;});

this["JST"]["eventList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n    <div class=\"row-fluid ";
  foundHelper = helpers.classEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.classEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n        <div class=\"media\">\r\n            <a class=\"titleEvent\" href=\"event.html\">\r\n                <div class=\"pull-left gapRight\">\r\n                    <img class=\"media-object\" alt=\"64x64\" src=\"img/";
  foundHelper = helpers.iconEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.iconEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    ";
  foundHelper = helpers.titleEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"gapListEvents\">\r\n    </div>\r\n\r\n";
  return buffer;}

  stack1 = depth0.events;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n\r\n";
  return buffer;});

this["JST"]["location"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"map\"></div>\r\n\r\n\r\n";});

this["JST"]["optionEventList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n    <div class=\"row-fluid ";
  foundHelper = helpers.classEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.classEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n        <div class=\"media\">\r\n            <a class=\"titleEvent\" href=\"";
  foundHelper = helpers.href;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ".html\">\r\n                <div class=\"pull-left gapRight\">\r\n                    <img class=\"media-object\" alt=\"64x64\" src=\"img/";
  foundHelper = helpers.iconOptionEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.iconOptionEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    ";
  foundHelper = helpers.titleOptionEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleOptionEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"gapListEvents\">\r\n    </div>\r\n\r\n";
  return buffer;}

  stack1 = depth0.events;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n\r\n";
  return buffer;});

this["JST"]["slots"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n<div class=\"slot row-fluid\">\r\n    <div class=\"time span1 offset1\">\r\n        <span class=\"label label-inverse\">";
  stack1 = depth0.date;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.startTime;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "-";
  stack1 = depth0.date;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.finishTime;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\r\n    </div>\r\n    <div class=\"info span10\" style=\"min-width: 200px;\">\r\n        <!--h4 class=\"media-heading\"><a id=clickEvent1 class=\"pull-left\" href=\"event.html\">";
  foundHelper = helpers.titleEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</a></h4-->\r\n\r\n        <blockquote>\r\n            <p>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n            <small>";
  foundHelper = helpers.author;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.author; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</small>\r\n            <span class=\"badget-";
  stack1 = depth0.location;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.location;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\r\n        </blockquote>\r\n    </div>\r\n</div>\r\n";
  return buffer;}

  stack1 = depth0.slots;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n\r\n";
  return buffer;});

this["JST"]["template1"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n<div>\r\n    <h1>Title ";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\r\n    <p>\r\n        Speakers : ";
  foundHelper = helpers.speakers;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.speakers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\r\n    </p>\r\n</div>\r\n";
  return buffer;}

  stack1 = depth0.events;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n\r\n";
  return buffer;});