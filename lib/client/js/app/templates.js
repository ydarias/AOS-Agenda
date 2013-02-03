this["JST"] = this["JST"] || {};

this["JST"]["adminEvent"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n                <tr>\n                    <td>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n                    <td>";
  foundHelper = helpers.tags;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tags; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n                    <td>";
  foundHelper = helpers.time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n                </tr>\n            ";
  return buffer;}

  buffer += "<h1>Admin Event</h1>\n\n\n<form class=>\n    <fieldset>\n        <legend>Event info</legend>\n        <label>Name</label>\n        <input type=\"text\">\n        <label>Description</label>\n        <textarea rows=\"5\"></textarea>\n    </fieldset>\n\n    <fieldset>\n        <legend>Location</legend>\n        <div class=\"map\"></div>\n    </fieldset>\n\n    <fieldset>\n        <legend>Inside map</legend>\n        <input type=\"file\">\n    </fieldset>\n\n    <fieldset>\n        <legend>Slots</legend>\n        <table class=\"table table-striped\">\n            <thead>\n            <tr>\n                <th>Title</th>\n                <th>Tags</th>\n                <th>Time</th>\n            </tr>\n            </thead>\n            <tbody>\n            ";
  stack1 = depth0.slots;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </tbody>\n        </table>\n    </fieldset>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n</form>";
  return buffer;});

this["JST"]["eventList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <div class=\"row-fluid ";
  foundHelper = helpers.classEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.classEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n        <div class=\"media\">\n            <a class=\"titleEvent\" href=\"#events/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                <div class=\"pull-left gapRight\">\n                    <img class=\"media-object\" alt=\"64x64\" src=\"img/events/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "_mini.png\">\n                </div>\n                <div class=\"media-body\">\n                    ";
  foundHelper = helpers.titleEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n                </div>\n            </a>\n        </div>\n    </div>\n    <div class=\"gapListEvents\">\n    </div>\n";
  return buffer;}

  stack1 = depth0.events;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;});

this["JST"]["location"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"map\"></div>\n\n\n";});

this["JST"]["optionEventList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <div class=\"row-fluid ";
  foundHelper = helpers.classEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.classEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n        <div class=\"media\">\n            <a class=\"titleEvent\" href=\"";
  foundHelper = helpers.href;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                <div class=\"pull-left gapRight\">\n                    <img class=\"media-object\" alt=\"64x64\" src=\"img/icons/";
  foundHelper = helpers.iconOptionEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.iconOptionEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n                </div>\n                <div class=\"media-body\">\n                    ";
  foundHelper = helpers.titleOptionEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleOptionEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n                </div>\n            </a>\n        </div>\n    </div>\n    <div class=\"gapListEvents\">\n    </div>\n\n";
  return buffer;}

  buffer += "<img src=\"img/events/";
  stack1 = depth0.event;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ".jpg\" class=\"hero-img\">\n";
  stack1 = depth0.links;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;});

this["JST"]["slot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"slot row-fluid ";
  foundHelper = helpers.favClass;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.favClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    <div class=\"time span1 offset1\">\n        <span class=\"label label-inverse\">";
  stack1 = depth0.slot;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.date;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.startTime;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "-";
  stack1 = depth0.slot;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.date;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.finishTime;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n    </div>\n    <div class=\"info span10\" style=\"min-width: 200px;\">\n        <!--h4 class=\"media-heading\"><a id=clickEvent1 class=\"pull-left\" href=\"event.html\">";
  foundHelper = helpers.titleEvent;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</a></h4-->\n\n        <blockquote>\n            <p>";
  stack1 = depth0.slot;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.title;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\n            <small>";
  stack1 = depth0.slot;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.author;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</small>\n            <span class=\"badge badge-";
  stack1 = depth0.slot;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.location;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.color;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.slot;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.location;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.description;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n        </blockquote>\n    </div>\n</div>";
  return buffer;});

this["JST"]["slots"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"media-list\"></div>\n\n\n";});