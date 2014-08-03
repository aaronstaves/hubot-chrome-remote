var expect = require("chai").expect;
var path   = require("path");

var Robot       = require("hubot/src/robot");
var TextMessage = require("hubot/src/message").TextMessage;

describe("hubot-chrome-remote Functionality", function() {
  var robot;
  var user;
  var adapter;

  beforeEach(function(done) {
      // create new robot, without http, using the mock adapter
      robot = new Robot(null, "mock-adapter", false, "TestBot");

      robot.adapter.on("connected", function() { 
          // only load scripts we absolutely need, like auth.coffee
          process.env.HUBOT_AUTH_ADMIN = "1";
          robot.loadFile(
              path.resolve(
                  path.join("node_modules/hubot/src/scripts")
              ),
              "auth.coffee"
          );

          // load the module under test and configure it for the
          // robot.  This is in place of external-scripts
          require("../index")(robot);

          // create a user
          user = robot.brain.userForId("1", {
              name: "mocha",
              room: "#mocha"
          });

          // create a second user if we want to observer user to
          // user interaction
          user2 = robot.brain.userForId("2", {
              name: "chai",
              room: "#mocha"
          });

          adapter = robot.adapter;

          setTimeout(done, 250);
      });
      robot.run();
  });

  afterEach(function() {
      robot.shutdown();
  });

  describe("chrome abc123", function() { 
    /*
    * hubot chrome abc123
    */
    // Tell hubot chrome abc123
    //
    it("responds to chrome abc123", function(done) {
        adapter.on("send", function(envelope, strings) {
            try { 
              expect(strings[0]).to.equal("chroming abc123");
              done();
            } catch(e) { 
              done(e);
            }
        });

      // Send from first user
      adapter.receive(new TextMessage(user, robot.name+" chrome abc123"));
    });

    it("responds to chrome me abc123", function(done) {

        adapter.on("send", function(envelope, strings) {
            try { 
              expect(strings[0]).to.equal("chroming abc123");
              done();
            } catch(e) { 
              done(e);
            }
        });

      // Send from second user
      adapter.receive(new TextMessage(user2, robot.name+" chrome me abc123"));
    });
  });
});
