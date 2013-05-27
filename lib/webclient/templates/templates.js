this["JST"] = this["JST"] || {};

this["JST"]["errorBlock"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        ";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</br>\n    ";
  return buffer;}

  buffer += "<div class=\"alert alert-error\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">X</button>\n    ";
  stack1 = depth0.errors;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;});

this["JST"]["event"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\n    <td>\n        <a href=\"#event/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n            <div class=\"row-fluid\">\n                <div class=\"span8\">\n                    <h2>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n                </div>\n                <div class=\"span4\">\n                    <h2>";
  foundHelper = helpers.startDate;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.startDate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.endDate;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.endDate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n                </div>\n            </div>\n            <div>\n                ";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n            </div>\n        </a>\n    </td>\n</tr>\n";
  return buffer;});

this["JST"]["eventDashboard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"tempStatBox span2\" ontablet=\"span4\" ondesktop=\"span2\">\n        <div class=\"tempStat\" style=\"border-color: rgb(234, 232, 116);\">";
  foundHelper = helpers.sessionsNumber;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sessionsNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n        <span>Number of sessions</span>\n    </div>\n</div>";
  return buffer;});

this["JST"]["eventDesktop"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div id=\"sidebar-left\" class=\"span1\">\n        <div class=\"nav-collapse sidebar-nav\">\n            <ul class=\"nav nav-tabs nav-stacked main-menu\">\n                <li id=\"eventDashboard\">\n                    <a href=\"#event/";
  foundHelper = helpers.eventId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.eventId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "/dashboard\"><i class=\"fa-icon-hdd\"></i><span class=\"hidden-tablet\">Dashboard</span></a>\n                </li>\n                <li id=\"eventSessions\">\n                    <a href=\"#event/";
  foundHelper = helpers.eventId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.eventId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "/sessions\"><i class=\"fa-icon-th-list\"></i><span class=\"hidden-tablet\">Sessions</span></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div id=\"content\" class=\"span11\">\n        <div id=\"eventContentAttachmentPoint\" class=\"row-fluid\"></div>\n    </div>\n</div>";
  return buffer;});

this["JST"]["eventSessions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row-fluid\">\n    <p>\n        <a id=\"add-session-button\" class=\"btn btn-primary\">\n            <i class=\"icon-plus icon-white\"></i>Add session\n        </a>\n    </p>\n</div>\n\n<div id=\"add-session-form\" class=\"box\" style=\"display: none;\">\n    <div class=\"box-content\">\n        <form id=\"newSessionForm\" class=\"form-horizontal\">\n            <div id=\"form-errors\"></div>\n            <fieldset>\n                <div class=\"control-group\">\n                    <label class=\"control-label\" for=\"sessionName\">Session name</label>\n                    <div class=\"controls\">\n                        <input id=\"sessionName\" type=\"text\" class=\"input-xxlarge \" placeholder=\"Your session name here ...\">\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <label class=\"control-label\" for=\"sessionDescription\">Session description</label>\n                    <div class=\"controls\">\n                        <textarea id=\"sessionDescription\" class=\"input-xxlarge\" placeholder=\"Your description here ...\" rows=\"5\"></textarea>\n                    </div>\n                </div>\n                <div class=\"form-actions\">\n                    <button id=\"submit-session-button\" type=\"button\" class=\"btn btn-primary\">Submit</button>\n                    <button id=\"cancel-button\" type=\"button\" class=\"btn\">Cancel</button>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n\n<table id=\"sessions-list\" class=\"table table-hover\">\n    <tbody>\n    </tbody>\n</div>\n";});

this["JST"]["listEvents"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"content\" class=\"span12\">\n    <div class=\"row-fluid\">\n        <p>\n            <a id=\"add-event-button\" class=\"btn btn-primary\">\n                <i class=\"icon-plus icon-white\"></i>Add event\n            </a>\n            <a id=\"refresh-events-button\" class=\"btn\">\n                <i class=\"icon-refresh\"></i>Refresh\n            </a>\n        </p>\n    </div>\n\n    <div id=\"add-event-form\" class=\"box\" style=\"display: none;\">\n        <div class=\"box-content\">\n            <form id=\"newEventForm\" class=\"form-horizontal\">\n                <div id=\"form-errors\"></div>\n                <fieldset>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"eventName\">Event name</label>\n                        <div class=\"controls\">\n                            <input id=\"eventName\" type=\"text\" class=\"input-xxlarge \" placeholder=\"Your event name here ...\">\n                        </div>\n                    </div>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"dateRange\">Dates</label>\n                        <div class=\"controls\">\n                            <div class=\"input-prepend\">\n                                <span class=\"add-on\"><i class=\"icon-calendar\"></i></span>\n                                <input id=\"dateRange\" type=\"text\" />\n                            </div>\n\n                        </div>\n                    </div>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\" for=\"eventDescription\">Event description</label>\n                        <div class=\"controls\">\n                            <textarea id=\"eventDescription\" class=\"input-xxlarge\" placeholder=\"Your description here ...\" rows=\"5\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"form-actions\">\n                        <button id=\"submit-event-button\" type=\"button\" class=\"btn btn-primary\">Submit</button>\n                        <button id=\"cancel-button\" type=\"button\" class=\"btn\">Cancel</button>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n\n    <table id=\"events-list\" class=\"table table-hover\">\n        <tbody>\n        </tbody>\n    </div>\n</div>";});

this["JST"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Loading ...";});

this["JST"]["session"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\n    <td>\n        <a href=\"#event/";
  foundHelper = helpers.eventId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.eventId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "/session/";
  foundHelper = helpers.sessionId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sessionId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\n            <div class=\"row-fluid\">\n                <div class=\"span8\">\n                    <h2>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n                </div>\n                <div class=\"span4\">\n                    <h2>";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n                </div>\n            </div>\n            <div>\n                ";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n            </div>\n        </a>\n    </td>\n</tr>";
  return buffer;});

this["JST"]["title"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    | ";
  foundHelper = helpers.eventName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.eventName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\n    ";
  return buffer;}

  buffer += "<h1>\n    <a href=\"#\"><i class=\"fa-icon-home\"></i> Your events</a>\n    ";
  stack1 = depth0.eventName;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h1>";
  return buffer;});