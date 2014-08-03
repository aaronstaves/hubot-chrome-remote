# Description
# Script to allow hubot to act as a chrome remote
#
# Commands:
#   hubot chrome (me) <url>
#
# Author:
#   https://github.com/aaronstaves/

module.exports = (robot) ->

  #
  # listens to chrome or chrome me
  #
  robot.respond /chrome( me)? (.*)/i, (msg) ->

    url = msg.match[2]
    msg.send("chroming " + url)

